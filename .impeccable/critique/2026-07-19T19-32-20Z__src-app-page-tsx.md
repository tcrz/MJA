---
target: the landing page (src/app/page.tsx)
total_score: 29
p0_count: 0
p1_count: 5
timestamp: 2026-07-19T19-32-20Z
slug: src-app-page-tsx
---
## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Nav scroll-state + form "thank you" work; form reports success even when empty |
| 2 | Match System / Real World | 4 | Natural, domain-accurate voice (COCOBOD, farmer, export, farm-gate) |
| 3 | User Control and Freedom | 3 | Mobile menu closes cleanly; form "thank you" is terminal with no edit/back |
| 4 | Consistency and Standards | 3 | Very consistent token system — but consistent in its AI tells too |
| 5 | Error Prevention | 2 | `noValidate` + no client validation: empty submit still "succeeds" |
| 6 | Recognition Rather Than Recall | 3 | Labeled anchor nav, clear IA |
| 7 | Flexibility and Efficiency | 3 | Smooth-scroll anchors; no back-to-top on a 9-section page |
| 8 | Aesthetic and Minimalist Design | 3 | Clean system, but gradient text + eyebrow-per-section + zero imagery |
| 9 | Error Recovery | 2 | No validation errors exist to recover from; honest "display preview" note is good |
| 10 | Help and Documentation | 3 | Contact details visible; adequate for a landing page |
| **Total** | | **29/40** | **Good — solid foundation, real issues to fix** |

## Anti-Patterns Verdict

**Does this look AI-generated? Partly — it's well-above-average AI, but the seams show.**

**LLM assessment:** The underlying system is genuinely well-built — thoughtful OKLCH-adjacent token architecture, real light/dark theming with a no-flash script, subject-specific SVG icons, content cleanly separated into `content.ts`. That's craft. But five tells stack up: (1) gradient text (`.gold-text`) on every emphasis word; (2) a tiny uppercase tracked eyebrow above literally every section; (3) one identical fade-up reveal applied uniformly to every block; (4) icon+heading+text card grids (Pillars, Model); (5) zero photography on an intensely physical brief. The deepest tell is second-order: **green + gold + cocoa/cream + Fraunces is exactly the palette and type you'd guess from "Ghanaian cocoa brand" without seeing the page.** The cultural symbol (green=growth, gold=prosperity, cocoa=heritage) is doing the work the brand.md warns against — the cultural reading should come from imagery, typography and copy, not a category-obvious palette.

**Deterministic scan:** `detect.mjs` over `src/app/page.tsx` + `src/components` returned **clean (0 findings)**. This is a true negative *for what it scans* (JSX markup) and a blind spot otherwise: the gradient-text and eyebrow tells live in `globals.css` classes (`.gold-text`, `.kicker`), which the markup detector doesn't evaluate. The LLM review caught what the scanner structurally can't.

**Visual overlays:** No browser automation tool is exposed in this session, so no `[Human]` overlay was injected. Findings are from source review plus computed WCAG contrast ratios (below), not a rendered screenshot.

## Overall Impression

This is a competent, coherent landing page with a real design system behind it — it will not embarrass the brand. What holds it back from *earning trust for a due-diligence investor* (its actual job) is three things pulling against each other: **copy that overclaims** while the brand's whole thesis is integrity; **zero imagery** on a brief that is all about a tangible product and real farmers; and a **first impression that's literally invisible** (the nav disappears over the hero). The single biggest opportunity: make the page prove the operation is real — imagery of the cocoa, farmers, and the license — and let the copy be as disciplined as the strategy it describes. Quiet confidence, not superlatives.

## What's Working

1. **The License Credibility card (About).** The status table + "Licensed & compliant with COCOBOD" chip is the strongest trust asset on the page — concrete, specific, and exactly the "licensed, not hopeful" proof the investor needs. This is the model the rest of the page should follow.
2. **The token & theming system.** Semantic tokens that flip cleanly with light/dark, a no-flash theme script, `prefers-reduced-motion` handled in CSS, tabular-nums on figures. Real engineering discipline.
3. **Voice and IA.** The section order (who → vision → model → roadmap → pillars → impact → invest → contact) tells a genuine narrative, and the language is domain-fluent without jargon-dumping.

## Priority Issues

**[P1] The nav is invisible over the hero (light theme).** Nav is `fixed` + transparent at the top, sitting over the dark `forest-deep` hero. In light theme the links are `text-muted` (**2.69:1**), the "MJ ADOM" wordmark is `text-ink` (**1.17:1** — effectively invisible), and the theme toggle / mobile menu button fail too. `Logo` already ships a `variant="light"` prop for dark backgrounds — `Nav` just never passes it.
- **Why it matters:** It's the first thing a visitor sees, and it fails WCAG AA at the top of the funnel. A first-timer can't find navigation on arrival.
- **Fix:** While the nav is in its transparent (un-scrolled) state over the dark hero, render the logo, links, and controls in their light treatment; swap to ink treatment once `scrolled` flips the bar to the cream background.
- **Suggested command:** `$impeccable audit` (contrast/a11y) → `$impeccable adapt`

