/**
 * Build step: compile Tailwind, hash assets, then render static HTML.
 *
 *   node scripts/build.mjs
 *
 * 1. Runs Vite + Tailwind and copies the compiled CSS to the committed
 *    GitHub Pages asset path.
 * 2. Hashes the final CSS + JS assets for cache-busting URLs.
 * 3. Reads page content + schema JSON.
 * 4. Renders committed GitHub Pages HTML files.
 */
import { copyFileSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import { renderPage } from "../src/page.mjs";
import { renderQuartermasterPage } from "../src/pages/quartermaster.mjs";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const read = (p) => JSON.parse(readFileSync(resolve(root, p), "utf8"));

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

const assetVersion = createHash("sha256")
  .update(compiledCss)
  .update(readFileSync(resolve(root, "assets/js/app.js")))
  .digest("hex")
  .slice(0, 12);

process.env.ASSET_VERSION = assetVersion;
console.log("✓ asset version %s", assetVersion);

const pages = [
  {
    output: "index.html",
    render: renderPage,
    content: read("data/content.json"),
    schema: read("data/schema.json"),
  },
  {
    output: "quartermaster/index.html",
    render: renderQuartermasterPage,
    content: read("data/quartermaster/content.json"),
    schema: read("data/quartermaster/schema.json"),
  },
];

for (const page of pages) {
  const html = page.render(page.content, page.schema);
  const outputPath = resolve(root, page.output);
  mkdirSync(dirname(outputPath), { recursive: true });
  writeFileSync(outputPath, html);
  console.log("✓ %s rendered (%d KB)", page.output, Math.round(html.length / 1024));
}
