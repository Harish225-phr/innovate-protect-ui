import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "../data/content";
import { AuroraBackground } from "../components/AuroraBackground";
import { SectionHeading } from "../components/SectionHeading";
import { Contact } from "../components/Contact";

export function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-36 pb-16">
        <AuroraBackground variant="default" />
        <div className="container-px relative">
          <SectionHeading
            eyebrow="Our Practices"
            title={<>Four practices, <span className="gradient-text">one partner</span></>}
            subtitle="Senior specialists across digital engineering, OTT, AI and intellectual property."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {SERVICES.map((s, i) => (
              <motion.div
                key={s.slug}
                className="card-glow group p-7"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl" style={{ background: `linear-gradient(135deg, ${s.color[0]}33, ${s.color[1]}33)`, border: `1px solid ${s.color[0]}55` }}>
                  <span className="h-5 w-5 rounded" style={{ background: `linear-gradient(135deg, ${s.color[0]}, ${s.color[1]})` }} />
                </span>
                <h3 className="mt-5 font-display text-2xl font-bold text-white">{s.name}</h3>
                <p className="mt-1 text-sm font-medium" style={{ color: s.color[0] }}>{s.tagline}</p>
                <p className="mt-4 text-sm leading-relaxed text-white/65">{s.description}</p>
                <Link to={`/services/${s.slug}`} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:gap-3" style={{ color: s.color[0] }}>
                  Explore {s.name} <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Contact />
    </>
  );
}
