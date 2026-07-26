import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Model from "@/components/sections/Model";
import Roadmap from "@/components/sections/Roadmap";
import Pillars from "@/components/sections/Pillars";
import Impact from "@/components/sections/Impact";
import Invest from "@/components/sections/Invest";
import Contact from "@/components/sections/Contact";
import * as cocoa from "@/lib/content.cocoa";

export const metadata: Metadata = {
  title: {
    absolute: "MJ Adom Cocoa Trading — We don't just buy cocoa, we build futures",
  },
  description:
    "A COCOBOD-licensed cocoa buying company in Ghana, built on ethical sourcing, quality, and farmer partnership — from a license today to a legacy tomorrow.",
};

// Dedicated page for MJ Adom's active cocoa trading business, linked from the
// homepage's Services section. Reuses the shared section components with
// cocoa-specific content (content.cocoa.ts) instead of the broad corporate
// content used on the homepage. Copy this file + content.cocoa.ts's shape
// for the next service page (e.g. /gold) once that licence is operating.
export default function CocoaPage() {
  return (
    <>
      <Nav nav={cocoa.nav} brand={cocoa.brand} logoSubtext="Cocoa Trading" />
      <main>
        <Hero hero={cocoa.hero} financials={cocoa.financials} />
        <About about={cocoa.about} vision={cocoa.vision} />
        <Model model={cocoa.model} />
        <Roadmap roadmap={cocoa.roadmap} intro={cocoa.roadmapIntro} />
        <Pillars pillars={cocoa.pillars} intro={cocoa.pillarsIntro} />
        <Impact impact={cocoa.impact} advantages={cocoa.advantages} />
        <Invest formula={cocoa.formula} />
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
