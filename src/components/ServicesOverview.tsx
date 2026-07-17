import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { SERVICES } from "../data/content";
import { SectionHeading } from "./SectionHeading";

export function ServicesOverview() {
  return (
    <section id="services" className="relative py-24">
      <div className="container-px">
        <SectionHeading
          eyebrow="Our Services"
          title={<>Four practices, <span className="gradient-text">one premium partner</span></>}
          subtitle="Each practice is a dedicated team of senior specialists — not a generalist agency doing everything halfway."
        />

        <div className="mt-14 space-y-6">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className={`card-glow group grid items-center gap-8 p-8 lg:grid-cols-2 ${
                i % 2 === 1 ? "lg:[direction:rtl]" : ""
              }`}
            >
              <div className="[direction:ltr]">
                <span
                  className="inline-flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{
                    background: `linear-gradient(135deg, ${s.color[0]}33, ${s.color[1]}33)`,
                    border: `1px solid ${s.color[0]}55`,
                  }}
                >
                  <span
                    className="h-5 w-5 rounded"
                    style={{ background: `linear-gradient(135deg, ${s.color[0]}, ${s.color[1]})` }}
                  />
                </span>
                <h3 className="mt-5 font-display text-2xl font-bold text-white sm:text-3xl">{s.name}</h3>
                <p className="mt-1 text-sm font-medium" style={{ color: s.color[0] }}>{s.tagline}</p>
                <p className="mt-4 text-sm leading-relaxed text-white/65">{s.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {s.features.slice(0, 4).map((f) => (
                    <span key={f} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                      {f}
                    </span>
                  ))}
                </div>
                <Link
                  to={`/services/${s.slug}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:gap-3"
                  style={{ color: s.color[0] }}
                >
                  Explore {s.name} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {/* visual */}
              <div className="[direction:ltr]">
                <ServiceVisual slug={s.slug} colors={s.color} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceVisual({ slug, colors }: { slug: string; colors: string[] }) {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-ink-900">
      <div
        className="absolute inset-0 opacity-40"
        style={{ background: `radial-gradient(circle at 30% 30%, ${colors[0]}55, transparent 60%), radial-gradient(circle at 70% 70%, ${colors[1]}55, transparent 60%)` }}
      />
      <div className="absolute inset-0 grid-bg opacity-50" />
      {slug === "digital-engineering" && <CodeVisual />}
      {slug === "ott-platform" && <OttVisual />}
      {slug === "ai-automation" && <AiVisual />}
      {slug === "intellectual-property" && <IpVisual />}
    </div>
  );
}

function CodeVisual() {
  return (
    <div className="absolute inset-0 p-6 font-mono text-xs leading-relaxed text-white/70">
      <div className="rounded-xl glass p-4">
        <div className="mb-3 flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
        </div>
        <motion.div
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div><span className="text-electric-400">const</span> app = <span className="text-violet-400">build</span>(&#123;</div>
          <div className="pl-4">scale: <span className="text-teal-400">"millions"</span>,</div>
          <div className="pl-4">stack: [<span className="text-teal-400">"React"</span>, <span className="text-teal-400">"Node"</span>],</div>
          <div className="pl-4">ship: <span className="text-electric-400">true</span></div>
          <div>&#125;);</div>
        </motion.div>
      </div>
    </div>
  );
}

function OttVisual() {
  return (
    <div className="absolute inset-0 grid grid-cols-2 gap-3 p-5">
      {[0, 1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-violet-500/20 to-pink-500/20"
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }}
        >
          <div className="absolute bottom-2 left-2 right-2">
            <div className="h-1.5 w-3/4 rounded-full bg-white/30" />
            <div className="mt-1 h-1 w-1/2 rounded-full bg-white/20" />
          </div>
          <div className="absolute right-2 top-2 grid h-7 w-7 place-items-center rounded-full bg-white/10 backdrop-blur">
            <span className="h-0 w-0 border-y-4 border-l-[6px] border-y-transparent border-l-white" />
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function AiVisual() {
  const nodes = [
    { x: 50, y: 20 }, { x: 25, y: 50 }, { x: 75, y: 50 }, { x: 35, y: 80 }, { x: 65, y: 80 },
  ];
  return (
    <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100">
      {nodes.slice(1).map((n, i) => (
        <motion.line
          key={i}
          x1={50} y1={20} x2={n.x} y2={n.y}
          stroke="#22d3ee" strokeWidth="0.4"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
        />
      ))}
      <motion.line x1={25} y1={50} x2={35} y2={80} stroke="#14b8a6" strokeWidth="0.3"
        animate={{ opacity: [0.1, 0.5, 0.1] }} transition={{ duration: 2.5, repeat: Infinity }} />
      <motion.line x1={75} y1={50} x2={65} y2={80} stroke="#14b8a6" strokeWidth="0.3"
        animate={{ opacity: [0.1, 0.5, 0.1] }} transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }} />
      {nodes.map((n, i) => (
        <motion.circle
          key={i} cx={n.x} cy={n.y} r={i === 0 ? 3 : 2}
          fill={i === 0 ? "#22d3ee" : "#14b8a6"}
          animate={{ r: [i === 0 ? 3 : 2, i === 0 ? 4 : 3, i === 0 ? 3 : 2] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
        />
      ))}
    </svg>
  );
}

function IpVisual() {
  return (
    <div className="absolute inset-0 grid place-items-center">
      <motion.div
        className="relative"
        animate={{ rotate: [0, 5, -5, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <div className="grid h-28 w-28 place-items-center rounded-2xl border border-amber-400/40 bg-gradient-to-br from-amber-500/20 to-violet-500/20 backdrop-blur">
          <svg viewBox="0 0 24 24" className="h-14 w-14 text-amber-300" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 2l3 6 6 .5-4.5 4 1.5 6L12 15l-6 3.5 1.5-6L3 8.5 9 8z" />
          </svg>
        </div>
      </motion.div>
      {["Patent", "Trademark", "FTO", "Prior Art"].map((t, i) => (
        <motion.span
          key={t}
          className="absolute rounded-full glass px-3 py-1 text-xs text-white/70"
          style={{ top: `${[15, 80, 30, 70][i]}%`, left: `${[20, 25, 75, 70][i]}%` }}
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
        >
          {t}
        </motion.span>
      ))}
    </div>
  );
}
