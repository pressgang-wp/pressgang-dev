export function renderHero(c, s) {
  return `<!-- ===================== HERO ===================== -->
<header id="top" class="pg-hero pg-block pg-block--hero">
  <div class="pg-hero__badge">${c.hero.badge}</div>
  <h1 class="pg-hero__title">${c.hero.headingLead}<br><span class="pg-hero__accent">${c.hero.headingAccent}</span></h1>
  <p class="pg-hero__lede">${c.hero.lede}</p>
  <div class="pg-hero__actions">
    <a href="${c.hero.ctaPrimary.href}" class="pg-button pg-button--primary pg-button--large">${c.hero.ctaPrimary.label}</a>
    <button type="button" data-copy="${s.installCommand}" class="pg-copy-button" aria-label="Copy install command">${s.installCommand} <span class="pg-copy-button__icon copy-label" aria-live="polite" aria-atomic="true">⧉</span></button>
  </div>
</header>`;
}
