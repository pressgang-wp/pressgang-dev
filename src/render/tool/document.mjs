import { versionedAsset } from "../assets.mjs";
import { attr, escapeHtml, externalAttrs, inlineMarkup, jsonLd } from "../quartermaster/helpers.mjs";

const chromeDots = `<span class="tool-chrome__dot tool-chrome__dot--red"></span>
        <span class="tool-chrome__dot tool-chrome__dot--yellow"></span>
        <span class="tool-chrome__dot tool-chrome__dot--green"></span>`;

function renderNav(content) {
  const links = content.nav.links.map((item) => (
    `<a class="tool-nav__link" href="${attr(item.href)}"${externalAttrs(item.href)}>${escapeHtml(item.label)}</a>`
  )).join("\n        ");

  return `<nav class="tool-nav" aria-label="Main">
    <div class="tool-container tool-nav__inner">
      <a class="tool-nav__brand" href="/" aria-label="PressGang home">
        <picture>
          <source srcset="/assets/images/pressgang-logo.webp" type="image/webp">
          <img class="tool-nav__logo pg-logo pg-logo--72" src="/assets/images/pressgang-logo.png" alt="" width="72" height="72" decoding="async">
        </picture>
        <span>PressGang</span>
      </a>
      <button class="tool-nav__toggle" type="button" aria-expanded="false" aria-controls="primary-navigation" data-nav-toggle>
        <span class="tool-sr-only">Menu</span>
        <span class="tool-nav__toggle-line"></span>
        <span class="tool-nav__toggle-line"></span>
        <span class="tool-nav__toggle-line"></span>
      </button>
      <div class="tool-nav__links" id="primary-navigation" data-nav-menu>
        ${links}
        <a class="tool-button tool-button--primary tool-button--nav" href="${attr(content.nav.cta.href)}"${externalAttrs(content.nav.cta.href)}>${escapeHtml(content.nav.cta.label)}</a>
      </div>
    </div>
  </nav>`;
}

function renderHero(content) {
  return `<header id="top" class="tool-hero">
    <div class="tool-container">
      <p class="tool-hero__badge">${escapeHtml(content.hero.badge)}</p>
      <h1 class="tool-hero__title">${escapeHtml(content.hero.title)} <span>${escapeHtml(content.hero.accent)}</span></h1>
      <p class="tool-hero__lede">${inlineMarkup(content.hero.lede)}</p>
      <div class="tool-hero__actions">
        <a class="tool-button tool-button--primary tool-button--large" href="${attr(content.hero.primary.href)}"${externalAttrs(content.hero.primary.href)}>${escapeHtml(content.hero.primary.label)} <span aria-hidden="true">&rarr;</span></a>
        <button class="tool-copy-button" type="button" data-copy="${attr(content.hero.installCommand)}" aria-label="Copy install command">
          <code>${escapeHtml(content.hero.installCommand)}</code>
          <span class="copy-label" aria-live="polite" aria-atomic="true">⧉</span>
        </button>
      </div>
    </div>
  </header>`;
}

