import { CODE } from "../code-samples.mjs";

function comparePanel(col, modifier, tplCode, tplCls, secondCode, secondaryModifier, hasDivider) {
  return `<div class="pg-compare__panel pg-compare__panel--${modifier}${hasDivider ? " pg-compare__panel--divider" : ""}">
      <div class="pg-compare__eyebrow pg-compare__eyebrow--${col.tone}">${col.eyebrow}</div>
      <pre class="pg-compare__code code-panel ${tplCls}"><code>${tplCode}</code></pre>
      <pre class="pg-compare__code pg-compare__code--secondary pg-compare__code--${secondaryModifier} code-panel ${tplCls}"><code>${secondCode}</code></pre>
      <div class="pg-compare__note pg-compare__note--${col.tone} prose-code">${col.note}</div>
    </div>`;
}

export function renderCompare(c) {
  return `<!-- ===================== BEFORE / AFTER ===================== -->
<section id="framework" aria-label="${c.compare.ariaLabel}" class="pg-compare pg-block pg-block--compare">
  <h2 class="pg-sr-only">${c.compare.ariaLabel}</h2>
  <div class="pg-compare__grid pg-container">
    ${comparePanel(c.compare.columns[0], "classic", CODE.classicTpl, "code-classic", CODE.classicFn, "classic-secondary", true)}
    ${comparePanel(c.compare.columns[1], "timber", CODE.timberTpl, "code-timber", CODE.timberTwig, "timber-secondary", true)}
    ${comparePanel(c.compare.columns[2], "pressgang", CODE.pgCtrl, "code-pg", CODE.pgConfig, "pressgang-secondary", false)}
  </div>
</section>`;
}
