import { renderQuartermasterDocument } from "../render/quartermaster/document.mjs";

export function renderQuartermasterPage(content, schema) {
  return renderQuartermasterDocument(content, schema);
}
