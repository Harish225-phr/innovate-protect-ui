import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { FAQS } from "../data/content";
import { SectionHeading } from "./SectionHeading";

export function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="relative py-24">
      <div className="container-px">
        <SectionHeading
          eyebrow="FAQ"
          title={<>Questions, <span className="gradient-text">answered</span></>}
        />
        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {FAQS.map((f, i) => (
            <div key={f.q} className="card-glow overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                className="flex w-full items-center justify-between gap-4 p-5 text-left"
              >
                <span className="font-display text-base font-semibold text-white sm:text-lg">{f.q}</span>
                <motion.span animate={{ rotate: open === i ? 45 : 0 }} transition={{ duration: 0.3 }}>
                  <Plus className="h-5 w-5 shrink-0 text-electric-400" />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-sm leading-relaxed text-white/60">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
