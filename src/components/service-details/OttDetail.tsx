import { motion } from "framer-motion";
import { Radio, Film, ChartBar as BarChart3, DollarSign, Smartphone, Tv, CreditCard, Globe } from "lucide-react";
import { SectionHeading } from "../SectionHeading";

const BLOCKS = [
  { icon: Radio, title: "Live Streaming", desc: "Ultra-low-latency live streaming with adaptive bitrate and global CDN." },
  { icon: Film, title: "Video on Demand", desc: "DRM-protected VOD library with smart recommendations and search." },
  { icon: BarChart3, title: "Analytics Dashboard", desc: "Real-time viewership, engagement, retention and revenue analytics." },
  { icon: DollarSign, title: "Monetization", desc: "SVOD, AVOD, TVOD and hybrid models with paywalls and ads." },
  { icon: Smartphone, title: "Multi-device", desc: "Web, iOS, Android, Smart TVs, Fire TV, Apple TV, Chromecast." },
  { icon: Globe, title: "Distribution", desc: "Global delivery with regional pricing, taxation and content rights." },
];

export function OttDetail() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-violet-950/30 via-ink-950 to-ink-950" />
      <div className="container-px relative">
        <SectionHeading
          eyebrow="OTT Platform"
          title={<>Netflix meets <span className="gradient-text">Disney+</span></>}
          subtitle="A dark, premium streaming experience — engineered for scale, monetization and every screen."
        />

        {/* video cards */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {["Featured", "Trending", "New Release", "Live Event"].map((t, i) => (
            <motion.div
              key={t}
              className="group relative aspect-[2/3] overflow-hidden rounded-2xl border border-white/10"
              style={{ background: `linear-gradient(160deg, hsl(${260 + i * 20}, 60%, 25%), hsl(${290 + i * 20}, 50%, 12%))` }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ scale: 1.04 }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute left-3 top-3 rounded-full bg-red-500/90 px-2.5 py-0.5 text-[10px] font-bold uppercase text-white">
                {i === 3 ? "Live" : "4K"}
              </div>
              <div className="absolute bottom-3 left-3 right-3">
                <div className="text-sm font-bold text-white">{t}</div>
                <div className="mt-1 h-1 w-2/3 rounded-full bg-white/30" />
                <div className="mt-1 h-1 w-1/3 rounded-full bg-white/20" />
              </div>
              <div className="absolute right-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white/15 opacity-0 backdrop-blur transition group-hover:opacity-100">
                <span className="ml-0.5 h-0 w-0 border-y-[6px] border-l-[9px] border-y-transparent border-l-white" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* capability blocks */}
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {BLOCKS.map((b, i) => (
            <motion.div
              key={b.title}
              className="card-glow group p-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              whileHover={{ y: -6 }}
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-violet-500/25 to-pink-500/25">
                <b.icon className="h-6 w-6 text-violet-300" />
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-white">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{b.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* revenue chart + monetization */}
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <motion.div className="card-glow p-7" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-2">
              <CreditCard className="h-5 w-5 text-violet-300" />
              <span className="font-display text-sm font-semibold text-white">Revenue Mix</span>
            </div>
            <div className="mt-6 space-y-4">
              {[
                { label: "Subscriptions (SVOD)", pct: 58, color: "#8b5cf6" },
                { label: "Advertising (AVOD)", pct: 27, color: "#ec4899" },
                { label: "Pay-per-view (TVOD)", pct: 15, color: "#22d3ee" },
              ].map((r) => (
                <div key={r.label}>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/70">{r.label}</span>
                    <span className="font-semibold text-white">{r.pct}%</span>
                  </div>
                  <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-white/10">
                    <motion.div className="h-full rounded-full" style={{ background: r.color }} initial={{ width: 0 }} whileInView={{ width: `${r.pct}%` }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.2 }} />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div className="card-glow p-7" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-2">
              <Tv className="h-5 w-5 text-violet-300" />
              <span className="font-display text-sm font-semibold text-white">Device Compatibility</span>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3">
              {["Web", "iOS", "Android", "Apple TV", "Fire TV", "Roku", "Chromecast", "Smart TV", "Xbox"].map((d, i) => (
                <motion.div
                  key={d}
                  className="rounded-xl border border-white/10 bg-white/5 p-3 text-center text-xs font-medium text-white/75"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  {d}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
