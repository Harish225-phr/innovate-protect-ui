import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { STATS } from "../data/content";
import { Counter } from "./Counter";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden pt-32 pb-20">
      {/* grid + orbs */}
      <div className="absolute inset-0 grid-bg" />
      <motion.div style={{ y }} className="absolute inset-0">
        <FloatingOrb className="left-[8%] top-[18%]" color="#0ea5e9" delay={0} />
        <FloatingOrb className="right-[10%] top-[24%]" color="#8b5cf6" delay={1.5} />
        <FloatingOrb className="left-[18%] bottom-[14%]" color="#22d3ee" delay={0.8} size={90} />
        <FloatingOrb className="right-[20%] bottom-[20%]" color="#6366f1" delay={2.2} size={70} />
      </motion.div>

      {/* animated svg lines */}
      <svg className="absolute inset-0 h-full w-full opacity-30" preserveAspectRatio="none">
        <defs>
          <linearGradient id="hg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
        <motion.path
          d="M0,300 C400,200 900,400 1440,250"
          fill="none"
          stroke="url(#hg)"
          strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />
        <motion.path
          d="M0,500 C500,600 1000,350 1440,500"
          fill="none"
          stroke="url(#hg)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.4 }}
          transition={{ duration: 3.5, delay: 0.4, ease: "easeInOut" }}
        />
      </svg>

      <motion.div style={{ opacity }} className="container-px relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Sparkles className="h-3.5 w-3.5" /> Technology · AI · OTT · IP Services
          </motion.span>

          <motion.h1
            className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Technology That
            <br />
            <span className="gradient-text">Helps Businesses Grow</span>
          </motion.h1>

          <motion.p
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            We build, manage, innovate and protect. ContriveInsight is a global technology
            company engineering digital products, OTT platforms, AI automation and intellectual
            property services for ambitious businesses.
          </motion.p>

          <motion.div
            className="mt-9 flex flex-wrap items-center justify-center gap-4"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Link to="/contact" className="btn-primary">
              Let's Talk <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/services" className="btn-ghost">
              <Play className="h-4 w-4" /> Explore Services
            </Link>
          </motion.div>
        </div>

        {/* stats */}
        <motion.div
          className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
        >
          {STATS.map((s) => (
            <div key={s.label} className="card-glow p-5 text-center">
              <div className="font-display text-3xl font-bold gradient-text sm:text-4xl">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-1 text-xs uppercase tracking-[0.2em] text-white/50">{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* trust logos */}
        <motion.div
          className="mx-auto mt-16 max-w-5xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-center text-xs uppercase tracking-[0.3em] text-white/40">
            Trusted by teams across 20+ countries
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-60">
            {["FinEdge", "StreamLive", "MedTrack", "NovaTech", "Orbit", "Pulse"].map((b) => (
              <span key={b} className="font-display text-lg font-semibold text-white/70">
                {b}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function FloatingOrb({
  className,
  color,
  delay = 0,
  size = 120,
}: {
  className?: string;
  color: string;
  delay?: number;
  size?: number;
}) {
  return (
    <motion.div
      className={`absolute ${className}`}
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: `radial-gradient(circle at 30% 30%, ${color}, transparent 70%)`,
        filter: "blur(40px)",
      }}
      animate={{ y: [0, -30, 0], x: [0, 15, 0], scale: [1, 1.1, 1] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay }}
    />
  );
}