**[P1] Scroll-reveal gates all content behind client JS.** Every section's content is wrapped in `<Reveal>`, whose default state is `opacity: 0; translateY(22px)`. Content only appears after hydration + IntersectionObserver fires. With JS disabled or for a non-executing crawler, the page ships blank; on the slow connections PRODUCT.md explicitly calls out, content flashes in late. Separately, the *same* fade-up on every block is the uniform-motion AI tell.
- **Why it matters:** Correctness (blank page for no-JS/crawlers/SEO) and craft (motion reads as reflex, not intent).
- **Fix:** Make content visible by default and let motion *enhance* it (or gate the animation, never the content). Vary the entrance to fit what it reveals instead of one global fade-up.
- **Suggested command:** `$impeccable animate`

**[P1] Zero photography on a deeply visual brief.** The product is physical — cocoa pods, beans, farmers, warehouses, Ghana, the license certificate. The page has an SVG pod motif and line icons but no real imagery. The brand register is explicit: imagery isn't optional here, and colored panels where a photo belongs is a failure mode.
- **Why it matters:** Investors trust what they can see is real. An all-typographic page reads as "pre-launch deck," which undercuts the credibility goal.
- **Fix:** Introduce real (or well-chosen stock) imagery at the hero, the sourcing/model section, and — highest value — a photo of the actual COCOBOD license. Search the physical object ("cocoa pods split open on red Ghanaian soil"), not "cocoa farm."
- **Suggested command:** `$impeccable bolder` (imagery-led amplification)

**[P1] Copy overclaims against the integrity positioning.** "One of Ghana's leading cocoa houses" (hero), "Why MJ Adom wins," "durable returns," "Achieve profitability from Year 1" — present-tense superlatives from a company that is one year into a temporary license.
- **Why it matters:** To an investor doing due diligence, an overclaim is a red flag, not a reassurance — and it directly contradicts the "licensed, not hopeful / quiet confidence over hype" principle the brand is built on.
- **Fix:** Reframe to what's earned and true today ("a licensed Ghanaian cocoa house building toward…"), and let the roadmap carry the ambition instead of the headline.
- **Suggested command:** `$impeccable clarify`

**[P1/P2] Gradient text + eyebrow-on-every-section — the two loudest tells.** `.gold-text` (background-clip gradient) is on every key emphasis word — "build futures," "legacy tomorrow," "durable returns," "excellence." Gradient text is an absolute ban (decorative, never meaningful). Meanwhile `.kicker` appears above all nine sections.
- **Why it matters:** Together they're what makes a design director say "AI-assisted." Both are cosmetic and easy to remove without losing anything.
- **Fix:** Emphasis via a single solid gold ink + weight/size, not a gradient fill. Drop the eyebrow to a deliberate cadence (a named kicker used once or twice, not as section grammar).
- **Suggested command:** `$impeccable typeset` + `$impeccable quieter`

## Persona Red Flags

**Jordan (First-Timer):** Lands on the page and the navigation is invisible over the hero — no obvious way to orient beyond scrolling. The "Formula for Success" equation (Trusted + Consistent + … = Industry Leadership) is clever but asks the reader to parse an abstraction. Otherwise the narrative order guides them well.

**Riley (Stress Tester):** Submits the contact form with every field empty → still gets "Thank you. Your message has been noted." The form has `noValidate` and no client checks, so it reports success for input it never captured (and never sends — it's display-only). That's a silent false-success, the exact thing Riley hunts for.

**Casey (Mobile):** The primary "Partner With Us" button is `sm:inline-flex` — hidden on the smallest screens, surviving only inside the drawer. Nav contrast fails over the hero on mobile too. No back-to-top on a long, 9-section scroll. Touch targets themselves are fine (44px+).

**Kwame (the due-diligence financier — from PRODUCT.md):** Wants evidence the operation is real before spending a call. The License card lands perfectly. But then: no photography of any actual operation, a headline calling a one-year-licensed buyer a "leading cocoa house," and a contact form that doesn't actually send. Each small credibility leak matters more to him than to any other visitor.

## Minor Observations

- **Placeholder & helper text fail AA.** Form placeholders are `text-cream/40` (**3.44:1**) and the "Display preview" helper is `text-cream/45` (**3.97:1**) — both under 4.5. Body `--muted` on cream (**5.29**) and the kicker (**5.85**) pass fine.
- **Pillars is an identical card grid** (icon + heading + text × 5). Model is the same shape but earns it as a real supply-chain sequence; Pillars doesn't have that justification.
- **The hero stat row** (25–35% / 5yr / 100% / 6) is the "hero-metric" cliché shape. The numbers are real, so it's defensible — but it's the first place the eye reads "SaaS template."
- **Fraunces** is the single most common AI display serif (top of the reflex-reject list). It's already committed as brand identity, so identity-preservation applies — just know the trade-off if distinctiveness ever becomes a goal.

## Questions to Consider

- What would this page look like if the *photography* carried the trust, and the copy just got out of the way?
- If an investor read only the headlines, would they believe a disciplined operator wrote them — or a marketer?
- The License card is the best thing here. What if the whole page were built in its image — specific, concrete, verifiable — instead of aspirational?
