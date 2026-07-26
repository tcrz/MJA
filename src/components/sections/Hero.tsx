import Image from "next/image";
import Reveal from "../Reveal";
import { hero as defaultHero } from "@/lib/content";

type HeroContent = typeof defaultHero & {
  ctaSecondary?: { label: string; href: string };
};

const defaultImage = {
  src: "https://images.unsplash.com/photo-1568025848823-86404cd04ad1?auto=format&fit=crop&w=2400&q=75",
  alt: "",
};

export default function Hero({
  hero = defaultHero,
  image = defaultImage,
}: {
  hero?: HeroContent;
  image?: { src: string; alt: string };
}) {
  // Highlight the configured substring within line 2 (e.g. "build futures").
  const emphasisIndex = hero.headlineLine2.indexOf(hero.emphasis);
  const before = emphasisIndex >= 0 ? hero.headlineLine2.slice(0, emphasisIndex) : hero.headlineLine2;
  const after =
    emphasisIndex >= 0
      ? hero.headlineLine2.slice(emphasisIndex + hero.emphasis.length)
      : "";

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-forest-deep text-cream"
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority
        sizes="100vw"
        // Unsplash's CDN already handles format + sizing (auto=format&w=).
        // Skip Next's image optimizer, which 500s on these remote sources.
        unoptimized
        className="hero-photo-in object-cover"
      />
      {/* Moody scrim: dark enough to hold text contrast over the photo's
          brightest areas, light enough to actually let the photo read.
          Verified against the brightest-pixel worst case at AA. */}
      <div aria-hidden="true" className="absolute inset-0 bg-forest-deep/70" />
      {/* Gold glow accent, layered above the scrim. Genuinely
          transparent outside its radius — must not paint over the photo. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(50% 60% at 100% 108%, rgba(184,135,31,0.22), transparent 60%)",
        }}
      />

      <div className="container-x relative flex min-h-[92vh] flex-col justify-center pt-28 pb-20">

        <Reveal delay={80}>
          <h1 className="mt-6 max-w-[16ch] text-[clamp(2.6rem,7vw,5.3rem)] leading-[1.02] tracking-[-0.02em]">
            {hero.headlineLine1}
            <br />
            {before}
            {emphasisIndex >= 0 ? (
              <em className="gold-text not-italic font-semibold">{hero.emphasis}</em>
            ) : null}
            {after}
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-7 max-w-[52ch] text-[clamp(1rem,1.6vw,1.2rem)] text-cream/80">
            {hero.subheadline}
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-9 flex flex-wrap gap-4">
            <a href={hero.ctaPrimary.href} className="btn btn-gold">
              {hero.ctaPrimary.label}
            </a>
            {hero.ctaSecondary && (
              <a href={hero.ctaSecondary.href} className="btn btn-ghost-light">
                {hero.ctaSecondary.label}
              </a>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