function terminalCode(code) {
  return escapeHtml(code)
    .split("\n")
    .map((line) => {
      let html = line
        .replace(/^(\$)/, '<span class="tool-token tool-token--prompt">$1</span>')
        .replace(/^(✔|＋)/, '<span class="tool-token tool-token--success">$1</span>')
        .replace(/^(Plan|All hands briefed\\.)/, '<span class="tool-token tool-token--accent">$1</span>')
        .replace(/^(#.*)/, '<span class="tool-token tool-token--comment">$1</span>');
      return `<span>${html || "&nbsp;"}</span>`;
    })
    .join("");
}

function renderTerminal(terminal) {
  return `<section id="how" class="tool-terminal-section" aria-label="${attr(terminal.ariaLabel)}">
    <div class="tool-terminal">
      <div class="tool-chrome" aria-hidden="true">
        ${chromeDots}
        <span class="tool-chrome__label tool-chrome__label--left">${escapeHtml(terminal.label)}</span>
      </div>
      <pre class="tool-terminal__pre"><code>${terminalCode(terminal.code)}</code></pre>
    </div>
  </section>`;
}

function renderCards(section) {
  const cards = section.cards.map((card) => (
    `<article class="tool-card">
      <h3>${escapeHtml(card.title)}</h3>
      <p>${inlineMarkup(card.body)}</p>
    </article>`
  )).join("\n        ");

  return `<section class="tool-section tool-section--cards" aria-labelledby="${attr(section.id)}-title">
    <div class="tool-container">
      <div class="tool-section__header">
        <h2 id="${attr(section.id)}-title" class="tool-section__title">${escapeHtml(section.title)}</h2>
        <p class="tool-section__intro">${escapeHtml(section.intro)}</p>
      </div>
      <div class="tool-card-grid">
        ${cards}
      </div>
    </div>
  </section>`;
}

function renderSplit(section) {
  const body = section.body.map((paragraph) => `<p>${inlineMarkup(paragraph)}</p>`).join("\n        ");
  const dark = section.tone === "dark" ? " tool-split--dark" : "";

  return `<section id="${attr(section.id)}" class="tool-section tool-split${dark}" aria-labelledby="${attr(section.id)}-title">
    <div class="tool-container tool-split__inner">
      <div class="tool-split__copy">
        <p class="tool-eyebrow">${escapeHtml(section.eyebrow)}</p>
        <h2 id="${attr(section.id)}-title" class="tool-section__title">${escapeHtml(section.title)}</h2>
        <div class="tool-split__body">${body}</div>
        <a class="tool-text-link" href="${attr(section.link.href)}"${externalAttrs(section.link.href)}>${escapeHtml(section.link.label)} <span aria-hidden="true">&rarr;</span></a>
      </div>
      <div class="tool-code-card">
        <div class="tool-chrome" aria-hidden="true">
          ${chromeDots}
          <span class="tool-chrome__label">${escapeHtml(section.codeLabel)}</span>
        </div>
        <pre class="tool-code-card__pre"><code>${terminalCode(section.code)}</code></pre>
      </div>
    </div>
  </section>`;
}

function renderEcosystem(content) {
  const links = content.ecosystem.links.map((link) => (
    `<a class="tool-button ${link.secondary ? "tool-button--outline" : "tool-button--dark"}" href="${attr(link.href)}"${externalAttrs(link.href)}>${escapeHtml(link.label)}${link.arrow ? ' <span aria-hidden="true">&rarr;</span>' : ""}</a>`
  )).join("\n      ");

  return `<section class="tool-ecosystem" aria-labelledby="ecosystem-title">
    <div class="tool-container">
      <h2 id="ecosystem-title">${escapeHtml(content.ecosystem.title)}</h2>
      <p>${inlineMarkup(content.ecosystem.intro)}</p>
      <div class="tool-ecosystem__actions">
        ${links}
      </div>
    </div>
  </section>`;
}

function renderFooter(content) {
  const columns = content.footer.columns.map((column) => {
    const links = column.links.map((link) => (
      `<a class="tool-footer__link" href="${attr(link.href)}"${externalAttrs(link.href)}>${escapeHtml(link.label)}</a>`
    )).join("\n          ");

    return `<div class="tool-footer__column">
        <h2>${escapeHtml(column.title)}</h2>
        ${links}
      </div>`;
  }).join("\n");

  return `<footer class="tool-footer">
    <div class="tool-container tool-footer__inner">
      <div class="tool-footer__brand">
        <h2>${escapeHtml(content.footer.title)}</h2>
        <p>${escapeHtml(content.footer.summary)}</p>
      </div>
      ${columns}
    </div>
    <div class="tool-container tool-footer__meta">
      <span>&copy; 2026 PressGang</span>
      <span>${escapeHtml(content.footer.meta)}</span>
      <p class="bw-footer-credit">Built by <a href="https://benedict-wallis.com" target="_blank" rel="noopener noreferrer"><span class="bw-sr-only">Benedict Wallis Ltd</span></a></p>
    </div>
  </footer>`;
}

function renderSection(section) {
  if (section.type === "cards") return renderCards(section);
  if (section.type === "split") return renderSplit(section);
  return "";
}

export function renderToolDocument(content, schema) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(content.meta.title)}</title>
  <meta name="description" content="${escapeHtml(content.meta.description)}">
  <link rel="canonical" href="${attr(content.meta.canonical)}">
  <meta property="og:title" content="${escapeHtml(content.meta.title)}">
  <meta property="og:description" content="${escapeHtml(content.meta.description)}">
  <meta property="og:url" content="${attr(content.meta.canonical)}">
  <meta property="og:type" content="website">
  <meta property="og:image" content="${attr(content.meta.image)}">
  <meta name="twitter:card" content="summary">
  <meta name="twitter:title" content="${escapeHtml(content.meta.title)}">
  <meta name="twitter:description" content="${escapeHtml(content.meta.description)}">
  <meta name="twitter:image" content="${attr(content.meta.image)}">
  <link rel="icon" type="image/png" href="/assets/images/pressgang-logo.png">
  <link rel="apple-touch-icon" href="/assets/images/pressgang-logo-512.png">
  <link rel="preload" as="font" type="font/woff2" href="/assets/fonts/bricolage-latin.woff2" crossorigin>
  <link rel="preload" as="font" type="font/woff2" href="/assets/fonts/archivo-latin.woff2" crossorigin>
  <link rel="preload" as="font" type="font/woff2" href="/assets/fonts/jetbrains-mono-latin.woff2" crossorigin>
  <link rel="stylesheet" href="${versionedAsset("/assets/css/styles.css")}">
  <script type="application/ld+json">
${jsonLd(schema)}
  </script>
  <script src="${versionedAsset("/assets/js/app.js")}" defer></script>
</head>
<body class="tool-page tool-page--${attr(content.slug)}">
  <a class="tool-skip-link" href="#main">Skip to content</a>
  ${renderNav(content)}
  ${renderHero(content)}
  <main id="main" tabindex="-1">
    ${renderTerminal(content.terminal)}
    ${content.sections.map(renderSection).join("\n    ")}
    ${renderEcosystem(content)}
  </main>
  ${renderFooter(content)}
</body>
</html>`;
}
