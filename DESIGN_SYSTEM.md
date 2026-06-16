# Instituto Curvelo — Design System

> **Direction:** Technical research-lab. Precise, grid-forward, instrument-like. Engineering and AI/data depth made legible, not decorated.
>
> **Status:** v0.1 — canonical specification. This document is the source of truth. Code (`index.css`, `tailwind.config.ts`, components) is downstream of it.

---

## 0. How to use this document

This file is written to be **fed to Claude** (Claude Design / Claude Code) as the brief for any new screen, component, or page. When prompting:

- Paste or reference this file, then describe the *content* and the *single job* of the screen.
- Hold Claude to the **tokens** (Section 4–7) and the **do/don't** rules (Section 9). If a choice isn't covered here, it should be derived from the principles (Section 2), not invented from defaults.
- The **signature** (Section 8) is the one place to spend boldness. Everything else stays quiet.

Two failure modes to call out explicitly when prompting:
1. **Default drift** — Inter everywhere, one teal button, soft drop shadows, centered hero with a big gradient number. Reject these.
2. **Acid-lab cliché** — pure black + neon green. This direction is teal-anchored and measured, not a hacker terminal.

---

## 1. Subject & audience

- **Who:** Instituto Curvelo Innovation Hub — a Brazilian institute doing applied AI / data-science research, technical education (LLM and data-science courses), and consulting/solutions, plus formal technical notes (NIT).
- **Audience:** prospective students, partner institutions, and clients evaluating technical credibility. They need to trust depth fast.
- **The page's job, always:** demonstrate rigor and capability, then route the visitor to the right next step (a course, a solution, contact).
- **Languages:** Portuguese (primary) and English. Every layout must survive PT strings, which run ~15–25% longer than EN. Never hard-fit text to a fixed pixel width.

---

## 2. Brand principles

1. **Show the instrument, not the brochure.** Lead with the most characteristic real thing — a metric, a diagram, a model output, a live demo — rendered precisely. Avoid stock-photo heroes and abstract gradient blobs.
2. **Structure encodes meaning.** Numbering, eyebrows, and rules are used only when the content is genuinely ordered or measured. A monospace label is a coordinate, not decoration.
3. **Quiet surface, loud data.** Backgrounds, cards, and chrome are restrained and neutral. Color and emphasis are spent on the data and the one primary action per view.
4. **Precision over polish.** Hairline borders, tight alignment to a grid, and exact spacing read as competence. Heavy shadows and blur read as marketing.
5. **Legible bilingually.** The system works identically in PT and EN. Layouts flex; they never clip.

---

## 3. Voice & copy

- **Register:** plain, technical, confident. No hype adjectives ("revolutionary", "cutting-edge"). State capability concretely.
- **Active voice, sentence case.** Buttons name the action and keep that name through the flow: `Inscrever-se` → toast `Inscrição enviada`.
- **Labels name what the user controls,** not the system internals.
- **Errors are directional:** what happened + how to fix it, in the interface's voice. Empty states invite an action.
- **Numbers are first-class.** Prefer "12 turmas, 340 alunos" over "muitos alunos". Set figures in mono (Section 5).

---

## 4. Color

Teal is the one brand constant. Everything else is a neutral ink/paper ramp plus a **signal palette** reserved for data, charts, and states. Do not introduce new hues outside this set.

### 4.1 Neutrals — teal-tinted slate (the surface system)

| Token        | Hex       | HSL                | Use                                  |
|--------------|-----------|--------------------|--------------------------------------|
| `ink-950`    | `#08110F` | `170 31% 5%`       | Dark-mode background, deepest        |
| `ink-900`    | `#0E1A1F` | `192 38% 9%`       | Dark surface / footer                |
| `ink-800`    | `#16262C` | `193 32% 13%`      | Dark card                            |
| `ink-700`    | `#213A42` | `194 33% 19%`      | Dark border / raised                 |
| `ink-500`    | `#3E5C66` | `194 25% 32%`      | Muted text on dark                   |
| `ink-300`    | `#90A6AD` | `194 14% 62%`      | Secondary text                       |
| `paper-200`  | `#DCE6E6` | `180 17% 88%`      | Border / divider (light)             |
| `paper-100`  | `#EAF1F1` | `180 22% 93%`      | Muted surface (light)                |
| `paper-50`   | `#F5F8F8` | `180 18% 97%`      | Light-mode background                |
| `paper-0`    | `#FFFFFF` | `0 0% 100%`        | Card (light)                         |

