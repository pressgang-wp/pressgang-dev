import { CODE } from "../code-samples.mjs";
import { bodyParas, linkTo } from "../helpers.mjs";

export function renderQuartermaster(c) {
  return `<!-- ===================== QUARTERMASTER ===================== -->
<section id="quartermaster" aria-label="Quartermaster query builder" class="pg-quartermaster pg-block">
  <div class="pg-quartermaster__inner pg-container">
    <div class="pg-quartermaster__content">
      <div class="pg-section-kicker pg-section-kicker--orange">${c.quartermaster.eyebrow}</div>
      <h2 class="pg-section-title pg-section-title--left">${c.quartermaster.heading}</h2>
      ${bodyParas(c.quartermaster.body, "pg-copy pg-copy--large prose-code")}
      <div class="pg-quartermaster__actions">
        ${linkTo(c.quartermaster.cta.href, c.quartermaster.cta.label, "pg-button pg-button--orange pg-button--medium")}
        <span class="pg-install-pill">${c.quartermaster.install}</span>
      </div>
    </div>
    <div class="pg-quartermaster__demo">
      <div class="pg-tabs" data-tabs>
        <div class="pg-tabs__bar" role="tablist" aria-label="Quartermaster query example">
          <span class="pg-chrome__dot pg-chrome__dot--red"></span>
          <span class="pg-chrome__dot pg-chrome__dot--yellow"></span>
          <span class="pg-chrome__dot pg-chrome__dot--green pg-chrome__dot--spaced"></span>
          <button type="button" id="quartermaster-tab-before" role="tab" data-tab="before" aria-selected="false" aria-controls="quartermaster-panel-before" tabindex="-1" class="pg-tabs__button">${c.quartermaster.tabs.before}</button>
          <button type="button" id="quartermaster-tab-after" role="tab" data-tab="after" aria-selected="true" aria-controls="quartermaster-panel-after" tabindex="0" class="pg-tabs__button">${c.quartermaster.tabs.after}</button>
        </div>
        <pre id="quartermaster-panel-before" role="tabpanel" aria-labelledby="quartermaster-tab-before" data-panel="before" hidden class="pg-tabs__panel pg-tabs__panel--before code-panel"><code>${CODE.qmBefore}</code></pre>
        <pre id="quartermaster-panel-after" role="tabpanel" aria-labelledby="quartermaster-tab-after" data-panel="after" class="pg-tabs__panel pg-tabs__panel--after code-panel code-dark"><code>${CODE.qmAfter}</code></pre>
      </div>
    </div>
  </div>
</section>`;
}
