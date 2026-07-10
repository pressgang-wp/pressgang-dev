/**
 * PressGang landing page template entrypoint.
 *
 * Editable copy lives in ../data/content.json. Section renderers live in
 * ./render/ and return the full HTML document that the build script writes
 * to /index.html.
 */
import { renderDocument } from "./render/document.mjs";

export function renderPage(content, schema) {
  return renderDocument(content, schema);
}
