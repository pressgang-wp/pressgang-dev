import { jsonLd } from "./helpers.mjs";
import { renderEcosystem } from "./sections/ecosystem.mjs";
import { renderFeatures } from "./sections/features.mjs";
import { renderFooter } from "./sections/footer.mjs";
import { renderHero } from "./sections/hero.mjs";
import { renderNav } from "./sections/nav.mjs";
import { renderPhilosophy } from "./sections/philosophy.mjs";
import { renderWhy } from "./sections/why.mjs";
import { versionedAsset } from "../assets.mjs";

export function renderQuartermasterDocument(content, schema) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${content.meta.title}</title>
  <meta name="description" content="${content.meta.description}">
  <link rel="canonical" href="${content.meta.canonical}">
  <meta property="og:title" content="${content.meta.title}">
  <meta property="og:description" content="${content.meta.description}">
  <meta property="og:url" content="${content.meta.canonical}">
  <meta property="og:type" content="website">
  <meta property="og:image" content="${content.meta.image}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${content.meta.title}">
  <meta name="twitter:description" content="${content.meta.description}">
  <meta name="twitter:image" content="${content.meta.image}">
  <link rel="icon" type="image/svg+xml" href="${content.assets.logo}">
  <link rel="apple-touch-icon" href="${content.assets.mascot}">
  <link rel="preload" as="font" type="font/woff2" href="/assets/fonts/bricolage-latin.woff2" crossorigin>
  <link rel="preload" as="font" type="font/woff2" href="/assets/fonts/archivo-latin.woff2" crossorigin>
  <link rel="preload" as="font" type="font/woff2" href="/assets/fonts/jetbrains-mono-latin.woff2" crossorigin>
  <link rel="stylesheet" href="${versionedAsset("/assets/css/styles.css")}">
  <script type="application/ld+json">
${jsonLd(schema)}
  </script>
  <script src="${versionedAsset("/assets/js/app.js")}" defer></script>
</head>
<body class="qm-page">
  <a class="qm-skip-link" href="#main">Skip to content</a>
  ${renderNav(content)}
  ${renderHero(content)}
  <main id="main" tabindex="-1">
    ${renderWhy(content.why)}
    ${renderFeatures(content.features)}
    ${renderPhilosophy(content.philosophy, content.assets)}
    ${renderEcosystem(content.ecosystem)}
  </main>
  ${renderFooter(content)}
</body>
</html>`;
}
