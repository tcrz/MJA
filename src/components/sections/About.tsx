import Reveal from "../Reveal";
import { LeafMark } from "../Logo";
import { about } from "@/lib/content";

export default function About() {
  return (
    <section id="about" className="bg-ground py-24 md:py-32">
      <div className="container-x grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <Reveal>
            <h2 className="max-w-[18ch] text-[clamp(1.8rem,3.8vw,2.7rem)] text-ink">
              {about.heading}
            </h2>
          </Reveal>
          <div className="mt-6 space-y-5">
            {about.body.map((para, i) => (
              <Reveal key={i} delay={80 + i * 80}>
                <p className="max-w-[54ch] text-lg leading-relaxed text-muted">
                  {para}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        {/* License credibility card */}
        <Reveal delay={120}>
          <div className="relative overflow-hidden rounded-[var(--radius-brand)] border border-line bg-surface p-8 shadow-[var(--shadow-md)]">
            <div className="flex items-center gap-3">
              <LeafMark className="h-8 w-8" />
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-accent-ink">
                Current Status · 2026
              </span>
            </div>
            <div className="mt-7 divide-y divide-line">
              {about.status.map((row) => (
                <div
                  key={row.label}
                  className="flex items-baseline justify-between gap-4 py-3.5"
                >
                  <span className="text-sm uppercase tracking-wide text-muted">
                    {row.label}
                  </span>
                  <span className="text-right font-display text-lg font-semibold text-ink">
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-center gap-2 rounded-lg bg-forest/10 px-4 py-3 text-sm font-medium text-forest">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M5 12l4.5 4.5L19 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Licensed & compliant with COCOBOD regulations
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