### 4.2 Brand teal ramp

| Token        | Hex       | HSL              | Use                          |
|--------------|-----------|------------------|------------------------------|
| `teal-700`   | `#0A6B75` | `186 84% 25%`    | Hover / pressed primary      |
| `teal-600`   | `#0B8A96` | `186 86% 32%`    | —                            |
| `teal-500`   | `#0FA3B1` | `185 84% 38%`    | **Primary** (brand)          |
| `teal-400`   | `#22C2D0` | `185 72% 48%`    | Primary glow / focus ring    |
| `teal-300`   | `#5CD6E0` | `185 65% 62%`    | Accent on dark               |
| `teal-100`   | `#CFEEF1` | `185 55% 88%`    | Tint / subtle accent fill    |

> Migration note: current `--primary` is `188 85% 35%`. Shift to `185 84% 38%` (`teal-500`) — marginally brighter and bluer, reads cleaner against the new neutrals. Backwards-compatible in feel.

### 4.3 Signal palette (data & state only — never chrome)

| Token            | Hex       | Use                                         |
|------------------|-----------|---------------------------------------------|
| `signal-amber`   | `#F2A100` | Highlight, warning, "in progress"           |
| `signal-coral`   | `#FB5779` | Alert, destructive accent, contrast series  |
| `signal-violet`  | `#7C6CF0` | Secondary data series                       |
| `signal-success` | `#1FB87A` | Positive state, confirmation                |
| `signal-error`   | `#E5484D` | Destructive / error                         |

Chart series order: `teal-500 → signal-violet → signal-amber → signal-coral → ink-500`.

### 4.4 Semantic mapping (CSS variables)

Keep the existing `hsl(var(--token))` convention so Tailwind/shadcn keep working. Replace the values:

```css
:root {
  --background: 180 18% 97%;      /* paper-50  */
  --foreground: 192 38% 9%;       /* ink-900   */
  --card: 0 0% 100%;              /* paper-0   */
  --card-foreground: 192 38% 9%;
  --muted: 180 22% 93%;           /* paper-100 */
  --muted-foreground: 194 25% 32%;/* ink-500   */
  --border: 180 17% 88%;          /* paper-200 */
  --input: 180 17% 88%;
  --primary: 185 84% 38%;         /* teal-500  */
  --primary-foreground: 0 0% 100%;
  --primary-glow: 185 72% 48%;    /* teal-400  */
  --secondary: 194 33% 19%;       /* ink-700   */
  --secondary-foreground: 180 18% 97%;
  --accent: 185 55% 88%;          /* teal-100  */
  --accent-foreground: 186 84% 25%;
  --ring: 185 72% 48%;            /* teal-400  */
  --destructive: 0 75% 60%;       /* signal-error */
  --destructive-foreground: 0 0% 100%;
  --radius: 0.375rem;             /* see 7.1 — tightened from 0.75rem */
}

.dark {
  --background: 192 38% 9%;       /* ink-900 */
  --foreground: 180 18% 97%;
  --card: 193 32% 13%;            /* ink-800 */
  --card-foreground: 180 18% 97%;
  --muted: 194 33% 19%;           /* ink-700 */
  --muted-foreground: 194 14% 62%;/* ink-300 */
  --border: 194 33% 19%;
  --primary: 185 72% 48%;         /* teal-400 reads better on dark */
  --primary-foreground: 192 38% 9%;
  --accent: 194 33% 19%;
  --accent-foreground: 185 65% 62%;
  --ring: 185 65% 62%;
}
```

---

## 5. Typography

Three roles, chosen deliberately for a research-lab read. All available on Google Fonts (free, self-hostable).

| Role            | Family            | Why                                                            |
|-----------------|-------------------|----------------------------------------------------------------|
| **Display / headings** | **Space Grotesk** | Tight, geometric, slightly mechanical. Carries personality.    |
| **Body / UI**   | **IBM Plex Sans**  | Engineering provenance, warmer than Inter, excellent in PT.     |
| **Data / labels / code** | **IBM Plex Mono** | Coordinates, figures, eyebrows, code. The "instrument" voice.   |

