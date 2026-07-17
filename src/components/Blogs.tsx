import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { BLOGS } from "../data/content";
import { SectionHeading } from "./SectionHeading";

const CATS = ["All", "OTT", "AI", "IP"];

export function Blogs() {
  const [cat, setCat] = useState("All");
  const filtered = cat === "All" ? BLOGS : BLOGS.filter((b) => b.category === cat);

  return (
    <section className="relative py-24">
      <div className="container-px">
        <SectionHeading
          eyebrow="Insights"
          title={<>Ideas worth <span className="gradient-text">reading</span></>}
          subtitle="Practical thinking from our engineers, designers and IP specialists."
        />

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {CATS.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
                cat === c
                  ? "bg-gradient-to-r from-electric-500 to-indigo-500 text-white shadow-glow"
                  : "border border-white/10 bg-white/5 text-white/65 hover:text-white"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {filtered.map((b, i) => (
            <motion.article
              key={b.title}
              className={`card-glow group p-6 ${i === 0 && cat === "All" ? "md:col-span-2 lg:col-span-2" : ""}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
            >
              <div className="flex items-center gap-2 text-xs text-white/50">
                <span className="rounded-full bg-electric-400/15 px-2.5 py-0.5 font-medium text-electric-300">{b.category}</span>
                <span>{b.date}</span>
              </div>
              <h3 className={`mt-4 font-display font-bold text-white ${i === 0 && cat === "All" ? "text-2xl" : "text-lg"}`}>
                {b.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{b.excerpt}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-electric-400 transition-all group-hover:gap-2.5">
                Read more <ArrowUpRight className="h-4 w-4" />
              </span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
