---
name: MJ Adom Commodities & Investments
description: A licensed Ghanaian commodities house rendered as a quiet, disciplined institution — forest green for trust, gold for earned credentials.
colors:
  forest-deep: "#0c2a17"
  forest: "#1b5e34"
  forest-soft: "#2e7d46"
  gold: "#b8871f"
  gold-light: "#e6c566"
  cocoa: "#5a3a22"
  cream: "#faf5ea"
  ground: "#faf5ea"
  surface: "#fffdf7"
  surface-2: "#f3ebd8"
  ink: "#14170f"
  muted: "#5c6a56"
  line: "rgba(12,42,23,0.14)"
  accent: "#b8871f"
  accent-ink: "#7a5a12"
typography:
  display:
    fontFamily: "var(--font-playfair), Iowan Old Style, Palatino, Georgia, serif"
    fontSize: "clamp(2.6rem, 7vw, 5.3rem)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "var(--font-playfair), Iowan Old Style, Palatino, Georgia, serif"
    fontSize: "clamp(1.7rem, 3.6vw, 2.6rem)"
    fontWeight: 600
    lineHeight: 1.05
  title:
    fontFamily: "var(--font-playfair), Iowan Old Style, Palatino, Georgia, serif"
    fontSize: "clamp(1.5rem, 2.6vw, 1.9rem)"
    fontWeight: 600
    lineHeight: 1.15
  body:
    fontFamily: "var(--font-inter), system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "var(--font-inter), system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 700
    letterSpacing: "0.28em"
rounded:
  brand: "14px"
  pill: "9999px"
  icon-chip: "10px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "40px"
  xl: "64px"
components:
  button-primary:
    backgroundColor: "{colors.gold}"
    textColor: "#2a1e06"
    rounded: "10px"
    padding: "0.8rem 1.5rem"
  button-primary-hover:
    backgroundColor: "{colors.gold-light}"
  button-secondary:
    backgroundColor: "{colors.forest}"
    textColor: "#ffffff"
    rounded: "10px"
    padding: "0.8rem 1.5rem"
  button-secondary-hover:
    backgroundColor: "{colors.forest-soft}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "10px"
    padding: "0.8rem 1.5rem"
  card-service:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.brand}"
    padding: "24px"
---

# Design System: MJ Adom Commodities & Investments

## 1. Overview

**Creative North Star: "The Licensed House"**

MJ Adom presents itself the way a serious licensed institution presents itself: no flourish standing in for credibility, no claim outrunning what's actually licensed and operating. Deep forest green carries the weight of trust and permanence; gold appears only where something has actually been earned — an active license, a key figure, a call to act. Cream and warm neutrals keep the whole thing legible and human rather than corporate-cold. The system reads as a company that has nothing to prove through decoration, because the proof is the license itself.

This directly rejects the two failure modes the brand explicitly guards against (per PRODUCT.md): generic agribusiness stock imagery (cliché hands-cupping-beans, sunset-plantation warmth used as a substitute for substance) and crypto/startup hype (gradients, hollow buzzwords, hockey-stick energy). Nothing in this system should announce itself; it should simply hold up under scrutiny.

**Key Characteristics:**
- Forest green dominates as the institutional ground; gold is rationed to credentials, CTAs, and single emphasized words — never a wash of color.
- Display type is an elegant high-contrast serif (Playfair Display), body type a clean geometric-humanist sans (Inter) — the pairing itself does the "warm but credible" work rather than any single color.
- Flat-to-ambient elevation: shadows lift, they never dramatize.
- Status is always explicit and visually distinct (active vs. licensed-launching-soon vs. future direction) — the system never lets a future service look like it's already operating.

## 2. Colors

The palette reads as a working ledger, not a brand mood board: a deep, near-black forest green anchors nearly every dark surface, cream and off-white carry the light surfaces, and gold is spent only where something has been earned.

### Primary
- **Forest Deep** (`#0c2a17`): The institutional dark — hero/roadmap section backgrounds, footer. This is the "we are a real, grounded company" surface.
- **Forest** (`#1b5e34`): Mid-tone brand green — primary button fill (`btn-forest`), icon-chip backgrounds on light surfaces (`bg-forest/10`).
- **Forest Soft** (`#2e7d46`): Hover state for Forest; never used at rest.

### Secondary
- **Gold** (`#b8871f`): The earned-credential color. Reserved for: primary CTA gradient, focus rings, the `accent`/`accent-ink` semantic role, and the single emphasized word in a headline (`.gold-text`, always on dark forest backgrounds only, verified ≥3:1). Never used as a body background or a decorative wash.
- **Gold Light** (`#e6c566`): Lighter step of Gold — headline emphasis on dark backgrounds, hover lift on gold buttons, text-selection highlight.

