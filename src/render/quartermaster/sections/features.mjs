import { attr, escapeHtml, renderCode } from "../helpers.mjs";

function renderTabs(feature, index) {
  const id = `feature-${index + 1}`;
  return `<div class="qm-tabs" data-tabs>
    <div class="qm-tabs__bar" role="tablist" aria-label="${attr(feature.tabs.label)}">
      <span class="qm-chrome__dot qm-chrome__dot--red" aria-hidden="true"></span>
      <span class="qm-chrome__dot qm-chrome__dot--yellow" aria-hidden="true"></span>
      <span class="qm-chrome__dot qm-chrome__dot--green" aria-hidden="true"></span>
      <button class="qm-tab" id="${id}-before-tab" type="button" role="tab" aria-selected="false" aria-controls="${id}-before-panel" tabindex="-1" data-tab="before">😩 Raw WordPress</button>
      <button class="qm-tab" id="${id}-after-tab" type="button" role="tab" aria-selected="true" aria-controls="${id}-after-panel" data-tab="after">⚓ Quartermaster</button>
    </div>
    <div class="qm-tabs__panel qm-tabs__panel--before" id="${id}-before-panel" role="tabpanel" aria-labelledby="${id}-before-tab" data-panel="before" hidden>
      ${renderCode(feature.tabs.before)}
    </div>
    <div class="qm-tabs__panel qm-tabs__panel--after" id="${id}-after-panel" role="tabpanel" aria-labelledby="${id}-after-tab" data-panel="after">
      ${renderCode(feature.tabs.after)}
    </div>
  </div>`;
}

export function renderFeatures(features) {
  const rendered = features.map((feature, index) => {
    const reverse = index % 2 === 1 ? " qm-feature--reverse" : "";
    return `<article class="qm-feature${reverse}">
      <div class="qm-feature__media">
        ${renderTabs(feature, index)}
      </div>
      <div class="qm-feature__content">
        <p class="qm-eyebrow">${escapeHtml(feature.kicker)}</p>
        <h3 class="qm-feature__title">${escapeHtml(feature.title)}</h3>
        <p class="qm-copy">${escapeHtml(feature.body)}</p>
        <a class="qm-text-link" href="${attr(feature.href)}" target="_blank" rel="noopener noreferrer">${escapeHtml(feature.link)} <span aria-hidden="true">&rarr;</span></a>
      </div>
    </article>`;
  }).join("\n");

  return `<section id="features" class="qm-section qm-features" aria-labelledby="features-title">
    <div class="qm-container">
      <div class="qm-section__header">
        <h2 id="features-title" class="qm-section__title">Built for queries that grow</h2>
        <p class="qm-section__intro">Start with everyday queries and grow into bindings, conditionals and hooks — the API scales with the query, so the simple case never pays for the complex one.</p>
      </div>
      ${rendered}
    </div>
  </section>`;
}
