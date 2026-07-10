export const joinClasses = (...classes) => classes.filter(Boolean).join(" ");

export const logo = (size, alt, cls = "", attrs = "") => `<picture>
      <source srcset="assets/images/pressgang-logo.webp" type="image/webp">
      <img src="assets/images/pressgang-logo.png" alt="${alt}" width="${size}" height="${size}"
           class="${joinClasses("pg-logo", `pg-logo--${size}`, cls)}" decoding="async"${attrs ? ` ${attrs}` : ""}>
    </picture>`;

// Window-chrome traffic light dots + optional filename label.
export const chrome = (label, cls = "") => `<div class="${joinClasses("pg-chrome", cls)}">
        <span class="pg-chrome__dot pg-chrome__dot--red"></span>
        <span class="pg-chrome__dot pg-chrome__dot--yellow"></span>
        <span class="pg-chrome__dot pg-chrome__dot--green"></span>
        ${label ? `<span class="pg-chrome__label">${label}</span>` : ""}
      </div>`;

export const navLink = (link) =>
  `<a href="${link.href}" class="pg-nav__link">${link.label}</a>`;

export const bodyParas = (paragraphs, cls = "pg-copy prose-code") =>
  paragraphs.map((paragraph) => `<p class="${cls}">${paragraph}</p>`).join("\n      ");
