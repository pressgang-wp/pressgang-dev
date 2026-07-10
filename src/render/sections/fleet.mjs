function fleetCard(card) {
  return `<div class="pg-fleet-card">
        <div class="pg-fleet-card__title pg-fleet-card__title--${card.accent}">${card.title}</div>
        <div class="pg-fleet-card__body">${card.body}</div>
        <div class="pg-fleet-card__command">${card.command}</div>
        <a href="${card.cta.href}" class="pg-button pg-button--${card.accent}">${card.cta.label}</a>
      </div>`;
}

export function renderFleet(c) {
  return `<!-- ===================== THE FLEET ===================== -->
<section id="fleet" aria-label="PressGang ecosystem packages" class="pg-fleet pg-block pg-block--fleet">
  <div class="pg-container">
    <h2 class="pg-section-title pg-section-title--fleet">${c.fleet.heading}</h2>
    <p class="pg-section-intro pg-section-intro--fleet">${c.fleet.intro}</p>
    <div class="pg-fleet__grid">
      ${c.fleet.cards.map(fleetCard).join("\n      ")}
    </div>
  </div>
</section>`;
}
