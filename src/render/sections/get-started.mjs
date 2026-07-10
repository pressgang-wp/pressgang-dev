import { CODE } from "../code-samples.mjs";

export function renderGetStarted(c) {
  return `<!-- ===================== GET STARTED ===================== -->
<section aria-label="Get started" class="pg-get-started pg-block">
  <h2 class="pg-section-title">${c.getStarted.heading}</h2>
  <p class="pg-get-started__body prose-code">${c.getStarted.body}</p>
  <div class="pg-get-started__terminal">
    <pre class="pg-get-started__pre code-panel code-dark"><code>${CODE.getStarted}</code></pre>
  </div>
  <div class="pg-get-started__actions">
    <a href="${c.getStarted.cta.href}" class="pg-button pg-button--primary pg-button--large">${c.getStarted.cta.label}</a>
  </div>
</section>`;
}
