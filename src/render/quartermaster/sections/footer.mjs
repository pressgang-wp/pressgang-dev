import { attr, escapeHtml } from "../helpers.mjs";

export function renderFooter(content) {
  const columns = content.footer.columns.map((column) => {
    const links = column.links.map((link) => (
      `<a class="qm-footer__link" href="${attr(link.href)}" target="_blank" rel="noopener noreferrer">${escapeHtml(link.label)}</a>`
    )).join("\n          ");

    return `<div class="qm-footer__column">
        <h2>${escapeHtml(column.title)}</h2>
        ${links}
      </div>`;
  }).join("\n");

  return `<footer class="qm-footer">
    <div class="qm-container qm-footer__inner">
      <div class="qm-footer__brand">
        <h2>Quartermaster</h2>
        <p>${escapeHtml(content.footer.summary)}</p>
      </div>
      ${columns}
    </div>
    <div class="qm-container qm-footer__meta">
      <span>&copy; 2026 PressGang</span>
      <span>Requires PHP 8.3+ - zero runtime dependencies</span>
    </div>
  </footer>`;
}
