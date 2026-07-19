import Reveal from "../Reveal";
import { formula } from "@/lib/content";

const objectives = [
  "Targeting profitability from Year 1",
  "Grow turnover by 25–35% annually",
  "Increase volumes steadily",
  "Maintain strong cash flow",
  "Reinvest profits for growth",
  "Build strong financial reserves",
];

export default function Invest() {
  return (
    <section id="invest" className="relative overflow-hidden bg-forest-deep py-24 text-cream md:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(55% 45% at 85% 100%, rgba(184,135,31,0.2), transparent 60%)",
        }}
      />
      <div className="container-x relative">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <h2 className="text-[clamp(1.8rem,3.8vw,2.7rem)] text-cream">
              A disciplined plan,{" "}
              <span className="gold-text">built to compound</span>
            </h2>
            <p className="mt-4 max-w-[46ch] text-lg text-cream/75">
              Financially conservative, growth-oriented, and built to compound —
              MJ Adom is structured to grow steadily with the partners who back
              it early.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <ul className="grid gap-3 sm:grid-cols-2">
              {objectives.map((obj) => (
                <li
                  key={obj}
                  className="flex items-start gap-3 rounded-xl border border-gold-light/15 bg-white/[0.04] px-4 py-3.5"
                >
                  <span className="mt-0.5 grid h-6 w-6 flex-none place-items-center rounded-full bg-gold-light/20 text-gold-light">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12l4.5 4.5L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-[0.95rem] leading-snug text-cream/90">
                    {obj}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Formula for Success — their thesis as an equation */}
        <Reveal delay={80}>
          <div className="mt-20">
            <h3 className="text-center font-display text-lg font-semibold text-gold-light">
              Our Formula for Success
            </h3>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-6">
              {formula.terms.map((term, i) => (
                <div key={term.big} className="flex items-center gap-x-5">
                  <div className="max-w-[130px] text-center">
                    <span className="block text-xs uppercase tracking-wide text-cream/55">
                      {term.small}
                    </span>
                    <span className="mt-1 block font-display text-lg font-semibold text-cream">
                      {term.big}
                    </span>
                  </div>
                  <span
                    aria-hidden="true"
                    className="font-display text-3xl text-gold-light"
                  >
                    {i < formula.terms.length - 1 ? "+" : "="}
                  </span>
                </div>
              ))}
              <div className="max-w-[150px] text-center">
                <span className="block text-xs uppercase tracking-wide text-gold-light/70">
                  {formula.result.small}
                </span>
                <span className="mt-1 block font-display text-xl font-semibold gold-text">
                  {formula.result.big}
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
