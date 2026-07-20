import Image from "next/image";
import Reveal from "../Reveal";
import { impact, advantages } from "@/lib/content";

export default function Impact() {
  return (
    <section id="impact" className="bg-ground py-24 md:py-32">
      <div className="container-x">
        <Reveal className="relative mb-14 aspect-[21/9] w-full overflow-hidden rounded-[var(--radius-brand)] md:mb-16">
          <Image
            src="https://images.unsplash.com/photo-1507576164121-220762647800?auto=format&fit=crop&w=1800&q=75"
            alt="Cupped hands holding freshly harvested cocoa beans over a woven drying mat"
            fill
            sizes="(min-width: 1140px) 1140px, 100vw"
            className="object-cover"
          />
        </Reveal>
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Impact goals */}
          <div>
            <Reveal>
              <h2 className="max-w-[16ch] text-[clamp(1.7rem,3.4vw,2.4rem)] text-ink">
                Growth that lifts farmers and communities
              </h2>
              <p className="mt-4 max-w-[46ch] text-lg text-muted">
                Prosperity is written into the plan — for the people who grow the
                cocoa as much as for the business that trades it.
              </p>
            </Reveal>
            <ul className="mt-8 space-y-3">
              {impact.map((goal, i) => (
                <Reveal as="li" key={goal} delay={i * 60}>
                  <div className="flex items-start gap-3 rounded-xl border border-line bg-surface px-4 py-3.5 shadow-[var(--shadow-sm)]">
                    <span className="mt-0.5 grid h-6 w-6 flex-none place-items-center rounded-full bg-gold/15 text-accent-ink">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12l4.5 4.5L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className="text-[0.98rem] text-ink">{goal}</span>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>

          {/* Competitive advantage */}
          <div className="lg:pt-4">
            <Reveal>
              <h2 className="max-w-[16ch] text-[clamp(1.7rem,3.4vw,2.4rem)] text-ink">
                What we&rsquo;re building on
              </h2>
            </Reveal>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {advantages.map((adv, i) => (
                <Reveal key={adv} delay={i * 70}>
                  <div className="flex h-full items-center gap-3 rounded-xl bg-forest/[0.06] px-4 py-4">
                    <span className="font-display text-lg font-bold text-forest tnum">
                      0{i + 1}
                    </span>
                    <span className="text-[0.95rem] font-medium leading-snug text-ink">
                      {adv}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
