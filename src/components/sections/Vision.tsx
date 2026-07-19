import Reveal from "../Reveal";
import { vision } from "@/lib/content";

export default function Vision() {
  return (
    <section id="vision" className="bg-forest-deep py-24 text-cream md:py-32">
      <div className="container-x">
        <h2 className="sr-only">Vision, mission and values</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <Reveal>
            <article className="h-full rounded-[var(--radius-brand)] border border-gold-light/15 bg-white/[0.03] p-8 md:p-10">
              <h3 className="font-display text-base font-semibold text-gold-light">
                Our Vision
              </h3>
              <p className="mt-4 font-display text-[clamp(1.4rem,2.6vw,2rem)] leading-snug text-cream">
                {vision.vision}
              </p>
            </article>
          </Reveal>
          <Reveal delay={100}>
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