### Tertiary
- **Cocoa** (`#5a3a22`): Heritage accent reserved for the cocoa-specific dedicated page and imagery contexts; not part of the homepage's working palette.

### Neutral
- **Cream Ground** (`#faf5ea`): Page background (`--ground`) — the default light surface everything sits on.
- **Warm Surface** (`#fffdf7`): Card and panel background (`--surface`), a half-step brighter than the ground so cards read as lifted, not tinted.
- **Warm Surface Deep** (`#f3ebd8`): Secondary section background (`--surface-2`), used to break up long light-mode sections (e.g. Pillars) without a border.
- **Ink** (`#14170f`): Primary text color — verified ≥4.5:1 on both Ground and Surface.
- **Muted Sage** (`#5c6a56`): Secondary/body-support text — a green-tinted gray, never a flat gray, so it stays visibly "in family" with Forest.
- **Hairline** (`rgba(12,42,23,0.14)`): Borders and dividers — a transparent tint of Forest Deep, not a generic gray, so lines read as belonging to the palette even at low opacity.

### Named Rules
**The Earned-Gold Rule.** Gold is spent only on things that are true today: an active CTA, a real headline figure, a licensed-status badge. It is never used as a decorative wash, a background tint, or an accent on a `future`-status element — if gold appears, something underneath it is real.

**The One Dark Section Rule.** Forest Deep is a full-bleed section background (Hero, Roadmap, Footer), never a card or component fill within a light section. Dark and light surfaces don't interleave at the component level — only at the section level.

## 3. Typography

**Display Font:** Playfair Display (with Iowan Old Style, Palatino, Georgia, serif fallback)
**Body Font:** Inter (with system-ui, -apple-system, Segoe UI fallback)

**Character:** A warm, slightly old-style serif for anything that needs to carry authority or emotion (headlines, section titles, key figures), paired with a clean, unadorned grotesque for everything read at length — the serif supplies warmth and gravity, the sans supplies clarity and speed.

### Hierarchy
- **Display** (600, `clamp(2.6rem, 7vw, 5.3rem)`, 1.02 line-height, -0.02em tracking): Hero H1 only. One per page.
- **Headline** (600, `clamp(1.7rem, 3.6vw, 2.6rem)`, 1.05 line-height): Section H2s (via `SectionHeading`).
- **Title** (600, `clamp(1.5rem, 2.6vw, 1.9rem)` down to `1.125rem` for list-level titles, 1.05–1.15 line-height): Card and pillar H3s.
- **Body** (400, `1rem`–`1.125rem`, 1.6 line-height): Paragraph copy, capped at ~52–65ch via `max-w` utilities.
- **Label** (700, `0.72rem`, 0.28em tracking, uppercase): The `.kicker` eyebrow class and status badges — the only place heavy tracking and uppercase are permitted.

### Named Rules
**The Serif-Carries-Weight Rule.** Any element the brand needs to be taken seriously by (headlines, financial figures, license framing) sets in Playfair Display. Anything read for information density sets in Inter. Never swap the two.

## 4. Elevation

The system is flat by default and uses shadow only as a soft ambient lift, not a structural or interactive signal. There is no shadow scale that deepens with "hierarchy level" — a card either sits flush against its section (list rows, dividers) or gets the single ambient shadow that marks it as a discrete surface. Depth between sections is carried by background color steps (Ground → Surface → Surface-2 → Forest Deep), not by shadow.

