import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";
import { model } from "@/lib/content";

const stepIcons = [FarmerIcon, TruckIcon, ShieldIcon, WarehouseIcon, ExportIcon];

export default function Model() {
  return (
    <section id="model" className="bg-ground py-24 md:py-32">
      <div className="container-x">
        <SectionHeading title={model.heading} intro={model.intro} />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {model.steps.map((step, i) => {
            const Icon = stepIcons[i];
            return (
              <Reveal key={step.title} delay={i * 90}>
                <div className="group relative flex h-full flex-col rounded-[var(--radius-brand)] border border-line bg-surface p-6 shadow-[var(--shadow-sm)]">
                  <div className="flex items-center justify-between">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-forest/10 text-forest">
                      <Icon />
                    </span>
                    <span className="font-display text-2xl font-semibold text-line tnum">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {step.desc}
                  </p>
                  {i < model.steps.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="absolute -right-2 top-1/2 z-10 hidden -translate-y-1/2 text-gold lg:block"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
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
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* --- Inline supply-chain icons (stroke = currentColor) --- */
function FarmerIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="1.7" />
      <path d="M5 20c0-3.6 3.1-6 7-6s7 2.4 7 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}
function TruckIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M3 6h11v9H3zM14 9h4l3 3v3h-7z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <circle cx="7" cy="18" r="1.8" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17" cy="18" r="1.8" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}
function ShieldIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M12 3l7 3v5c0 4.4-3 7.7-7 9-4-1.3-7-4.6-7-9V6z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function WarehouseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M3 10l9-5 9 5v10H3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M8 20v-6h8v6M8 16h8" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
function ExportIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M4 15c1.6 1.4 3.3 1.4 5 0s3.4-1.4 5 0 3.4 1.4 5 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M6 13V7l9 3-9 3zM12 9V4" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
