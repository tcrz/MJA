"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Reveal from "../Reveal";
import { hero as defaultHero } from "@/lib/content";

type HeroContent = typeof defaultHero & {
  ctaSecondary?: { label: string; href: string };
};
type HeroImage = { src: string; alt: string };

// Homepage default: one slide per active/licensed line of business, plus one
// standing in for the five-year plan's future direction — not the full raw
// commodity list from the strategy deck, so the carousel never implies more
// lines are live than actually are.
const defaultImages: HeroImage[] = [
  {
    src: "https://images.unsplash.com/photo-1759272840712-c7e5ea852367?auto=format&fit=crop&w=2400&q=75",
    alt: "",
  },
  {
    src: "https://images.unsplash.com/photo-1663904459101-78345f6b8300?auto=format&fit=crop&w=2400&q=75",
    alt: "",
  },
  {
    src: "https://images.unsplash.com/photo-1718752773274-4baba3906300?auto=format&fit=crop&w=2400&q=75",
    alt: "",
  },
];

const SLIDE_DURATION = 6000;

export default function Hero({
  hero = defaultHero,
  images = defaultImages,
}: {
  hero?: HeroContent;
  /** One entry keeps the hero static (e.g. the /cocoa page); 2+ auto-rotates. */
  images?: HeroImage[];
}) {
  const [index, setIndex] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(query.matches);
    const onChange = () => setReduceMotion(query.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (images.length <= 1 || reduceMotion) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, SLIDE_DURATION);
    return () => clearInterval(id);
  }, [images.length, reduceMotion]);

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
      {images.map((img, i) => (
        <Image
          key={img.src}
          src={img.src}
          alt={img.alt}
          fill
          priority={i === 0}
          sizes="100vw"
          // Unsplash's CDN already handles format + sizing (auto=format&w=).
          // Skip Next's image optimizer, which 500s on these remote sources.
          unoptimized
          aria-hidden={i !== index}
          className={`object-cover transition-opacity duration-[1400ms] ease-out ${
            i === index ? "opacity-100" : "opacity-0"
          } ${i === 0 ? "hero-photo-in" : ""}`}
        />
      ))}
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

      <div className="container-x relative flex min-h-screen flex-col justify-center pt-28 pb-20">

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

        {images.length > 1 && (
          <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2.5 sm:justify-start sm:pl-[max(0px,calc((100vw-1140px)/2+40px))]">
            {images.map((img, i) => (
              <button
                key={img.src}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show slide ${i + 1} of ${images.length}`}
                aria-current={i === index}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? "w-6 bg-gold-light" : "w-1.5 bg-cream/35 hover:bg-cream/60"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
