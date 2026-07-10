import { CODE } from "../code-samples.mjs";
import { decorateExternalLinks, linkTo } from "../helpers.mjs";

export function renderGetStarted(c) {
  return `<!-- ===================== GET STARTED ===================== -->
<section aria-label="Get started" class="pg-get-started pg-block">
  <h2 class="pg-section-title">${c.getStarted.heading}</h2>
  <p class="pg-get-started__body prose-code">${decorateExternalLinks(c.getStarted.body)}</p>
  <div class="pg-get-started__terminal">
    <pre class="pg-get-started__pre code-panel code-dark"><code>${CODE.getStarted}</code></pre>
  </div>
  <div class="pg-get-started__actions">
    ${linkTo(c.getStarted.cta.href, c.getStarted.cta.label, "pg-button pg-button--primary pg-button--large")}
  </div>
</section>`;
}
