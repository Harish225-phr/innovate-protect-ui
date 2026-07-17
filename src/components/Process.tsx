import { motion } from "framer-motion";
import { PROCESS_STEPS } from "../data/content";
import { SectionHeading } from "./SectionHeading";

export function Process() {
  return (
    <section id="process" className="relative py-24">
      <div className="container-px">
        <SectionHeading
          eyebrow="Our Process"
          title={<>From idea to launch — <span className="gradient-text">engineered with precision</span></>}
          subtitle="Seven steps, one continuous loop of craftsmanship. Every step is transparent, demoable and accountable."
        />

        <div className="relative mt-16">
          {/* connecting line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-electric-400/0 via-indigo-500/40 to-violet-500/0 lg:block" />

          <div className="space-y-6 lg:space-y-0">
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={step.name}
                className={`relative flex flex-col gap-4 lg:flex-row lg:items-center ${i % 2 === 0 ? "" : "lg:flex-row-reverse"}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <div className="lg:w-1/2 lg:px-12">
                  <div className="card-glow p-6">
                    <div className="flex items-center gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-electric-500 to-indigo-500 font-display text-sm font-bold text-white shadow-glow">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-display text-lg font-bold text-white">{step.name}</h3>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-white/60">{step.desc}</p>
                  </div>
                </div>
                <div className="relative hidden lg:block lg:w-1/2">
                  <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric-400 shadow-glow">
                    <motion.span
                      className="absolute inset-0 rounded-full bg-electric-400"
                      animate={{ scale: [1, 2.5], opacity: [0.6, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
