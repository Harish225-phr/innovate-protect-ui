import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { WHY_CHOOSE } from "../data/content";
import { SectionHeading } from "./SectionHeading";

export function WhyChooseUs() {
  return (
    <section className="relative py-24">
      <div className="container-px">
        <SectionHeading
          eyebrow="Why Choose Us"
          title={<>The difference is <span className="gradient-text">in the details</span></>}
          subtitle="We're not a body shop. We're a senior team that treats your product like our own."
        />
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {WHY_CHOOSE.map((w, i) => (
            <motion.div
              key={w.title}
              className="card-glow group relative overflow-hidden p-7"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              whileHover={{ y: -6 }}
            >
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-electric-500/10 to-indigo-500/10 blur-xl transition-opacity duration-500 group-hover:opacity-100 opacity-50" />
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-electric-500/30 to-indigo-500/30">
                  <Check className="h-4 w-4 text-electric-400" />
                </span>
                <h3 className="font-display text-lg font-bold text-white">{w.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-white/60">{w.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
