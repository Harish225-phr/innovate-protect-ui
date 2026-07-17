import { motion } from "framer-motion";
import { Brain, Workflow, Bot, ChartLine as LineChart, Zap, Cpu } from "lucide-react";
import { SectionHeading } from "../SectionHeading";

const CARDS = [
  { icon: Brain, title: "Machine Learning", desc: "Custom models for classification, forecasting, vision and NLP." },
  { icon: Workflow, title: "Workflow Automation", desc: "Automate repetitive processes end-to-end with intelligent routing." },
  { icon: Bot, title: "AI Agents & Chatbots", desc: "Conversational agents that resolve tickets and take actions." },
  { icon: LineChart, title: "Predictive Analytics", desc: "Turn historical data into forward-looking decisions." },
  { icon: Zap, title: "Process Optimization", desc: "Find bottlenecks and optimize throughput with AI." },
  { icon: Cpu, title: "Intelligent Dashboards", desc: "Live dashboards that surface anomalies and insights." },
];

export function AiDetail() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-teal-950/20 via-ink-950 to-ink-950" />
      <div className="container-px relative">
        <SectionHeading
          eyebrow="AI & Automation"
          title={<>Intelligent systems that <span className="gradient-text">work while you sleep</span></>}
          subtitle="Neural networks, automation and AI agents that turn data into decisions."
        />

        {/* neural network animation */}
        <motion.div
          className="card-glow relative mx-auto mt-14 h-64 max-w-3xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <NeuralNetwork />
        </motion.div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((c, i) => (
            <motion.div
              key={c.title}
              className="card-glow group p-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              whileHover={{ y: -6 }}
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-teal-500/25 to-cyan-500/25">
                <c.icon className="h-6 w-6 text-teal-300" />
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-white">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{c.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* workflow animation */}
        <motion.div
          className="card-glow mt-12 p-7"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-2">
            <Workflow className="h-5 w-5 text-teal-300" />
            <span className="font-display text-sm font-semibold text-white">Automation Workflow</span>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            {["Trigger", "Classify", "Enrich", "Decide", "Act", "Notify"].map((s, i) => (
              <div key={s} className="flex items-center gap-3">
                <motion.div
                  className="rounded-xl border border-teal-400/30 bg-teal-400/10 px-4 py-2.5 text-sm font-medium text-teal-200"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                >
                  {s}
                </motion.div>
                {i < 5 && <span className="text-teal-400/60">→</span>}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function NeuralNetwork() {
  const layers = [4, 6, 6, 3];
  const nodes: { x: number; y: number; layer: number }[] = [];
  layers.forEach((count, li) => {
    for (let i = 0; i < count; i++) {
      nodes.push({
        x: 10 + (li * 80) / (layers.length - 1) * 10 + 10,
        y: 10 + (i / (count - 1)) * 80,
        layer: li,
      });
    }
  });
  // simpler positions
  const pos: { x: number; y: number }[][] = layers.map((count, li) =>
    Array.from({ length: count }, (_, i) => ({
      x: 15 + (li / (layers.length - 1)) * 70,
      y: 50 - ((count - 1) / 2) * 18 + i * 18,
    }))
  );

  return (
    <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
      <defs>
        <linearGradient id="ai-g" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#14b8a6" />
        </linearGradient>
      </defs>
      {pos.slice(1).map((layer, li) =>
        layer.map((n, ni) =>
          pos[li].map((pn, pi) => (
            <motion.line
              key={`${li}-${ni}-${pi}`}
              x1={pn.x} y1={pn.y} x2={n.x} y2={n.y}
              stroke="url(#ai-g)" strokeWidth="0.2"
              animate={{ opacity: [0.1, 0.5, 0.1] }}
              transition={{ duration: 2, repeat: Infinity, delay: (li + ni + pi) * 0.1 }}
            />
          ))
        )
      )}
      {pos.map((layer, li) =>
        layer.map((n, ni) => (
          <motion.circle
            key={`${li}-${ni}`}
            cx={n.x} cy={n.y} r={1.6}
            fill={li === 0 ? "#22d3ee" : li === layers.length - 1 ? "#14b8a6" : "#2dd4bf"}
            animate={{ r: [1.6, 2.4, 1.6], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity, delay: (li + ni) * 0.15 }}
          />
        ))
      )}
    </svg>
  );
}
