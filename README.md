# PressGang Landing Page

Static landing page for the PressGang WordPress theme framework, built for GitHub Pages at `pressgang.dev`.

The page is generated from structured content in `data/`, rendered by `src/page.mjs`, and committed as static HTML with Vite-built Tailwind CSS so GitHub Pages can serve it directly.

## Development

Install dependencies:

```sh
npm install
```

Build the static page:

```sh
npm run build
```

Serve the site locally:

```sh
npm run serve
```

## Structure

- `data/content.json` contains editable page copy and links.
- `data/schema.json` contains JSON-LD structured data.
- `src/page.mjs` exports the page renderer.
- `src/render/` contains document, helper, code-sample, and section render modules.
- `src/styles.css` is the Vite and Tailwind CSS entrypoint.
- `src/styles/` contains ITCSS-ordered Tailwind modules: settings, tools, generic, elements, objects, components, and utilities.
- `vite.config.mjs` configures the Tailwind CSS build.
- `assets/` contains compiled CSS, JavaScript, fonts, and images.
- `index.html` is generated output and is committed for GitHub Pages.
- `robots.txt`, `sitemap.xml`, and `llms.txt` provide crawler, search, and AI-discovery hints.
