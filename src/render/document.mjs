import { renderAi } from "./sections/ai.mjs";
import { renderCompare } from "./sections/compare.mjs";
import { renderFeatures } from "./sections/features.mjs";
import { renderFleet } from "./sections/fleet.mjs";
import { renderFooter } from "./sections/footer.mjs";
import { renderGetStarted } from "./sections/get-started.mjs";
import { renderHero } from "./sections/hero.mjs";
import { renderNav } from "./sections/nav.mjs";
import { renderQuartermaster } from "./sections/quartermaster.mjs";
import { renderWhy } from "./sections/why.mjs";

export function renderDocument(c, schema) {
  const s = c.site;
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${s.title}</title>
  <meta name="description" content="${s.description}">
  <link rel="canonical" href="${s.url}">
  <meta property="og:title" content="${s.ogTitle}">
  <meta property="og:description" content="${s.ogDescription}">
  <meta property="og:url" content="${s.url}">
  <meta property="og:type" content="website">
  <meta property="og:image" content="${s.ogImage}">
  <meta property="og:image:width" content="512">
  <meta property="og:image:height" content="512">
  <meta name="twitter:card" content="summary">
  <meta name="twitter:title" content="${s.ogTitle}">
  <meta name="twitter:description" content="${s.ogDescription}">
  <meta name="twitter:image" content="${s.ogImage}">
  <link rel="icon" type="image/png" href="assets/images/pressgang-logo.png">
  <link rel="apple-touch-icon" href="assets/images/pressgang-logo-512.png">
  <link rel="preload" as="font" type="font/woff2" href="assets/fonts/bricolage-latin.woff2" crossorigin>
  <link rel="preload" as="font" type="font/woff2" href="assets/fonts/archivo-latin.woff2" crossorigin>
  <link rel="stylesheet" href="assets/css/styles.css">
  <script type="application/ld+json">
${JSON.stringify(schema, null, 2)}
  </script>
  <script src="assets/js/app.js" defer></script>
</head>
<body>

<a class="pg-skip-link" href="#main">Skip to content</a>

${renderNav(c, s)}

${renderHero(c, s)}

<main id="main" tabindex="-1">
${renderCompare(c)}

${renderFeatures(c)}

${renderWhy(c)}

${renderQuartermaster(c)}

${renderAi(c)}

${renderFleet(c)}

${renderGetStarted(c)}
</main>

${renderFooter(c, s)}

</body>
</html>
`;
}
