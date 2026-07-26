import Image from "next/image";
import Reveal from "../Reveal";
import { hero as defaultHero, financials as defaultFinancials } from "@/lib/content";

type HeroContent = typeof defaultHero;
type FinancialsContent = typeof defaultFinancials;

export default function Hero({
  hero = defaultHero,
  financials = defaultFinancials,
}: {
  hero?: HeroContent;
  financials?: FinancialsContent;
}) {
  const [primaryStat, ...supportingStats] = financials;

  // Highlight the configured substring within line 2 (e.g. "build futures").
  const emphasisIndex = hero.headlineLine2.indexOf(hero.emphasis);
  const before = emphasisIndex >= 0 ? hero.headlineLine2.slice(0, emphasisIndex) : hero.headlineLine2;
  const after =
    emphasisIndex >= 0
      ? hero.headlineLine2.slice(emphasisIndex + hero.emphasis.length)
      : "";

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-forest-deep text-cream"
    >
      <Image
        src="https://images.unsplash.com/photo-1663904459101-78345f6b8300?auto=format&fit=crop&w=2400&q=75"
        alt=""
        fill
        priority
        sizes="100vw"
        // Unsplash's CDN already handles format + sizing (auto=format&w=).
        // Skip Next's image optimizer, which 500s on these remote sources.
        unoptimized
        className="hero-photo-in object-cover"
      />
      {/* Moody scrim: dark enough to hold text contrast over the photo's
          brightest areas, light enough to actually let the photo read.
          Verified against the brightest-pixel worst case at AA. */}
      <div aria-hidden="true" className="absolute inset-0 bg-forest-deep/70" />
      {/* Gold glow accent, layered above the scrim. Genuinely
          transparent outside its radius — must not paint over the photo. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(50% 60% at 100% 108%, rgba(184,135,31,0.22), transparent 60%)",
        }}
      />

      <div className="container-x relative flex min-h-[92vh] flex-col justify-center pt-28 pb-20">

        <Reveal delay={80}>
          <h1 className="mt-6 max-w-[16ch] text-[clamp(2.6rem,7vw,5.3rem)] leading-[1.02] tracking-[-0.02em]">
            {hero.headlineLine1}
            <br />
            {before}
            {emphasisIndex >= 0 ? (
              <em className="gold-text not-italic font-semibold">{hero.emphasis}</em>
            ) : null}
            {after}
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-7 max-w-[52ch] text-[clamp(1rem,1.6vw,1.2rem)] text-cream/80">
            {hero.subheadline}
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-9 flex flex-wrap gap-4">
            <a href={hero.ctaPrimary.href} className="btn btn-gold">
              {hero.ctaPrimary.label}
            </a>
            <a href={hero.ctaSecondary.href} className="btn btn-ghost-light">
              {hero.ctaSecondary.label}
            </a>
          </div>
        </Reveal>

        <Reveal delay={320}>
          <dl className="mt-16 flex flex-col gap-8 border-t border-gold-light/15 pt-9 sm:flex-row sm:items-end sm:gap-14">
            {/* The one claim already true today leads, sized to command
                the row — not four equal-weight tiles pretending to be
                equally certain. */}
            <div>
              <dt className="sr-only">{primaryStat.label}</dt>
              <dd>
                <span className="block font-display text-[clamp(3.4rem,7.5vw,5.2rem)] font-semibold leading-[0.95] text-cream tnum">
                  {primaryStat.value}
                </span>
                <span className="mt-2 block max-w-[24ch] text-sm text-cream/85">
                  {primaryStat.label}
                </span>
              </dd>
            </div>

            <div className="flex flex-wrap gap-x-9 gap-y-5 sm:pb-1.5">
              {supportingStats.map((stat) => (
                <div key={stat.label} className="min-w-[108px]">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="block font-display text-xl font-semibold text-cream/85 tnum">
                      {stat.value}
                    </span>
                    <span className="mt-1 block max-w-[16ch] text-xs text-cream/85">
                      {stat.label}
                    </span>
                  </dd>
                </div>
              ))}
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
