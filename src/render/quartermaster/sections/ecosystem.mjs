import { escapeHtml } from "../helpers.mjs";

export function renderEcosystem(ecosystem) {
  const items = ecosystem.items.map((item) => (
    `<article class="qm-ecosystem-card">
      <h3>${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(item.body)}</p>
    </article>`
  )).join("\n");

  return `<section class="qm-section qm-ecosystem" aria-labelledby="ecosystem-title">
    <div class="qm-container">
      <div class="qm-section__header">
        <h2 id="ecosystem-title" class="qm-section__title">${escapeHtml(ecosystem.title)}</h2>
        <p class="qm-section__intro">${escapeHtml(ecosystem.intro)}</p>
      </div>
      <div class="qm-ecosystem__grid">
        ${items}
      </div>
      <div class="qm-ecosystem__actions">
        <a class="qm-button qm-button--primary" href="https://docs.pressgang.dev/ecosystem/quartermaster" target="_blank" rel="noopener noreferrer">Quartermaster docs <span aria-hidden="true">&rarr;</span></a>
        <a class="qm-button qm-button--secondary" href="https://pressgang.dev">Meet PressGang</a>
      </div>
    </div>
  </section>`;
}
