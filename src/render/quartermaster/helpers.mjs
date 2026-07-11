export function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export function attr(value = "") {
  return escapeHtml(value);
}

export function externalAttrs(href) {
  return href.startsWith("http") ? ' target="_blank" rel="noopener noreferrer"' : "";
}

export function inlineMarkup(value = "") {
  return escapeHtml(value)
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
}

function highlightPhpish(code) {
  const tokens = /(\/\/[^\n]*|'(?:\\.|[^'\\])*'|"(?:\\.|[^"\\])*"|\$[A-Za-z_]\w*|(?:->|::)[A-Za-z_]\w*|\b(?:add_action|get_posts|get_terms|wp_get_post_terms|get_query_var|sanitize_key|wp_date|var_dump|is_admin|max|empty|new|function|return|if|else|fn|true|false|null|WP_Query|Quartermaster|Timber|Bind)\b|\b\d+\b)/g;
  let html = "";
  let cursor = 0;

  for (const match of code.matchAll(tokens)) {
    const token = match[0];
    html += escapeHtml(code.slice(cursor, match.index));

    if (token.startsWith("//")) {
      html += `<span class="code-token code-token--comment">${escapeHtml(token)}</span>`;
    } else if (token.startsWith("'") || token.startsWith('"')) {
      html += `<span class="code-token code-token--string">${escapeHtml(token)}</span>`;
    } else if (token.startsWith("$")) {
      html += `<span class="code-token code-token--variable">${escapeHtml(token)}</span>`;
    } else if (token.startsWith("->") || token.startsWith("::")) {
      html += `${escapeHtml(token.slice(0, 2))}<span class="code-token code-token--method">${escapeHtml(token.slice(2))}</span>`;
    } else if (/^\d+$/.test(token)) {
      html += `<span class="code-token code-token--number">${escapeHtml(token)}</span>`;
    } else if (/^(WP_Query|Quartermaster|Timber|Bind)$/.test(token)) {
      html += `<span class="code-token code-token--class">${escapeHtml(token)}</span>`;
    } else if (/^(true|false|null)$/.test(token)) {
      html += `<span class="code-token code-token--literal">${escapeHtml(token)}</span>`;
    } else {
      html += `<span class="code-token code-token--keyword">${escapeHtml(token)}</span>`;
    }

    cursor = match.index + token.length;
  }

  return html + escapeHtml(code.slice(cursor));
}

export function renderCode(code) {
  return `<pre><code>${highlightPhpish(code)}</code></pre>`;
}

export function jsonLd(schema) {
  return JSON.stringify(schema, null, 2).replaceAll("</", "<\\/");
}
