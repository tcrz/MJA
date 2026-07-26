import Image from "next/image";
import Reveal from "../Reveal";
import { impact as defaultImpact, advantages as defaultAdvantages } from "@/lib/content";

type ImpactContent = typeof defaultImpact;
type AdvantagesContent = typeof defaultAdvantages;

export default function Impact({
  impact = defaultImpact,
  advantages = defaultAdvantages,
}: {
  impact?: ImpactContent;
  advantages?: AdvantagesContent;
}) {
  return (
    <section id="impact" className="bg-ground py-24 md:py-32">
      <div className="container-x">
        <Reveal className="relative mb-14 aspect-[21/9] w-full overflow-hidden rounded-[var(--radius-brand)] md:mb-16">
          <Image
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1800&q=75"
            alt="Two business professionals shaking hands, representing the partnerships the business is built on"
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
                Growth that lifts partners and communities
              </h2>
              <p className="mt-4 max-w-[46ch] text-lg text-muted">
                Prosperity is written into the plan - for the farmers and
                suppliers we source from as much as for the business that
                trades on their behalf.
              </p>
            </Reveal>
            <ul className="mt-8 divide-y divide-line overflow-hidden rounded-[var(--radius-brand)] border border-line bg-surface">
              {impact.map((goal, i) => (
                <Reveal as="li" key={goal} delay={i * 60}>
                  <div className="flex items-center gap-3.5 px-5 py-4">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" className="flex-none text-accent-ink">
                      <path d="M5 12l4.5 4.5L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
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
            <div className="mt-8 grid grid-cols-1 overflow-hidden rounded-[var(--radius-brand)] border-t border-l border-line bg-surface sm:grid-cols-2">
              {advantages.map((adv, i) => (
                <Reveal key={adv} delay={i * 70}>
                  <div className="flex h-full items-center gap-3 border-b border-r border-line px-5 py-4">
                    <span className="font-display text-base font-bold text-forest tnum">
                      0{i + 1}
                    </span>
                    <span className="text-[0.9rem] font-medium leading-snug text-ink">
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