### Shadow Vocabulary
- **Ambient Small** (`box-shadow: 0 10px 24px -18px rgba(12,42,23,0.4)`): Default resting shadow for service/pillar cards — just enough to read as "lifted off the ground," never a spotlight.
- **Ambient Medium** (`box-shadow: 0 18px 40px -22px rgba(12,42,23,0.42)`): Hover state for linked cards, and the resting shadow for the single lead/featured card in an asymmetric layout (e.g. Pillars' lead tile).

### Named Rules
**The Ambient-Not-Structural Rule.** Shadow blur never exceeds ~40px and never pairs with a hard 1px border for definition — a card gets a border (`--line`) for edge definition OR a shadow for lift, articulated softly; it does not stack both as competing signals of depth.

## 5. Components

Buttons, cards, and badges are all disciplined and understated: restrained shapes, a single consistent radius scale, and color spent only where the content earns it (a real CTA, an active status). Nothing is oversized for effect.

### Buttons
- **Shape:** 10px radius (`.btn`), never pill-shaped except status badges.
- **Primary (Gold):** `linear-gradient(180deg, #e6c566, #b8871f)` fill, `#2a1e06` text, `box-shadow: 0 10px 22px -12px rgba(184,135,31,0.85)` — the only button with a shadow at rest, since it's the one action the page most wants taken.
- **Secondary (Forest):** Solid `#1b5e34` fill, white text, no shadow at rest.
- **Hover / Focus:** All solid buttons lift `translateY(-2px)` on hover, no scale or bounce. Focus-visible everywhere is a 2px solid gold outline with 3px offset (`:focus-visible` global rule) — never a browser default ring, never removed.
- **Ghost variants:** `btn-ghost-light` (cream text, translucent gold-tinted border, for use over the dark hero) and `btn-ghost` (ink text, hairline border, for light sections) — transparent fill, border-only definition.

### Cards / Containers
- **Corner Style:** 14px radius (`--radius-brand`) uniformly across service cards, pillar tiles, and the lead pillar image card — one radius value system-wide, never a second scale.
- **Background:** `--surface` (`#fffdf7`) on cream sections; never a second background tint inside a card.
- **Shadow Strategy:** Ambient Small at rest; Ambient Medium on hover only for cards that are actually links (see Elevation).
- **Border:** 1px `--line` hairline on every card — the border supplies edge definition so the shadow can stay soft.
- **Internal Padding:** 24px (mobile) stepping to 28–36px on desktop for lead/feature cards.

### Status Badges
- **Style:** Small pill (`rounded-full`), uppercase label, 3 semantic fills: `active` (forest-tinted, `bg-forest/10 text-forest`), `licensed` (gold-tinted, `bg-gold/15 text-accent-ink`), `future` (neutral hairline-tinted, `bg-line/60 text-muted`).
- **State:** Never interactive; purely informational. This is the one place the system explicitly encodes "is this real yet" — do not soften or blend the three tiers.

### Navigation
- **Style:** Fixed header, transparent over the dark hero, solid cream (`bg-ground/85` + backdrop-blur) once scrolled or the mobile drawer opens. Link color and the primary CTA's opacity both switch with the same `solid` state, so the bar never shows illegible light-on-light or dark-on-dark text.
- **Typography:** Body-weight sans, no uppercase tracking on nav links (reserved for the kicker/label role instead).
- **Mobile:** Full-width drawer beneath the bar, same link styling stacked vertically, CTA repeated at the bottom full-width.

### Icon Chips (signature component)
Small (40–48px) rounded-square (10px radius) chips in `bg-forest/10 text-forest`, holding a single-color 24px line icon (1.5–1.7px stroke, no fill except small accent dots). Used to mark each pillar and to hold the logo mark in `Logo.tsx`. The consistent forest-tint-on-cream treatment is what makes these read as "part of the same system" rather than per-section decoration.

## 6. Do's and Don'ts

### Do:
- **Do** reserve gold for things that are true today — an active CTA, a real number, an `active`/`licensed` status badge (The Earned-Gold Rule).
- **Do** keep the 14px card radius and 10px button radius as the only two radius values in the system.
- **Do** pair Playfair Display (display/headline/title) with Inter (body/label) — never introduce a third typeface.
- **Do** keep shadows soft and ambient (≤40px blur, no hard offset) — depth comes from background-color steps between sections, not deepening shadows.
- **Do** give every status-gated service (cocoa, gold, future lines) an explicit, visually distinct badge — never let a `future` item look active.

### Don't:
- **Don't** use generic agribusiness stock imagery — cliché hands-cupping-beans, sunset-plantation shots, blue-corporate templates (PRODUCT.md anti-reference, verbatim).
- **Don't** reach for stiff corporate/bank styling — cold, grey, PowerPoint-formal, lifeless (PRODUCT.md anti-reference, verbatim).
- **Don't** use crypto/startup hype — neon gradients, "disrupting cocoa"-style copy, hockey-stick energy, hollow buzzwords (PRODUCT.md anti-reference, verbatim).
- **Don't** apply gold as a decorative background wash or tint a `future`-status card with any brand color that implies it's operating.
- **Don't** pair a 1px border with a wide (16px+) drop shadow on the same card — pick border-for-definition or shadow-for-lift, never both as competing signals.
- **Don't** introduce a second border-radius scale (e.g. fully pill-shaped cards, or 24–32px "soft" corners) — 14px for cards and 10px for buttons are the only two values.
- **Don't** let the dark Forest Deep surface appear as a component fill inside a light section — it is a full-bleed section background only (Hero, Roadmap, Footer).
