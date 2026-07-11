import { linkTo, logo } from "../helpers.mjs";

function footerColumn(col) {
  const links = col.links
    .map((l) => linkTo(l.href, l.label, "pg-footer__link"))
    .join("\n      ");
  return `<div class="pg-footer__column">
      <span class="pg-footer__heading">${col.heading}</span>
      ${links}
    </div>`;
}

export function renderFooter(c, s) {
  return `<!-- ===================== FOOTER ===================== -->
<footer class="pg-footer pg-block pg-block--footer">
  <div class="pg-footer__inner pg-container">
    <div class="pg-footer__brand">
      <div class="pg-footer__brand-lockup">
        ${logo(32, s.name, "", 'loading="lazy"')}
        <span class="pg-footer__brand-name">${s.name}</span>
      </div>
      <p class="pg-footer__tagline">${c.footer.tagline}</p>
    </div>
    ${c.footer.columns.map(footerColumn).join("\n    ")}
  </div>
  <div class="pg-footer__meta pg-container">
    <span>${s.copyright}</span>
    <span>${s.requirements}</span>
    <p class="bw-footer-credit">Built by <a href="https://benedict-wallis.com" target="_blank" rel="noopener noreferrer"><span class="bw-sr-only">Benedict Wallis Ltd</span></a></p>
  </div>
</footer>`;
}
