import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";
import { services, type ServiceStatus } from "@/lib/content";

// Cocoa is the only service with a live dedicated page today. As gold (and
// later services) come online, add their slug here and drop in a matching
// /app/<slug>/page.tsx + content.<slug>.ts — see content.cocoa.ts for the
// pattern to copy.
const servicePages: Record<string, string> = {
  "Agricultural Commodities Trading — Cocoa": "/cocoa",
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
            const Wrapper = href ? "a" : "div";
            return (
              <Reveal key={service.title} delay={i * 80}>
                <Wrapper
                  {...(href ? { href } : {})}
                  className={`group flex h-full flex-col rounded-[var(--radius-brand)] border border-line bg-surface p-6 shadow-[var(--shadow-sm)] ${
                    href ? "transition-shadow hover:shadow-[var(--shadow-md)]" : ""
                  }`}
                >
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
                </Wrapper>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
