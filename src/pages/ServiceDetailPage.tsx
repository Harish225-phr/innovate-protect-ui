import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { ArrowRight, Check, ArrowLeft } from "lucide-react";
import { SERVICES } from "../data/content";
import { AuroraBackground } from "../components/AuroraBackground";
import { SectionHeading } from "../components/SectionHeading";
import { Contact } from "../components/Contact";
import { DigitalEngineeringDetail } from "../components/service-details/DigitalEngineeringDetail";
import { OttDetail } from "../components/service-details/OttDetail";
import { AiDetail } from "../components/service-details/AiDetail";
import { IpDetail } from "../components/service-details/IpDetail";

export function ServiceDetailPage() {
  const { slug } = useParams();
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return (
      <section className="relative pt-40 pb-20 text-center">
        <AuroraBackground />
        <div className="container-px relative">
          <h1 className="font-display text-3xl font-bold text-white">Service not found</h1>
          <Link to="/services" className="btn-ghost mt-6 inline-flex">Back to Services</Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="relative overflow-hidden pt-36 pb-16">
        <AuroraBackground variant="default" />
        <div className="container-px relative">
          <Link to="/services" className="inline-flex items-center gap-2 text-sm text-white/60 transition hover:text-white">
            <ArrowLeft className="h-4 w-4" /> All Services
          </Link>
          <div className="mt-6 max-w-3xl">
            <span className="eyebrow" style={{ borderColor: `${service.color[0]}55`, color: service.color[0] }}>{service.name}</span>
            <motion.h1
              className="mt-5 font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {service.tagline}
            </motion.h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg">{service.description}</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {service.features.map((f) => (
                <span key={f} className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/75">
                  <Check className="h-3.5 w-3.5" style={{ color: service.color[0] }} /> {f}
                </span>
              ))}
            </div>
            <Link to="/contact" className="btn-primary mt-8">Let's Talk <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      {slug === "digital-engineering" && <DigitalEngineeringDetail />}
      {slug === "ott-platform" && <OttDetail />}
      {slug === "ai-automation" && <AiDetail />}
      {slug === "intellectual-property" && <IpDetail />}

      <Contact />
    </>
  );
}
