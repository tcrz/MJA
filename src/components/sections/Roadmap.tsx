import Reveal from "../Reveal";
import { roadmap } from "@/lib/content";

export default function Roadmap() {
  return (
    <section id="roadmap" className="relative overflow-hidden bg-forest-deep py-24 text-cream md:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 15% 0%, rgba(46,125,70,0.35), transparent 60%)",
        }}
      />
      <div className="container-x relative">
        <Reveal className="max-w-2xl">
          <h2 className="text-[clamp(1.8rem,3.8vw,2.7rem)] text-cream">
            From a license today to a{" "}
            <span className="gold-text">legacy tomorrow</span>
          </h2>
          <p className="mt-4 text-lg text-cream/75">
            A deliberate path from foundation to market leadership — each year
            building on the last.
          </p>
        </Reveal>

        {/* Horizontal connector line (desktop) */}
        <div className="relative mt-16">
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-[26px] hidden h-px bg-gradient-to-r from-gold-light/10 via-gold-light/40 to-gold-light/10 lg:block"
          />
          <ol className="grid gap-y-10 lg:grid-cols-5 lg:gap-x-6">
            {roadmap.map((item, i) => (
              <Reveal as="li" key={item.year} delay={i * 110} className="relative">
                <div className="flex items-center gap-4 lg:flex-col lg:items-start lg:gap-0">
                  <span className="relative z-10 grid h-[52px] w-[52px] flex-none place-items-center rounded-full bg-gradient-to-b from-gold-light to-gold font-display text-lg font-bold text-[#2a1e06] shadow-[0_10px_22px_-10px_rgba(184,135,31,0.9)]">
                    {i + 1}
                  </span>
                  <div className="lg:mt-6">
                    <p className="font-display text-xl font-semibold text-cream tnum">
                      {item.year}
                    </p>
                    <p className="text-sm font-semibold uppercase tracking-wide text-gold-light">
                      {item.phase}
                    </p>
                  </div>
                </div>
                <ul className="mt-4 space-y-2 lg:pr-4">
                  {item.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-2.5 text-sm leading-snug text-cream/70"
                    >
                      <span className="mt-1.5 h-1 w-1 flex-none rounded-full bg-gold-light/70" />
                      {point}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
