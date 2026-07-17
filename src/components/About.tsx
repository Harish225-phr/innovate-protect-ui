import { motion } from "framer-motion";
import { Target, Eye, Gem, Compass } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const PILLARS = [
  { icon: Compass, title: "Our Story", text: "ContriveInsight began as a patent services firm and grew into a full technology company — engineering software, OTT platforms and AI systems while protecting the ideas behind them." },
  { icon: Target, title: "Our Mission", text: "To help businesses grow by building technology that is beautiful, scalable and intelligent — and by protecting the intellectual property that makes them unique." },
  { icon: Eye, title: "Our Vision", text: "To be the world's most trusted partner for companies building the future — where software, AI and intellectual property converge." },
  { icon: Gem, title: "Our Values", text: "Craftsmanship, transparency, ownership and curiosity. We sweat the details, tell the truth, own outcomes and stay endlessly curious." },
];

export function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="container-px">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="About Us"
              title={<>A technology company <span className="gradient-text">built for the future</span></>}
              subtitle="From patents to platforms, from ideas to intelligence — we are the engineering partner ambitious teams trust."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {PILLARS.map((p, i) => (
                <motion.div
                  key={p.title}
                  className="card-glow p-5"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <p.icon className="h-6 w-6 text-electric-400" />
                  <h4 className="mt-3 font-display text-base font-bold text-white">{p.title}</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/60">{p.text}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* right: animated illustration */}
          <motion.div
            className="relative mx-auto aspect-square w-full max-w-md"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-electric-500/20 via-indigo-500/10 to-violet-500/20 blur-2xl" />
            <div className="absolute inset-8 rounded-full border border-white/10" />
            <motion.div
              className="absolute inset-16 rounded-full border border-white/10"
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            >
              <span className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-electric-400 shadow-glow" />
            </motion.div>
            <motion.div
              className="absolute inset-24 rounded-full border border-white/10"
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
              <span className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-violet-400 shadow-glow" />
            </motion.div>
            <div className="absolute inset-0 grid place-items-center">
              <div className="grid h-24 w-24 place-items-center rounded-3xl bg-gradient-to-br from-electric-500 to-indigo-500 shadow-glow">
                <span className="font-display text-3xl font-bold text-white">CI</span>
              </div>
            </div>
            {["Code", "AI", "OTT", "IP"].map((t, i) => (
              <motion.span
                key={t}
                className="absolute rounded-full glass px-3 py-1 text-xs font-medium text-white/80"
                style={{
                  top: `${[8, 8, 88, 88][i]}%`,
                  left: `${[12, 78, 12, 78][i]}%`,
                }}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: i * 0.6 }}
              >
                {t}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
