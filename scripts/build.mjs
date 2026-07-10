/**
 * Build step: data + template -> static index.html, then compile Tailwind.
 *
 *   node scripts/build.mjs
 *
 * 1. Reads data/content.json + data/schema.json
 * 2. Renders the full HTML document via src/page.mjs
 * 3. Writes /index.html (committed; this is what GitHub Pages serves)
 * 4. Runs Vite + Tailwind, then copies the compiled CSS to the committed
 *    GitHub Pages asset path.
 */
import { copyFileSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import { renderPage } from "../src/page.mjs";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const read = (p) => JSON.parse(readFileSync(resolve(root, p), "utf8"));

const content = read("data/content.json");
const schema = read("data/schema.json");

const html = renderPage(content, schema);
writeFileSync(resolve(root, "index.html"), html);
console.log("✓ index.html rendered (%d KB)", Math.round(html.length / 1024));

execFileSync(
  "npx",
  ["vite", "build"],
  { cwd: root, stdio: "inherit" }
);

const distAssets = resolve(root, "dist/assets");
const cssAssets = readdirSync(distAssets).filter((file) => file.endsWith(".css"));

if (cssAssets.length !== 1) {
  throw new Error(`Expected one built CSS asset in dist/assets, found ${cssAssets.length}.`);
}

mkdirSync(resolve(root, "assets/css"), { recursive: true });
const compiledCssPath = resolve(root, "assets/css/styles.css");
copyFileSync(resolve(distAssets, cssAssets[0]), compiledCssPath);

const fontAssets = {
  "archivo-latin": "/assets/fonts/archivo-latin.woff2",
  "archivo-latin-ext": "/assets/fonts/archivo-latin-ext.woff2",
  "bricolage-latin": "/assets/fonts/bricolage-latin.woff2",
  "bricolage-latin-ext": "/assets/fonts/bricolage-latin-ext.woff2",
  "jetbrains-mono-latin": "/assets/fonts/jetbrains-mono-latin.woff2",
  "jetbrains-mono-latin-ext": "/assets/fonts/jetbrains-mono-latin-ext.woff2",
};

let compiledCss = readFileSync(compiledCssPath, "utf8");
for (const [assetName, publicPath] of Object.entries(fontAssets).sort((a, b) => b[0].length - a[0].length)) {
  compiledCss = compiledCss.replace(
    new RegExp(`/assets/${assetName}-[A-Za-z0-9_-]+\\.woff2`, "g"),
    publicPath
  );
}
writeFileSync(compiledCssPath, compiledCss);
console.log("✓ assets/css/styles.css compiled");
