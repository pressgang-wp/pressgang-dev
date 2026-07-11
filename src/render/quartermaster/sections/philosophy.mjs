import { attr, escapeHtml, renderCode } from "../helpers.mjs";

export function renderPhilosophy(philosophy, assets) {
  const body = philosophy.body.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("\n        ");

  return `<section id="philosophy" class="qm-philosophy" aria-labelledby="philosophy-title">
    <div class="qm-container qm-philosophy__inner">
      <div class="qm-philosophy__content">
        <p class="qm-eyebrow qm-eyebrow--light">${escapeHtml(philosophy.kicker)}</p>
        <h2 id="philosophy-title" class="qm-section__title qm-section__title--dark">${escapeHtml(philosophy.title)}</h2>
        <div class="qm-philosophy__copy">
          ${body}
        </div>
        <div class="qm-terminal">${renderCode(philosophy.code)}</div>
      </div>
      <figure class="qm-philosophy__figure">
        <img src="${attr(assets.mascot)}" alt="Quartermaster mascot carrying WordPress query cargo" width="1536" height="1024" loading="lazy" decoding="async">
      </figure>
    </div>
  </section>`;
}
