import { motion } from "framer-motion";
import { INDUSTRIES } from "../data/content";
import { Icon } from "./Icon";
import { SectionHeading } from "./SectionHeading";

export function Industries() {
  return (
    <section id="industries" className="relative py-24">
      <div className="container-px">
        <SectionHeading
          eyebrow="Industries"
          title={<>Built for <span className="gradient-text">every industry</span></>}
          subtitle="Deep domain expertise across ten industries — we speak your language and understand your constraints."
        />
        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {INDUSTRIES.map((ind, i) => (
            <motion.div
              key={ind.name}
              className="card-glow group relative flex flex-col items-center gap-3 p-6 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: (i % 5) * 0.06 }}
              whileHover={{ y: -8, scale: 1.03 }}
            >
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-electric-500/20 to-indigo-500/20 transition-all duration-500 group-hover:from-electric-500/40 group-hover:to-violet-500/40 group-hover:shadow-glow">
                <Icon name={ind.icon} className="h-6 w-6 text-white" />
              </div>
              <span className="text-sm font-semibold text-white/85">{ind.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
