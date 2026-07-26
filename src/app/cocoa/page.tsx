import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Model from "@/components/sections/Model";
import Pillars, {
  SeedIcon,
  BadgeIcon,
  GearIcon,
  PeopleIcon,
  GrowthIcon,
} from "@/components/sections/Pillars";
import Contact from "@/components/sections/Contact";
import * as cocoa from "@/lib/content.cocoa";

const description =
  "A COCOBOD-licensed cocoa buying company in Ghana, built on ethical sourcing, quality, and farmer partnership — from a license today to a legacy tomorrow.";

export const metadata: Metadata = {
  title: {
    absolute: "MJ Adom Cocoa Trading — We don't just buy cocoa, we build futures",
  },
  description,
  openGraph: {
    title: "MJ Adom Cocoa Trading",
    description,
  },
};

const heroImage = {
  src: "https://images.unsplash.com/photo-1663904459101-78345f6b8300?auto=format&fit=crop&w=2400&q=75",
  alt: "",
};

// cocoa.pillars leads with "Farmer-Centered Sourcing" (unlike the homepage's
// "Licensing & Compliance" lead), so both the icon order and lead photo are
// overridden to match.
const pillarsIcons = [SeedIcon, BadgeIcon, GearIcon, PeopleIcon, GrowthIcon];
const pillarsImage = {
  src: "https://images.unsplash.com/photo-1722699350336-b22f6a263499?auto=format&fit=crop&w=1200&q=75",
  alt: "A farmer's hand reaching up to harvest a cocoa pod straight from the branch",
};

// Dedicated page for MJ Adom's active cocoa trading business, linked from the
// homepage's Services section. This is a service detail page, not a second
// landing page: it keeps the hero (the one marketing moment worth repeating),
// then goes straight into what the service is, how it works, and how it's
// compliant — no roadmap/impact/investment-pitch sections, since those are
// company-level narrative that already lives on the homepage. Copy this
// file + content.cocoa.ts's shape for the next service page (e.g. /gold)
// once that licence is operating.
export default function CocoaPage() {
  return (
    <>
      <Nav
        nav={cocoa.nav}
        brand={cocoa.brand}
        logoSubtext="Cocoa Trading"
        backHref="/"
      />
      <main>
        <Hero hero={cocoa.hero} image={heroImage} />
        <About about={cocoa.about} />
        <Model model={cocoa.model} />
        <Pillars
          pillars={cocoa.pillars}
          intro={cocoa.pillarsIntro}
          icons={pillarsIcons}
          image={pillarsImage}
        />
        <Contact />
      </main>
      <Footer
        brand={cocoa.brand}
        nav={cocoa.nav}
        footerNote={cocoa.footerNote}
        logoSubtext="Cocoa Trading"
      />
    </>
  );
}
