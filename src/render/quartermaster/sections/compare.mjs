import { escapeHtml, inlineMarkup } from "../helpers.mjs";

export function renderCompare(compare) {
  const panels = compare.panels.map((panel) => {
    const note = panel.note ? `<p class="qm-compare__note">${inlineMarkup(panel.note)}</p>` : "";

    return `<article class="qm-compare__panel qm-compare__panel--${panel.tone}">
      <p class="qm-compare__eyebrow">${escapeHtml(panel.eyebrow)}</p>
      <pre class="qm-compare__code"><code>${escapeHtml(panel.code)}</code></pre>
      ${note}
    </article>`
  }).join("\n");

  return `<section id="compare" class="qm-section qm-compare" aria-label="Raw WP_Query compared to Quartermaster">
    <div class="qm-container">
      <p class="qm-compare__intro">${escapeHtml(compare.intro)}</p>
      <div class="qm-compare__grid">
        ${panels}
      </div>
    </div>
  </section>`;
}
