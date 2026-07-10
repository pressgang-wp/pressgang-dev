function whyCard(card) {
  return `<div class="pg-why-card">
        <div class="pg-why-card__title">${card.title}</div>
        <div class="pg-why-card__body prose-code">${card.body}</div>
      </div>`;
}

export function renderWhy(c) {
  return `<!-- ===================== WHY PRESSGANG ===================== -->
<section aria-label="Why choose PressGang" class="pg-why pg-block pg-block--why">
  <div class="pg-container">
    <h2 class="pg-section-title">${c.why.heading}</h2>
    <p class="pg-section-intro pg-section-intro--why">${c.why.intro}</p>
    <div class="pg-why__grid">
      ${c.why.cards.map(whyCard).join("\n      ")}
    </div>
  </div>
</section>`;
}
