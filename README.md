# institutocurvelo.org.br

Website of **Instituto Curvelo**, a Science, Technology and Innovation Institution (ICT).
Next.js 16 (App Router) + Tailwind v4, bilingual PT/EN, built to a custom design system.

> The previous Hugo static site is preserved on the `main` branch and the `legacy-hugo-static` tag.
> This Next.js rebuild lives on the `nextjs` branch.

## Design system

The visual language (technical research-lab: teal-anchored, grid-forward, monospace data labels)
is documented in [`DESIGN_SYSTEM.md`](./DESIGN_SYSTEM.md). Tokens live in `src/app/globals.css`.
Content reference (verbatim PT/EN copy of every page) is in [`CONTENT_INVENTORY.md`](./CONTENT_INVENTORY.md).

## Develop

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build    # production build
```

## Contact form

The contact form posts to `POST /api/contact`, which sends email via [Resend](https://resend.com).
Copy `.env.example` to `.env.local` and set the keys:

```
RESEND_API_KEY=...
CONTACT_TO_EMAIL=contato@institutocurvelo.org.br
CONTACT_FROM_EMAIL="Instituto Curvelo <no-reply@institutocurvelo.org.br>"
```

Without `RESEND_API_KEY` the form responds successfully and logs submissions server-side
(useful in development).

## Deploy (Vercel)

Import the repo in Vercel, select the `nextjs` branch, add the environment variables above.
No extra configuration is needed — Next.js is detected automatically.

## Structure

```
src/
  app/                  routes (/, /instituto, /solucoes, /cursos, /resolucoes, /curso/*)
    api/contact/        Resend email route handler
  components/
    layout/             header, footer, language toggle
    ui/                 button, card, badge
    section.tsx         Container, Section, SectionHeading, FieldLabel, TickRule, MetricCell
    contact-form.tsx
  lib/
    i18n.tsx            language context + t() helper
    site.ts             contact info, nav, partners, routes
public/
  brand/ people/ partners/ solutions/ documents/
```