> Why not Inter: it's the default everyone reaches for; IBM Plex Sans pairs natively with Plex Mono and signals the lab. Why not a serif: this direction is structural, not editorial.

### 5.1 Type scale (1.250 — major third, 16px base)

| Step    | Size / line-height | Family        | Weight | Tracking | Use                          |
|---------|--------------------|---------------|--------|----------|------------------------------|
| `display`| 3.815rem / 1.05   | Space Grotesk | 700    | -0.02em  | Hero headline                |
| `h1`    | 3.052rem / 1.10    | Space Grotesk | 700    | -0.02em  | Page title                   |
| `h2`    | 2.441rem / 1.15    | Space Grotesk | 600    | -0.01em  | Section title                |
| `h3`    | 1.953rem / 1.20    | Space Grotesk | 600    | -0.01em  | Subsection                   |
| `h4`    | 1.563rem / 1.25    | Space Grotesk | 500    | normal   | Card title                   |
| `body-lg`| 1.25rem / 1.55    | IBM Plex Sans | 400    | normal   | Lead paragraph               |
| `body`  | 1rem / 1.6         | IBM Plex Sans | 400    | normal   | Default text                 |
| `body-sm`| 0.875rem / 1.55   | IBM Plex Sans | 400    | normal   | Secondary                    |
| `label` | 0.75rem / 1.4      | IBM Plex Mono | 500    | 0.08em UPPERCASE | Eyebrows, field labels, coordinates |
| `data`  | varies            | IBM Plex Mono | 500    | normal   | Figures, metrics, tabular nums |

### 5.2 Rules

- **Mono is for machine-readable content:** numbers, dates, IDs, eyebrows, code, axis labels. Never set running prose in mono.
- Use `font-variant-numeric: tabular-nums` for any column or comparison of figures.
- Headings: tight tracking (negative) at large sizes; never letterspace lowercase body.
- One display-weight headline per viewport. Don't stack two `display`/`h1` sizes.

---

## 6. Layout & grid

- **Container:** max `1280px`, `2rem` gutter (`1rem` on mobile). Keep the existing centered container.
- **Grid:** 12-column, `24px` gutter. Content blocks snap to columns; asymmetric splits (e.g. 5/7, 4/8) are preferred over centered single columns for a structural feel.
- **Baseline rhythm:** vertical spacing on an **8px** scale: `4, 8, 12, 16, 24, 32, 48, 64, 96, 128`.
- **Section padding:** `96px` top/bottom desktop, `56px` mobile. Be consistent — uneven section padding is the most common Lovable tell.
- **Alignment:** left-aligned by default. Center only short standalone statements, never paragraphs.

---

## 7. Borders, elevation, radius

### 7.1 Radius
Tighten from `0.75rem` to **`0.375rem`** (`--radius`). Technical/precise reads with smaller radii. Pills (`9999px`) only for tags/badges; never for cards or primary buttons.

### 7.2 Borders
- **Hairline `1px` borders are the primary separation device,** not shadows. Use `--border` (paper-200 / ink-700).
- Tick-marked and dotted rules belong to the signature (Section 8); plain hairlines elsewhere.

### 7.3 Elevation
Minimal. Two levels only:

| Level | Token            | Value                                   | Use                  |
|-------|------------------|-----------------------------------------|----------------------|
| 0     | (none)           | border only                             | Default cards        |
| 1     | `shadow-card`    | `0 1px 2px hsl(192 38% 9% / 0.06), 0 8px 24px -12px hsl(192 38% 9% / 0.12)` | Hover / popovers |

Retire the teal-glow shadows (`--shadow-primary`) for chrome; keep a teal glow only as a deliberate focus/hover accent on interactive data elements.

---

## 8. Signature: the measurement grid

The one memorable element. Use it to frame structure; do not scatter it.

