import { motion } from "framer-motion";
import { Search, FileSearch, Ban, Flag, Shield, AlertTriangle, Scale } from "lucide-react";
import { SectionHeading } from "../SectionHeading";

const SERVICES_IP = [
  { icon: Search, title: "Patent Search", desc: "Comprehensive patentability searches across global databases." },
  { icon: FileSearch, title: "Prior Art Search", desc: "Identify existing art to assess novelty and inventive step." },
  { icon: Ban, title: "Invalidity Search", desc: "Uncover prior art to challenge patent validity." },
  { icon: Flag, title: "Freedom to Operate (FTO)", desc: "Clear your product launch against in-force patents." },
  { icon: Shield, title: "Trademark Search", desc: "Protect your brand with thorough clearance searches." },
  { icon: AlertTriangle, title: "Infringement Analysis", desc: "Assess claims, map features and build your position." },
];

export function IpDetail() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-amber-950/15 via-ink-950 to-ink-950" />
      <div className="container-px relative">
        <SectionHeading
          eyebrow="Intellectual Property"
          title={<>Luxury legal-tech for <span className="gradient-text">your ideas</span></>}
          subtitle="Patent, trademark and IP services backed by deep technical expertise."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES_IP.map((s, i) => (
            <motion.div
              key={s.title}
              className="card-glow group p-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              whileHover={{ y: -6 }}
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-amber-500/25 to-violet-500/25">
                <s.icon className="h-6 w-6 text-amber-300" />
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* process timeline */}
        <motion.div
          className="card-glow mt-12 p-7"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-2">
            <Scale className="h-5 w-5 text-amber-300" />
            <span className="font-display text-sm font-semibold text-white">IP Engagement Process</span>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { step: "01", title: "Intake", desc: "Understand your invention, market and goals." },
              { step: "02", title: "Search", desc: "Deep search across global patent & trademark databases." },
              { step: "03", title: "Analyze", desc: "Detailed analysis with mapped claims and risk assessment." },
              { step: "04", title: "Report", desc: "Clear, actionable report with recommendations." },
            ].map((p, i) => (
              <motion.div
                key={p.step}
                className="relative rounded-xl border border-amber-400/20 bg-amber-400/5 p-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
              >
                <span className="font-display text-2xl font-bold text-amber-300/40">{p.step}</span>
                <h4 className="mt-1 font-display text-base font-bold text-white">{p.title}</h4>
                <p className="mt-1 text-xs leading-relaxed text-white/55">{p.desc}</p>
                {i < 3 && <span className="absolute -right-2 top-1/2 hidden -translate-y-1/2 text-amber-400/40 lg:block">→</span>}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
