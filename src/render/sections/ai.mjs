import { CODE } from "../code-samples.mjs";
import { bodyParas, chrome } from "../helpers.mjs";

export function renderAi(c) {
  return `<!-- ===================== AI-READY (BOSUN) ===================== -->
<section id="ai" aria-label="AI-ready with Bosun" class="pg-ai pg-block on-dark">
  <div class="pg-ai__inner pg-container">
    <div class="pg-ai__content">
      <div class="pg-section-kicker pg-section-kicker--orange">${c.ai.eyebrow}</div>
      <h2 class="pg-section-title pg-section-title--dark pg-section-title--left">${c.ai.heading}</h2>
      ${bodyParas(c.ai.body, "pg-copy pg-copy--dark prose-code")}
      <a href="${c.ai.cta.href}" class="pg-ai__link">${c.ai.cta.label}</a>
    </div>
    <div class="pg-terminal">
      ${chrome("terminal")}
      <pre class="pg-terminal__pre code-panel code-dark"><code>${CODE.bosun}</code></pre>
    </div>
  </div>
</section>`;
}
