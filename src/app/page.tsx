import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Vision from "@/components/sections/Vision";
import Model from "@/components/sections/Model";
import Roadmap from "@/components/sections/Roadmap";
import Pillars from "@/components/sections/Pillars";
import Impact from "@/components/sections/Impact";
import Invest from "@/components/sections/Invest";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Vision />
        <Model />
        <Roadmap />
        <Pillars />
        <Impact />
        <Invest />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
