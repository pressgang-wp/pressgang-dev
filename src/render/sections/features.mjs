import { codeByIndex, codeLabelByIndex } from "../code-samples.mjs";
import { bodyParas, chrome, linkTo } from "../helpers.mjs";

function feature(f) {
  const codeCard = `<div class="pg-code-card">
      ${chrome(codeLabelByIndex[f.index])}
      <pre class="pg-code-card__pre code-panel code-dark"><code>${codeByIndex[f.index]}</code></pre>
    </div>`;

  const links = f.links
    ? f.links
        .map((l, i) => `${i ? '<span class="pg-feature__link-separator">·</span>' : ""}${linkTo(l.href, l.label, "pg-feature__link")}`)
        .join("")
    : linkTo(f.link.href, f.link.label, "pg-feature__link");

  const textCard = `<div class="pg-feature__content">
      <div class="pg-feature__eyebrow">${f.index} · ${f.eyebrow}</div>
      <h3 class="pg-feature__title">${f.title}</h3>
      ${bodyParas(f.body)}
      ${links}
    </div>`;

  const inner = f.codeSide === "left" ? codeCard + "\n    " + textCard : textCard + "\n    " + codeCard;
  return `<div class="pg-feature pg-feature--code-${f.codeSide}">
    ${inner}
  </div>`;
}

export function renderFeatures(c) {
  return `<!-- ===================== FEATURE SHOWCASE ===================== -->
<section aria-label="Framework features" class="pg-features pg-container">
  <h2 class="pg-section-title pg-section-title--large">${c.features.heading}</h2>
  <p class="pg-section-intro pg-section-intro--features">${c.features.intro}</p>
  ${c.features.items.map(feature).join("\n\n  ")}
</section>`;
}
