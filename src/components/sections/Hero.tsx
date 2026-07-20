import Image from "next/image";
import Reveal from "../Reveal";
import { financials } from "@/lib/content";

export default function Hero() {
  const [primaryStat, ...supportingStats] = financials;

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
        className="object-cover"
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
        <Reveal>
          <p className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold-light">
            <span className="h-px w-7 bg-gold-light/70" />
            COCOBOD-Licensed · Ghana · Est. 2026
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mt-6 max-w-[16ch] text-[clamp(2.6rem,7vw,5.3rem)] leading-[1.02] tracking-[-0.02em]">
            We don&rsquo;t just buy cocoa,
            <br />
            we <em className="gold-text not-italic font-semibold">build futures</em>.
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-7 max-w-[52ch] text-[clamp(1rem,1.6vw,1.2rem)] text-cream/80">
            Ethical sourcing, quality you can trust, and farmer partnerships built
            to last — the foundation of a Ghanaian cocoa house built to endure.
            From a license today to a legacy tomorrow.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#contact" className="btn btn-gold">
              Partner With Us
            </a>
            <a href="#roadmap" className="btn btn-ghost-light">
              Our 5-Year Vision
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
