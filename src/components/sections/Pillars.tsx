import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";
import { pillars } from "@/lib/content";

const icons = [SeedIcon, BadgeIcon, GearIcon, PeopleIcon, GrowthIcon];

export default function Pillars() {
  const [lead, ...rest] = pillars;
  const LeadIcon = icons[0];

  return (
    <section id="pillars" className="bg-surface-2 py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          title="Five pillars holding up the plan"
          intro="Every decision maps back to one of these — the structure that turns a one-year license into a five-year legacy."
        />

        {/* Sourcing leads: it's the pillar every other one depends on, so
            it gets the weight — not five equal-weight tiles pretending
            each carries the same load. */}
        <div className="mt-14 grid gap-6 lg:grid-cols-[1.05fr_1fr] lg:items-stretch lg:gap-8">
          <Reveal>
            <div className="flex h-full flex-col justify-center rounded-[var(--radius-brand)] border border-line bg-surface p-8 shadow-[var(--shadow-md)] lg:p-11">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-forest/10 text-forest">
                <LeadIcon />
              </span>
              <h3 className="mt-7 max-w-[16ch] font-display text-[clamp(1.6rem,3vw,2.1rem)] font-semibold leading-tight text-ink">
                {lead.title}
              </h3>
              <p className="mt-4 max-w-[38ch] text-base leading-relaxed text-muted">
                {lead.desc}
              </p>
            </div>
          </Reveal>

          <ul className="flex flex-col divide-y divide-line rounded-[var(--radius-brand)] border border-line bg-surface">
            {rest.map((pillar, i) => {
              const Icon = icons[i + 1];
              return (
                <Reveal as="li" key={pillar.title} delay={(i + 1) * 80}>
                  <div className="flex items-start gap-4 p-5 md:p-6">
                    <span className="grid h-10 w-10 flex-none place-items-center rounded-lg bg-forest/10 text-forest">
                      <Icon />
                    </span>
                    <div>
                      <h3 className="font-display text-base font-semibold text-ink">
                        {pillar.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

function SeedIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 21c4-3 7-6 7-10a7 7 0 10-14 0c0 4 3 7 7 10z" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="11" r="2.4" fill="currentColor" />
    </svg>
  );
}
function BadgeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="10" r="6" stroke="currentColor" strokeWidth="1.6" />
      <path d="M9 10l2 2 4-4M9 17l3-1 3 1v4l-3-2-3 2z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
function GearIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
function PeopleIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="9" cy="9" r="2.6" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="16.5" cy="10" r="2.1" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4 19c0-2.8 2.2-4.6 5-4.6s5 1.8 5 4.6M15 14.6c2.4 0 4 1.6 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
function GrowthIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M4 19h16M6 19v-5M11 19V9M16 19v-8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M14 6l3-1 1 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 12l5-4 3 2 5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
