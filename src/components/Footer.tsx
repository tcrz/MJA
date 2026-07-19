import Logo from "./Logo";
import { brand, nav } from "@/lib/content";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-forest-deep text-cream/70">
      <div className="container-x grid gap-10 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo variant="light" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/60">
            {brand.slogan}
          </p>
          <p className="mt-4 text-xs uppercase tracking-[0.24em] text-gold-light">
            {brand.tagline}
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-cream">
            Explore
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-cream/60 transition-colors hover:text-gold-light"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-cream">
            Contact
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-cream/60">
            <li>{brand.location}</li>
            <li>
              <a href={`mailto:${brand.email}`} className="hover:text-gold-light">
                {brand.email}
              </a>
            </li>
            <li>{brand.phone}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-cream/50 sm:flex-row">
          <span>
            © {year} {brand.full}. COCOBOD-licensed cocoa buyer, {brand.location}.
          </span>
          <span>Built for a legacy of excellence.</span>
        </div>
      </div>
    </footer>
  );
}
