import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp } from "lucide-react";
import { CASE_STUDIES } from "../data/content";
import { SectionHeading } from "./SectionHeading";

export function CaseStudies() {
  return (
    <section className="relative py-24">
      <div className="container-px">
        <SectionHeading
          eyebrow="Case Studies"
          title={<>Real results, <span className="gradient-text">real numbers</span></>}
          subtitle="A look at the measurable impact we've delivered across our practices."
        />
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {CASE_STUDIES.map((c, i) => (
            <motion.div
              key={c.title}
              className="card-glow group relative overflow-hidden p-7"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <span className="inline-flex items-center gap-1.5 rounded-full border border-electric-400/30 bg-electric-400/10 px-3 py-1 text-xs font-medium text-electric-300">
                {c.tag}
              </span>
              <h3 className="mt-4 font-display text-xl font-bold text-white">{c.title}</h3>
              <div className="mt-4 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-teal-400" />
                <span className="font-display text-2xl font-bold gradient-text">{c.metric}</span>
              </div>
              <div className="mt-5 space-y-2 text-sm">
                <div className="flex gap-2">
                  <span className="shrink-0 text-white/40">Before</span>
                  <span className="text-white/70">{c.before}</span>
                </div>
                <div className="flex gap-2">
                  <span className="shrink-0 text-electric-400">After</span>
                  <span className="text-white/85">{c.after}</span>
                </div>
              </div>
              <ArrowUpRight className="absolute right-6 top-6 h-5 w-5 text-white/30 transition-all duration-300 group-hover:text-electric-400 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
