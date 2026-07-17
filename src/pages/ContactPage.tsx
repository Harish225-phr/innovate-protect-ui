import { Contact } from "../components/Contact";
import { AuroraBackground } from "../components/AuroraBackground";
import { SectionHeading } from "../components/SectionHeading";

export function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-36 pb-8">
        <AuroraBackground variant="default" />
        <div className="container-px relative">
          <SectionHeading
            eyebrow="Get in Touch"
            title={<>Let's build <span className="gradient-text">something great</span></>}
            subtitle="Whether you're building a product, scaling a platform or protecting an idea — we'd love to hear from you."
          />
        </div>
      </section>
      <Contact />
    </>
  );
}
