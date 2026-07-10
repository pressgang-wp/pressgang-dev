import { linkTo, logo, navLink } from "../helpers.mjs";

export function renderNav(c, s) {
  return `<!-- ===================== NAV ===================== -->
<nav aria-label="Main" class="pg-nav">
  <div class="pg-nav__inner pg-container">
    <a href="#top" class="pg-nav__brand">
      ${logo(54, s.logoAlt)}
      <span class="pg-nav__brand-name">${s.name}</span>
    </a>
    <button type="button" class="pg-nav__toggle" aria-expanded="false" aria-controls="primary-navigation" data-nav-toggle>
      <span class="pg-sr-only">Menu</span>
      <span class="pg-nav__toggle-line"></span>
      <span class="pg-nav__toggle-line"></span>
      <span class="pg-nav__toggle-line"></span>
    </button>
    <div id="primary-navigation" class="pg-nav__links" data-nav-menu>
      ${c.nav.links.map(navLink).join("\n      ")}
      ${linkTo(c.nav.cta.href, c.nav.cta.label, "pg-button pg-button--primary pg-button--nav")}
    </div>
  </div>
</nav>`;
}
