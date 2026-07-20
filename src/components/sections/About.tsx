import Reveal from "../Reveal";
import { about, vision } from "@/lib/content";

export default function About() {
  return (
    <section id="about" className="bg-forest-deep py-24 text-cream md:py-32">
      <div className="container-x">
        <div className="max-w-2xl">
          <Reveal>
            <h2 className="max-w-[18ch] text-[clamp(1.9rem,4vw,2.8rem)] text-cream">
              {about.heading}
            </h2>
          </Reveal>
          <div className="mt-6 space-y-5">
            {about.body.map((para, i) => (
              <Reveal key={i} delay={80 + i * 80}>
                <p className="max-w-[58ch] text-lg leading-relaxed text-cream/80">
                  {para}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <Reveal delay={80}>
            <article className="h-full rounded-[var(--radius-brand)] border border-gold-light/15 bg-white/[0.03] p-8 md:p-10">
              <h3 className="font-display text-base font-semibold text-gold-light">
                Our Vision
              </h3>
              <p className="mt-4 font-display text-[clamp(1.4rem,2.6vw,2rem)] leading-snug text-cream">
                {vision.vision}
              </p>
            </article>
          </Reveal>
          <Reveal delay={160}>
            <article className="h-full rounded-[var(--radius-brand)] border border-gold-light/15 bg-white/[0.03] p-8 md:p-10">
              <h3 className="font-display text-base font-semibold text-gold-light">
                Our Mission
              </h3>
              <p className="mt-4 font-display text-[clamp(1.4rem,2.6vw,2rem)] leading-snug text-cream">
                {vision.mission}
              </p>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
