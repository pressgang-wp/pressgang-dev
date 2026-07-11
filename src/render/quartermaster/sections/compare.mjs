import { escapeHtml, renderCode } from "../helpers.mjs";

export function renderCompare(compare) {
  const panels = compare.panels.map((panel) => (
    `<article class="qm-compare__panel qm-compare__panel--${panel.tone}">
      <p class="qm-eyebrow">${escapeHtml(panel.eyebrow)}</p>
      <div class="qm-code-card qm-code-card--${panel.tone}">
        <div class="qm-chrome" aria-hidden="true">
          <span class="qm-chrome__dot qm-chrome__dot--red"></span>
          <span class="qm-chrome__dot qm-chrome__dot--yellow"></span>
          <span class="qm-chrome__dot qm-chrome__dot--green"></span>
        </div>
        ${renderCode(panel.code)}
      </div>
      <p class="qm-compare__note">${escapeHtml(panel.note)}</p>
    </article>`
  )).join("\n");

  return `<section id="compare" class="qm-section qm-compare" aria-labelledby="compare-title">
    <div class="qm-container">
      <div class="qm-section__header">
        <h2 id="compare-title" class="qm-section__title">${escapeHtml(compare.title)}</h2>
        <p class="qm-section__intro">${escapeHtml(compare.intro)}</p>
      </div>
      <div class="qm-compare__grid">
        ${panels}
      </div>
    </div>
  </section>`;
}
