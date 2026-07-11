import { attr, escapeHtml, externalAttrs } from "../helpers.mjs";

export function renderNav(content) {
  const links = content.nav.map((item) => (
    `<a class="qm-nav__link" href="${attr(item.href)}"${externalAttrs(item.href)}>${escapeHtml(item.label)}</a>`
  )).join("\n        ");

  return `<nav class="qm-nav" aria-label="Main">
    <div class="qm-container qm-nav__inner">
      <a class="qm-nav__brand" href="#top" aria-label="Quartermaster home">
        <img class="qm-logo qm-logo--nav" src="${attr(content.assets.logo)}" alt="" width="212" height="44" decoding="async">
      </a>
      <button class="qm-nav__toggle" type="button" aria-expanded="false" aria-controls="primary-navigation" data-nav-toggle>
        <span class="qm-sr-only">Menu</span>
        <span class="qm-nav__toggle-line"></span>
        <span class="qm-nav__toggle-line"></span>
        <span class="qm-nav__toggle-line"></span>
      </button>
      <div class="qm-nav__links" id="primary-navigation" data-nav-menu>
        ${links}
        <a class="qm-button qm-button--primary qm-button--nav" href="https://github.com/pressgang-wp/pressgang-quartermaster" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </div>
  </nav>`;
}
