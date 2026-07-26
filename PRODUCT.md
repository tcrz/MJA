# Product

## Register

brand

## Platform

web

## Users

The homepage is built to win over **investors, partners, and institutional buyers** evaluating MJ Adom as a company, not just a cocoa buyer. They arrive skeptical of a young, newly-licensed operation and are doing due diligence: skimming for evidence that this is a serious, multi-sector business with real licences today and a credible, disciplined path to a much larger footprint — not a single-commodity trader dressed up as more.

Farmers, buyers/export partners, and regulators (COCOBOD, Ghana Gold Board, banks) all appear in the story and matter to the business, but they are supporting cast on this surface. When a design choice must serve one audience, it serves the investor/partner deciding whether MJ Adom's broader ambition is real and disciplined enough to trust with capital or a partnership.

The `/cocoa` page is a narrower, dedicated sub-surface for the cocoa-buying line of business specifically (linked from the homepage's Services section). Its audience is the same due-diligence visitor after they've clicked through to evaluate that one active line in detail — it keeps the original cocoa-first narrative rather than the broad identity.

## Product Purpose

**The company's identity has broadened.** MJ Adom is no longer presented as a cocoa trading company — it's a diversified commodities and investment company (cocoa was the first licence, not the whole business). The homepage now leads with that broad identity and 2026–2030 strategy, and presents individual services — cocoa, gold, and future lines — as components within that larger story rather than as the story itself.

This shift exists because a cocoa-only identity misrepresented the company's actual scope (aggregation, logistics, processing, export, agribusiness, investment) and couldn't absorb new licences without feeling like a rebrand each time. At the same time, the company is explicit that it will not overstate operational readiness: only cocoa buying is genuinely active today; gold is licensed under the Ghana Gold Board but not yet operating (launching soon); everything else in the roadmap is future direction, not a current offer. The `services` list in `src/lib/content.ts` encodes this with an explicit `status` (`active` / `licensed` / `future`) per line of business — never bump a status without confirming the licence/operation is actually real.

Success is the same as before: not a signup or a sale, but a qualified visitor — now specifically one evaluating the whole company, not just its cocoa arm — reaching out.

## Positioning

A diversified, Ghana-based commodities and investment company competing on integrity and discipline rather than promises — two active/licensed trading lines (cocoa, gold) today, inside a credible, staged five-year plan toward a much broader commodities and investment business.

## Conversion & proof

- Primary CTA: get in touch / start a conversation. The page's job is credibility and contact, not a hard conversion — an investor or partner who reaches out is the win.
- Secondary fallback: for visitors not ready to make contact, the strategy itself is the path — read the services, roadmap, and impact so the plan does the convincing.
- The line a visitor remembers after 10 seconds: *"Trading Commodities. Creating Value. Building Prosperity."*
- Belief ladder — what an investor/partner must believe, in order, before making contact:
  1. This is a real, licensed, compliant company with more than one active line of business — concrete COCOBOD and Ghana Gold Board credentials, not an aspiration.
  2. It runs on a disciplined, legible strategy — a clear services architecture and a staged five-year roadmap, not vibes.
  3. Its growth is grounded in durable substance — farmer/supplier-first relationships plus quality and compliance, not hype.
  4. The people behind it operate with integrity and can be trusted with capital or a partnership as the company adds licences over time.
- Proof on hand: the COCOBOD Licensed Buying Company certificate (cocoa, active) and the Ghana Gold Board licence (gold, launching soon). No testimonials, partner logos, or named team bios are available yet; credibility is currently carried by these licences plus the discipline of the strategy itself — do not imply proof that does not exist, and never present a `future`-status service as though it's operating.

## Brand Personality

Grounded, principled, assured. The voice is quietly confident — it states what is true and licensed, and lets the discipline read as seriousness. No hype, no hedging. Warm enough to feel human and Ghanaian, credible enough for someone deciding where to place money. Integrity is the throughline: every claim is one the company can stand behind today.

## Anti-references

- **Generic agribusiness stock** — cliché imagery of hands cupping beans, sunset plantations, blue-corporate templates. This is the category reflex; avoid it entirely.
- **Stiff corporate / bank** — cold, grey, PowerPoint-formal, lifeless. Credibility must not come at the cost of warmth or humanity.
- **Crypto / startup hype** — neon gradients, "disrupting cocoa," hockey-stick energy, hollow buzzwords. The opposite of the trust this brand needs.

## Design Principles

Licensed, not hopeful — lead with concrete credentials and compliance; let the license and the plan carry the claim, never aspiration alone. Show the discipline — the strategy, model, and roadmap are the proof, so make the plan legible rather than decorating around it. Rooted in real relationships — farmer-first sourcing is the substance behind the numbers, not a CSR footnote. Quiet confidence over hype — assured and understated; integrity should read as seriousness, not volume. Institutional trust with human warmth — credible enough for a financier's due-diligence, warm enough that it never reads as a bank.

## Accessibility & Inclusion

Target WCAG 2.1 AA: body text at ≥4.5:1 contrast, full keyboard operability, semantic structure, and a working `prefers-reduced-motion` path for every animation. Assume some visitors are on low-end devices or slower connections; keep the experience readable and fast without motion.
