# VisionaryFunnels — Website

Marketing site for [visionaryfunnels.com](https://visionaryfunnels.com). Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · deployed on Vercel.

## Getting started

```bash
npm install
npm run dev
```

Runs on http://localhost:3000.

> **Read [`AGENTS.md`](./AGENTS.md) first.** This is Next.js 16 — APIs and file conventions differ from older versions and from most tutorials online. The version-accurate docs ship inside the repo at `node_modules/next/dist/docs/`. Check there before writing routing, metadata, or config code.

## Routes

| Path | Purpose |
|------|---------|
| `/` | General AI Operating System pitch — the main entry point |
| `/airtable` | Airtable systems & workflow automation (migrated from the old Framer site) |
| `/construction` | Office-to-jobsite system for general contractors |

Each route also generates its own Open Graph card (`opengraph-image.tsx`). `sitemap.ts` and `robots.ts` live in `src/app/`.

## Design system

Dark only — there is no light theme, and the site is a deliberate exception to the light VF brand used in decks and documents.

All colour tokens are defined once in `src/app/globals.css` under `:root` and exposed to Tailwind via `@theme inline`. **Use the tokens, never raw hex.**

| Token | Value | Use |
|---|---|---|
| `background` | `#080B12` | page base |
| `surface` / `surface-2` | `#11161F` / `#0C1019` | cards / section bands |
| `dark` | `#0A0E17` | deep panels |
| `foreground` | `#E6EDF7` | body text |
| `accent` / `accent-light` / `accent-glow` | `#2563EB` / `#3B82F6` / `#38BDF8` | brand blue → cyan |
| `gray` / `gray-light` | `#8B9AB3` / `#5C6B82` | muted text / faint labels |

Type is Geist and Geist Mono, loaded via `next/font/google` in `layout.tsx`. Mono is for labels, data, and anything that should read as system output.

Reusable classes in `globals.css`: `.card`, `.btn-primary`, `.btn-secondary`, `.bg-grid`, `.bg-glow`, `.noise`, `.animate-fade-up`, `.reveal`.

## Conventions

- **Server Components by default.** Add `"use client"` only when you need state or events — `Navbar` is the one client component. Anything a server component imports must not live in a `"use client"` module (see `src/components/nav.ts` for why that split exists).
- **Tailwind only.** No inline styles except animation delays.
- **Keep components under 200 lines.** Split when they grow past it.
- **Animation is pure CSS**, defined in `globals.css`. Every animation has a `prefers-reduced-motion` fallback — keep it that way.
- Page-specific components live in `src/components/<page>/`; shared ones sit at the top of `src/components/`.

## Before you open a PR

```bash
npm run lint && npx tsc --noEmit && npm run build
```

**All three.** Lint and typecheck alone are not sufficient — a server/client boundary violation passes both and still returns a 500 at runtime. Only `next build` catches it.

Then check the page at 375px, 768px and 1280px. The nav is the usual casualty: links marked `secondary` in `nav.ts` hide between `md` and `lg` so the row doesn't overflow on tablets.

## Two content rules

1. **No client names on `/construction`.** The pilot described there is anonymized at the client's explicit request. Don't add the company name, the project name, or the client's own client — not in copy, not in alt text, not in a commit message.
2. **No pricing figures anywhere.** Both `Investment` sections deliberately sell the shape of the engagement instead of a number. That's a positioning decision, not an oversight or a TODO.

## Deploy

Pushing to `master` deploys to Vercel automatically. Preview deployments are created for every pull request.
