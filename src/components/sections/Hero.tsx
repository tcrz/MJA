import Reveal from "../Reveal";
import { financials } from "@/lib/content";

export default function Hero() {
  const [primaryStat, ...supportingStats] = financials;

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-forest-deep text-cream"
    >
      {/* Ambient light + gold glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 130% at 82% -10%, #17331f 0%, #0c2a17 52%), radial-gradient(50% 60% at 100% 108%, rgba(184,135,31,0.22), transparent 60%)",
        }}
      />
      <PodMotif />

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
                <span className="mt-2 block max-w-[24ch] text-sm text-cream/65">
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
                    <span className="mt-1 block max-w-[16ch] text-xs text-cream/50">
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

/** Faint cocoa-pod line motif, lower-right — subject-specific texture. */
function PodMotif() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 200 260"
      className="pointer-events-none absolute -right-6 bottom-0 hidden h-[85%] w-auto opacity-[0.12] lg:block"
      fill="none"
    >
      <path
        d="M100 12c34 22 52 66 52 116 0 62-30 116-52 116S48 190 48 128C48 78 66 34 100 12Z"
        stroke="#E6C566"
        strokeWidth="1.4"
      />
      <path
        d="M100 20v220M74 40c-6 60-6 140 0 196M126 40c6 60 6 140 0 196M60 70c-4 44-4 96 0 130M140 70c4 44 4 96 0 130"
        stroke="#E6C566"
        strokeWidth="1"
        strokeOpacity="0.7"
      />
    </svg>
  );
}
