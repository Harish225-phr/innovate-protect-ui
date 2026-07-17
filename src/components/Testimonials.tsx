import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { TESTIMONIALS } from "../data/content";
import { SectionHeading } from "./SectionHeading";

export function Testimonials() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % TESTIMONIALS.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative py-24">
      <div className="container-px">
        <SectionHeading
          eyebrow="Testimonials"
          title={<>Loved by <span className="gradient-text">founders & teams</span></>}
        />
        <div className="relative mx-auto mt-14 max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              className="card-glow relative p-8 sm:p-10"
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -24, scale: 0.98 }}
              transition={{ duration: 0.5 }}
            >
              <Quote className="h-10 w-10 text-electric-400/40" />
              <div className="mt-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="mt-4 text-lg leading-relaxed text-white/85 sm:text-xl">
                "{TESTIMONIALS[idx].quote}"
              </p>
              <div className="mt-6 flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-electric-500 to-indigo-500 font-display font-bold text-white">
                  {TESTIMONIALS[idx].name.charAt(0)}
                </span>
                <div>
                  <div className="font-semibold text-white">{TESTIMONIALS[idx].name}</div>
                  <div className="text-sm text-white/55">{TESTIMONIALS[idx].role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-6 flex justify-center gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={`h-2 rounded-full transition-all ${i === idx ? "w-8 bg-electric-400" : "w-2 bg-white/20"}`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
