# notthatbombguy.com

## Site Overview
A personal website developed by myself for fun, located at notthatbombguy.com. Built with Astro, hosted by Cloudflare.

## Who's building this
I'm learning HTML/CSS/JS as I go, and I'm very new to Astro specifically (started using it partway through this project). Please:
- Explain JavaScript syntax and concepts thoroughly when writing or editing any `.js` file or the frontmatter (the `---`-fenced JS section) of any `.astro` file — don't just write the code, teach it.
- Explain new Astro-specific concepts (components, props, slots, content collections, `is:inline`/`is:global`, etc.) the same way, since I haven't built anything in Astro before this site.
- Prefer clear, simple approaches over clever/advanced ones I'd have trouble maintaining myself.

## Tech stack
- [Astro](https://astro.build) (static site, no client-side framework) — requires Node.js/npm
- Plain vanilla JavaScript for interactive bits (kept unbundled in `public/`, loaded via `<script is:inline src="...">`, not ES modules)
- Plain CSS in `src/styles/global.css` (no preprocessor, no CSS-in-JS)
- Blog posts as Markdown files via Astro content collections

## Project structure
- `src/pages/` — one file per route (`index.astro`, `blog.astro`, `portfolio.astro`, `credits.astro`, `secret.astro`)
- `src/content/blog/*.md` — blog posts (frontmatter + Markdown body); schema defined in `src/content.config.ts`
- `src/components/` — `Nav.astro`, `Footer.astro`, `LinkCard.astro`, `BlogEntry.astro`
- `src/layouts/Layout.astro` — shared page shell (head, fonts, Nav, Footer, background shapes script)
- `src/styles/global.css` — all site CSS
- `public/` — static, unprocessed files: `images/`, `audio/`, `main.js`, `background.js`, `secret.js`, `CNAME`, favicons

## Commands
- `npm run dev` — local dev server (`astro dev`), default at `http://localhost:4321`
- `npm run build` — production build to `dist/`
- `npm run preview` — serve the built `dist/` locally to sanity-check before deploying
- `npx astro dev stop` — stop a background dev server (Astro 7 runs it detached, not blocking the terminal)

## Deployment
Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds with Astro and deploys to GitHub Pages (repo Pages source is set to "GitHub Actions"). `public/CNAME` carries the custom domain into the build output.

## Contact
`contact@notthatbombguy.com` — use this for the Credits page or anywhere else on the site that needs a public contact address.
