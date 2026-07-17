import { Hero } from "../components/Hero";
import { WhatWeDo } from "../components/WhatWeDo";
import { About } from "../components/About";
import { ServicesOverview } from "../components/ServicesOverview";
import { Industries } from "../components/Industries";
import { Process } from "../components/Process";
import { WhyChooseUs } from "../components/WhyChooseUs";
import { Testimonials } from "../components/Testimonials";
import { CaseStudies } from "../components/CaseStudies";
import { Blogs } from "../components/Blogs";
import { FAQ } from "../components/FAQ";
import { Contact } from "../components/Contact";
import { AuroraBackground } from "../components/AuroraBackground";

export function HomePage() {
  return (
    <>
      <div className="relative">
        <AuroraBackground variant="hero" />
        <Hero />
      </div>
      <WhatWeDo />
      <About />
      <ServicesOverview />
      <Industries />
      <Process />
      <WhyChooseUs />
      <Testimonials />
      <CaseStudies />
      <Blogs />
      <FAQ />
      <Contact />
    </>
  );
}
