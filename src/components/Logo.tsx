import Image from "next/image";

type LogoProps = {
  /** "light" renders the wordmark in cream (for dark backgrounds) */
  variant?: "ink" | "light";
  className?: string;
  /** Small uppercase line under the wordmark, e.g. "Commodities & Investments" or "Cocoa Trading" */
  subtext?: string;
};

export default function Logo({
  variant = "ink",
  className = "",
  subtext = "Commodities & Investments",
}: LogoProps) {
  const wordColor = variant === "light" ? "text-cream" : "text-ink";
  // Subtext gold must clear AA on its background: a bright gold on dark
  // surfaces (light variant), and the darker accent-ink on light ones —
  // plain --accent falls to ~3:1 on cream.
  const subColor = variant === "light" ? "text-gold-light" : "text-accent-ink";
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      {/* The source PNG has an opaque white background (no alpha), so it's
          wrapped in its own white chip — reads as an intentional badge on
          the dark forest backgrounds instead of a stray white square. */}
      <span className="grid h-9 w-9 flex-none place-items-center overflow-hidden rounded-full bg-white p-1 shadow-sm">
        <Image
          src="/mja-logo.png"
          alt=""
          width={64}
          height={64}
          className="h-full w-full object-contain"
        />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[1.35rem] font-semibold tracking-[0.14em] ${wordColor}`}
        >
          MJ ADOM
        </span>
        <span className={`mt-1 text-[0.6rem] font-semibold uppercase tracking-[0.4em] ${subColor}`}>
          {subtext}
        </span>
      </span>
    </span>
  );
}
