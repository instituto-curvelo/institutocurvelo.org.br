# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Marketing/institutional website for **Instituto Curvelo**, a Brazilian Science, Technology and Innovation Institution (ICT). Next.js 16 (App Router) + React 19 + Tailwind v4. Bilingual PT/EN, client-side language switching. Package manager is **pnpm**.

## Commands

```bash
pnpm install
pnpm dev        # dev server at http://localhost:3000
pnpm build      # production build
pnpm start      # serve the production build
pnpm lint       # eslint (flat config, next core-web-vitals + typescript)
```

There is no test suite. Verify changes via `pnpm build` (catches type errors) and `pnpm lint`.

## Architecture

### Bilingual content (the central pattern)
- All copy is stored inline as `Localized` objects (`{ pt: string; en: string }`, defined in `src/lib/i18n.tsx`) or `[pt, en]` tuples, never in external translation files.
- `useLanguage()` returns `{ language, setLanguage, t }`. Call `t(value)` to resolve a `Localized`/tuple to the active language.
- Language is React context (`LanguageProvider` wraps the app in `src/app/layout.tsx`), persisted to `localStorage` under `institute-language`, defaulting to `pt`.
- **Consequence:** because `t()` is client-only, **every page and content component is a Client Component** (`"use client"` at the top). New pages that render localized copy must also be client components. Keep canonical copy mirrored in `CONTENT_INVENTORY.md`.

### Routing (`src/app`)
App Router pages: `/` (`page.tsx`), `/instituto`, `/solucoes`, `/resolucoes`. The course pages (`/cursos`, `/curso/*`) were removed; `next.config.ts` redirects those URLs to `/`. The only server-side code is `src/app/api/contact/route.ts` (a POST route handler) and `src/app/opengraph-image.tsx`.

### Shared site data (`src/lib/site.ts`)
Single source of truth for institutional identity (name, CNPJ), `contact` (HQ), `navItems`, `routes`, and `partners`. Add/route links through here rather than hardcoding.

### Design system (`src/app/globals.css` + `DESIGN_SYSTEM.md`)
- Identity is "Azul Curvelo" (deep institutional blue). `DESIGN_SYSTEM.md` is the documented source of truth; `globals.css` holds the implementation.
- Tokens are Tailwind v4 `@theme` CSS variables. Brand colors: `--color-primary-base` `#042b45`, `--color-accent` `#1a6fa8`. Semantic tokens (`--background`, `--foreground`, `--card`, `--border`, etc.) are defined under `:root` and mapped to Tailwind utilities via `@theme inline` — use utilities like `bg-card`, `text-muted-foreground`, `border-border`.
- Legacy `teal-*` / `ink-*` / `paper-*` token names are intentionally remapped to the blue palette so older class references still resolve. Prefer the semantic/`primary`/`accent` tokens for new work.
- Fonts (loaded in `layout.tsx` via `next/font`): **Bebas Neue** = `--font-display` (opt-in via `.font-display` class), **Barlow** = `--font-sans` (default body, also aliased as mono).
- Custom utility classes live in `globals.css`: `.field-label` (uppercase eyebrow), `.divider-accent`, `.hero-gradient`, `.blueprint-grid`/`.bg-grid`/`.grid-on-dark`, `.tnum` (tabular nums), `.animate-rise`.

### Layout primitives (`src/components/section.tsx`)
Reusable building blocks for page sections: `Container` (max-width 1200px), `Section`, `SectionHeading` (supports `tone="dark"` for deep-blue backgrounds), `FieldLabel`, `TickRule`, `MetricCell`. Build new sections from these. UI atoms (`button`, `card`, `badge`) are in `src/components/ui/` (CVA + Radix slot + `cn()` from `src/lib/utils.ts`).

### Contact form
`src/components/contact-form.tsx` POSTs JSON to `/api/contact`, which sends mail via Resend. **Without `RESEND_API_KEY` the route returns `{ ok: true, delivered: false }` and logs the submission server-side** — the form works in development without keys. Env vars (see `.env.example`): `RESEND_API_KEY`, `CONTACT_FROM_EMAIL`, `CONTACT_TO_EMAIL`.

## Path alias
`@/*` maps to `./src/*` (tsconfig).

## Branches
The Next.js app lives on `nextjs` (the branch Vercel deploys). The previous Hugo static site is preserved on `legacy`.
