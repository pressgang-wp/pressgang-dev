import { escapeHtml, inlineMarkup } from "../helpers.mjs";

export function renderWhy(why) {
  const intro = why.intro.map((paragraph) => (
    `<p>${inlineMarkup(paragraph)}</p>`
  )).join("\n        ");

  const cards = why.cards.map((card) => (
    `<article class="qm-why-card">
      <h3 class="qm-why-card__title">${escapeHtml(card.title)}</h3>
      <p class="qm-why-card__body">${inlineMarkup(card.body)}</p>
    </article>`
  )).join("\n        ");

  return `<section id="why" class="qm-section qm-why" aria-labelledby="why-title">
    <div class="qm-container">
      <div class="qm-section__header qm-section__header--wide">
        <h2 id="why-title" class="qm-section__title qm-why__title"><span>${escapeHtml(why.titleLead)}</span> ${escapeHtml(why.titleRest)}</h2>
        <div class="qm-why__intro">
          ${intro}
        </div>
      </div>
      <div class="qm-why__grid">
        ${cards}
      </div>
    </div>
  </section>`;
}
