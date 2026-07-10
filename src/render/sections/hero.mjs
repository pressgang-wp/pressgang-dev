import { decorateExternalLinks, linkTo } from "../helpers.mjs";

export function renderHero(c, s) {
  return `<!-- ===================== HERO ===================== -->
<header id="top" class="pg-hero pg-block pg-block--hero">
  <div class="pg-hero__badge">${c.hero.badge}</div>
  <h1 class="pg-hero__title">${c.hero.headingLead}<br><span class="pg-hero__accent">${c.hero.headingAccent}</span></h1>
  <p class="pg-hero__lede">${decorateExternalLinks(c.hero.lede)}</p>
  <div class="pg-hero__actions">
    ${linkTo(c.hero.ctaPrimary.href, c.hero.ctaPrimary.label, "pg-button pg-button--primary pg-button--large")}
    <button type="button" data-copy="${s.installCommand}" class="pg-copy-button" aria-label="Copy install command">${s.installCommand} <span class="pg-copy-button__icon copy-label" aria-live="polite" aria-atomic="true">⧉</span></button>
  </div>
</header>`;
}