- **Field labels:** every major section opens with a mono eyebrow formatted as a coordinate: `// 02 — SOLUÇÕES`. The number is real ordinal position; if the content isn't a sequence, drop the number and keep the slash prefix (`// ÁREA DE ATUAÇÃO`).
- **Tick rules:** section dividers are hairlines with short vertical ticks at grid-column boundaries (like a plot axis). Subtle: ticks in `--muted-foreground` at ~30% opacity.
- **Ambient grid:** the hero (and only the hero) carries a faint blueprint grid background — `1px` lines, `teal-500` at 4–6% opacity, ~48px cells. Respects `prefers-reduced-motion` (static).
- **Metric framing:** key figures sit in a bordered cell with a mono label above, like a readout. This is where teal and signal colors are allowed to be bright.

Rule of restraint: a screen uses **at most two** of these four devices. The grid is a system, not a texture.

---

## 9. Components

General: derive from shadcn/ui primitives already installed. Restyle via tokens — don't fork. Below, the rules that matter.

### Buttons
- **Primary:** solid `teal-500`, white text, radius `0.375rem`, weight 500. Hover → `teal-700`. One primary per view.
- **Secondary:** `1px` border (`--border`), transparent fill, `foreground` text. Hover → `paper-100` fill.
- **Ghost / link:** text + mono affordance for technical actions (e.g. `→ ver NIT`).
- **Do:** name the action. **Don't:** gradient-fill buttons, drop-shadow buttons, or use teal for more than the primary.

### Cards
- Flat: `paper-0` fill, `1px` border, radius `0.375rem`, no shadow at rest.
- Optional mono label header (field-label style) for typed content (course, solution, NIT).
- Hover (if interactive): border → `teal-400`, elevation level 1. Subtle, fast.
- **Don't:** heavy shadows, large radii, full-bleed gradient headers.

### Badges / tags
- Pill, mono `label` type, `teal-100` fill + `teal-700` text for brand; signal-color variants for status only.

### Inputs & forms
- `1px` border, `paper-0` fill, radius `0.375rem`. Focus → `teal-400` ring (2px), not a glow.
- Labels above inputs in `body-sm` weight 500; helper/error text in `body-sm`. Errors use `signal-error` + a directional message.

### Navigation / header
- Slim, hairline bottom border, no shadow. Logo left, links in `body-sm` 500, language toggle (PT/EN) as a mono control. Sticky with a `1px` border that intensifies on scroll — no blur-heavy glass.

### Data & metrics
- Figures in `data` (mono, tabular). Metric cells use the signature framing (Section 8). Charts use the signal series order (4.3) and hairline axes.

---

## 10. Motion

- **Purposeful and fast.** Default transition `150–200ms`, `ease-out`. Hover/focus only.
- **One orchestrated moment:** a hero load sequence (eyebrow → headline → grid fade-in, staggered ~60ms). Nowhere else needs entrance animation.
- Scroll reveals: at most a single `fade-in` + 8px rise, once per section, not per element.
- **Always** respect `prefers-reduced-motion: reduce` — disable transforms and the ambient grid animation.
- Retire scattered `scale-in`/`fade-in` on every card (current default). Less motion reads more precise here.

---

## 11. Accessibility floor (non-negotiable)

- Text contrast ≥ 4.5:1 (≥ 3:1 for large display). Verify teal-on-paper and ink-on-dark.
- Visible keyboard focus everywhere (the `teal-400` ring).
- Full responsive down to 360px; PT strings must not clip.
- Hit targets ≥ 44px. Don't convey state by color alone — pair signal colors with a label or icon.

---

## 12. Implementation roadmap (after this doc)

1. **Fonts:** add Space Grotesk + IBM Plex Sans + IBM Plex Mono (self-hosted or Google Fonts), wire `fontFamily` in `tailwind.config.ts`.
2. **Tokens:** replace `:root` / `.dark` in `src/index.css` with Section 4.4; add the type scale and 8px spacing to the Tailwind theme.
3. **Primitives:** restyle shadcn `button`, `card`, `badge`, `input` to the rules in Section 9.
4. **Extract components:** pull `Header`, `Footer`, `Section`, `FieldLabel`, `MetricCell` out of the monolithic pages.
5. **Signature:** build the measurement-grid eyebrow + tick-rule + hero grid as reusable components.
6. **Showcase page:** a `/style` route rendering every token and component — this becomes the visual contract and the thing you screenshot into Claude.

---

*Change log*
- v0.1 — initial specification, technical research-lab direction. Teal anchor retained from the original Lovable build; everything else rebuilt.
