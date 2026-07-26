import Reveal from "../Reveal";
import { about as defaultAbout } from "@/lib/content";

type AboutContent = typeof defaultAbout;

export default function About({
  about = defaultAbout,
}: {
  about?: AboutContent;
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
      </div>
    </section>
  );
}
