# Konect — Design System

Premium B2B security brand. Trust-forward, authoritative, modern — with enough
personality to stand apart from generic CCTV-installer sites. Not flashy, not cheap.

## 1. Atmosphere
Dark, confident, engineered. Deep navy canvases with electric-blue energy and
restrained gold for premium accents (stats, awards). Generous whitespace on light
content areas; dramatic dark sections for hero, CTA bands and case studies.
Micro-interactions are refined — subtle scroll reveals, counter animations, card
lifts. Never bouncy or gimmicky.

## 2. Colour palette & roles
| Role | Name | Hex | Usage |
|------|------|-----|-------|
| Primary | Navy | `#0A1628` | Dark sections, headers, footer, headings on light |
| Primary light | Navy Light | `#1A2A44` | Card surfaces on dark, gradients |
| Primary dark | Navy Dark | `#060E1A` | Deepest backgrounds, gradient ends |
| Accent | Electric Blue | `#2563EB` | CTAs, links, active states, highlights |
| Accent light | Blue 500 | `#3B82F6` | Hovers, glows |
| Accent dark | Blue 700 | `#1D4ED8` | Pressed states |
| Premium | Gold | `#D4A853` | Stat numbers, awards, premium ticks |
| Text | Ink | `#0A1628` | Body text on light |
| Text muted | Muted | `#5B6577` | Secondary copy |
| Surface | Surface | `#F6F8FB` | Alternating light sections |
| Border | Line | `#E4E9F1` | Hairlines, card borders |

Tailwind v4 tokens live in `src/app/globals.css` (`@theme`) → utilities like
`bg-navy`, `text-accent`, `text-gold`, `border-line`, `bg-surface`.

## 3. Typography
- **Headings** — Space Grotesk (`font-display`), tight tracking (-0.02em). Modern,
  technical, premium. Stand-in for Clash Display / Cabinet Grotesk (those aren't on
  Google Fonts; self-hosting via next/font keeps the perf budget).
- **Body** — Inter (`font-sans`), comfortable line-height, muted colour for secondary.
- Self-hosted through `next/font/google` → `display: swap`, Latin subset, zero CLS.

## 4. Components
- **Buttons** — `primary` (accent blue, white text), `secondary` (navy), `outline`
  (border, transparent). Medium rounding (`rounded-lg`), confident padding, subtle
  lift on hover.
- **Cards** — white on light / navy-light on dark, hairline border, soft shadow,
  `rounded-2xl`, lift + accent border on hover.
- **Nav** — sticky, transparent over hero → solid navy with shadow after scroll.
- **Stat blocks** — big gold/white numbers (Space Grotesk), muted label, count-up on scroll.
- **Section heading** — eyebrow (accent, uppercase, tracked) + H2 + optional subtitle.

## 5. Layout
- Max content width **1280px**, responsive gutters (16px mobile → 32px desktop) via
  the `Container` component.
- Section rhythm: generous vertical padding (`py-20 md:py-28`).
- Grids: services 4/2/1, verticals 3/2/1, projects 3/2/1. Mobile-first throughout.

## 6. Generation notes
Trust-first and scannable: lead with numbers, keep paragraphs short, give every
section a clear next action (call / WhatsApp / quote). Dark hero & CTA bands use
`.bg-grid` + `.bg-glow`. Imagery is real project photos where available; otherwise
navy gradients with the grid overlay — never generic stock security guards.
