import { attr, escapeHtml, inlineMarkup } from "../helpers.mjs";

export function renderHero(content) {
  const { hero } = content;
  const [titleStart, titleEnd] = hero.accent && hero.title.includes(hero.accent)
    ? hero.title.split(hero.accent)
    : [hero.title, ""];

  return `<header id="top" class="qm-hero">
    <div class="qm-container qm-hero__inner">
      <div class="qm-hero__content">
        <p class="qm-hero__badge">${escapeHtml(hero.badge)}</p>
        <h1 class="qm-hero__title">${escapeHtml(titleStart)}<span>${escapeHtml(hero.accent || "")}</span>${escapeHtml(titleEnd)}</h1>
        <p class="qm-hero__lede">${inlineMarkup(hero.lede)}</p>
        <div class="qm-hero__actions">
          <a class="qm-button qm-button--primary qm-button--large" href="${attr(hero.primaryAction.href)}" target="_blank" rel="noopener noreferrer">${escapeHtml(hero.primaryAction.label)} <span aria-hidden="true">&rarr;</span></a>
          <button class="qm-copy-button" type="button" data-copy="${attr(hero.installCommand)}" aria-label="Copy install command">
            <code>${escapeHtml(hero.installCommand)}</code>
            <span class="copy-label" aria-live="polite" aria-atomic="true">copy</span>
          </button>
        </div>
      </div>
    </div>
  </header>`;
}
