type LogoProps = {
  /** "light" renders the wordmark in cream (for dark backgrounds) */
  variant?: "ink" | "light";
  className?: string;
};

/**
 * CSS/SVG brand lockup — a gold cocoa-leaf mark beside the wordmark.
 * Placeholder for a supplied logo file; swap the mark + keep the layout.
 */
export default function Logo({ variant = "ink", className = "" }: LogoProps) {
  const wordColor = variant === "light" ? "text-cream" : "text-ink";
  // Subtext gold must clear AA on its background: a bright gold on dark
  // surfaces (light variant), and the darker accent-ink on light ones —
  // plain --accent falls to ~3:1 on cream.
  const subColor = variant === "light" ? "text-gold-light" : "text-accent-ink";
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <LeafMark className="h-9 w-9 flex-none" />
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[1.35rem] font-semibold tracking-[0.14em] ${wordColor}`}
        >
          MJ ADOM
        </span>
        <span className={`mt-1 text-[0.6rem] font-semibold uppercase tracking-[0.4em] ${subColor}`}>
          Cocoa Trading
        </span>
      </span>
    </span>
  );
}

export function LeafMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className={className}>
      <path d="M24 5C17 12 15 20 24 30C33 20 31 12 24 5Z" fill="url(#leaf-g)" />
      <path
        d="M24 30C24 30 20 22 12 20C13 30 18 35 24 37C30 35 35 30 36 20C28 22 24 30 24 30Z"
        fill="url(#leaf-g)"
        opacity="0.82"
      />
      <path
        d="M24 30V43"
        stroke="#1B5E34"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient
          id="leaf-g"
          x1="12"
          y1="6"
          x2="36"
          y2="37"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E6C566" />
          <stop offset="1" stopColor="#B8871F" />
        </linearGradient>
      </defs>
    </svg>
  );
}
