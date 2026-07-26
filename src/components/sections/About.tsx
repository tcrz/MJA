import Reveal from "../Reveal";
import { about as defaultAbout, vision as defaultVision } from "@/lib/content";

type AboutContent = typeof defaultAbout;
type VisionContent = typeof defaultVision;

export default function About({
  about = defaultAbout,
  vision = defaultVision,
}: {
  about?: AboutContent;
  vision?: VisionContent;
}) {
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

        <div className="mt-16 grid grid-cols-1 overflow-hidden rounded-[var(--radius-brand)] border-t border-l border-gold-light/15 md:grid-cols-2">
          <Reveal delay={80}>
            <article className="h-full border-b border-r border-gold-light/15 bg-white/[0.03] p-8 md:p-10">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
                Our Vision
              </h3>
              <p className="mt-4 font-display text-xl italic leading-snug text-cream md:text-2xl">
                {vision.vision}
              </p>
            </article>
          </Reveal>
          <Reveal delay={160}>
            <article className="h-full border-b border-r border-gold-light/15 bg-white/[0.03] p-8 md:p-10">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
                Our Mission
              </h3>
              <p className="mt-4 font-display text-xl italic leading-snug text-cream md:text-2xl">
                {vision.mission}
              </p>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
