import Image from "next/image";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";
import { services, type ServiceStatus } from "@/lib/content";

// Cocoa is the only service with a live dedicated page today (it's the one
// active crop within the broader Agricultural Commodities Trading line). As
// gold (and later services) come online, add their slug here and drop in a
// matching /app/<slug>/page.tsx + content.<slug>.ts — see content.cocoa.ts
// for the pattern to copy.
const servicePages: Record<string, string> = {
  "Agricultural Commodities Trading": "/cocoa",
};

// One representative thumbnail per line of business — echoes the strategy
// deck's "commodity portfolio" grid, scoped to the site's own 6 services
// rather than the deck's full raw-commodity list.
const serviceImages: Record<string, { src: string; alt: string }> = {
  "Agricultural Commodities Trading": {
    src: "https://images.unsplash.com/photo-1722699350336-b22f6a263499?auto=format&fit=crop&w=600&q=75",
    alt: "A farmer's hand harvesting a cocoa pod",
  },
  "Precious Minerals Trading - Gold": {
    src: "https://images.unsplash.com/photo-1718752773274-4baba3906300?auto=format&fit=crop&w=600&q=75",
    alt: "Stacked gold bullion bars",
  },
  "Commodity Aggregation & Logistics": {
    src: "https://images.unsplash.com/photo-1645736315000-6f788915923b?auto=format&fit=crop&w=600&q=75",
    alt: "A forklift moving pallets in a warehouse",
  },
  "Commodity Processing & Value Addition": {
    src: "https://images.unsplash.com/photo-1745921204896-c2011440a4e2?auto=format&fit=crop&w=600&q=75",
    alt: "Industrial processing machinery inside a factory",
  },
  "Export & International Trade": {
    src: "https://images.unsplash.com/photo-1759272840712-c7e5ea852367?auto=format&fit=crop&w=600&q=75",
    alt: "Aerial view of a busy shipping port with containers",
  },
  "Strategic Investments & Partnerships": {
    src: "https://images.unsplash.com/photo-1534951009808-766178b47a4f?auto=format&fit=crop&w=600&q=75",
    alt: "Stacked gold-colored coins",
  },
};

const statusStyles: Record<ServiceStatus, string> = {
  active: "bg-forest/10 text-forest",
  licensed: "bg-gold/15 text-accent-ink",
  future: "bg-line/60 text-muted",
};

export default function Services() {
  return (
    <section id="services" className="bg-ground py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="What We Do"
          title="A Full-Spectrum Commodities Business"
          intro="We're building across the entire commodities value chain. Here's what's active today, what's licensed and launching, and where we're headed next."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const href = servicePages[service.title];
            const image = serviceImages[service.title];
            const Wrapper = href ? "a" : "div";
            return (
              <Reveal key={service.title} delay={i * 80}>
                <Wrapper
                  {...(href ? { href } : {})}
                  className={`group flex h-full flex-col overflow-hidden rounded-[var(--radius-brand)] border border-line bg-surface shadow-[var(--shadow-sm)] ${
                    href ? "transition-shadow hover:shadow-[var(--shadow-md)]" : ""
                  }`}
                >
                  {image && (
                    <div className="relative aspect-[16/10] w-full flex-none">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        unoptimized
                        className={`object-cover ${
                          service.status === "future" ? "grayscale-[35%] opacity-80" : ""
                        }`}
                      />
                    </div>
                  )}
                  <div className="flex flex-1 flex-col p-6">
                    <span
                      className={`inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${statusStyles[service.status]}`}
                    >
                      {service.statusLabel}
                    </span>
                    <h3 className="mt-5 font-display text-lg font-semibold text-ink">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {service.desc}
                    </p>
                    {href && (
                      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-ink">
                        View details
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                          <path
                            d="M5 12h13M13 6l6 6-6 6"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    )}
                  </div>
                </Wrapper>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
