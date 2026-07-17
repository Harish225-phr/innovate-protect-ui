import { motion } from "framer-motion";

export function AuroraBackground({ variant = "default" }: { variant?: "default" | "subtle" | "hero" }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div
        className="aurora"
        style={{
          width: 520,
          height: 520,
          top: -120,
          left: -80,
          background: "radial-gradient(circle, #0ea5e9, transparent 70%)",
          opacity: variant === "subtle" ? 0.25 : 0.4,
        }}
      />
      <motion.div
        className="aurora"
        style={{
          width: 600,
          height: 600,
          top: "10%",
          right: -150,
          background: "radial-gradient(circle, #6366f1, transparent 70%)",
          opacity: variant === "subtle" ? 0.2 : 0.35,
        }}
        animate={{ y: [0, 40, 0], x: [0, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="aurora"
        style={{
          width: 480,
          height: 480,
          bottom: -160,
          left: "30%",
          background: "radial-gradient(circle, #8b5cf6, transparent 70%)",
          opacity: variant === "subtle" ? 0.18 : 0.3,
        }}
        animate={{ y: [0, -30, 0], x: [0, 30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      {variant === "hero" && (
        <motion.div
          className="aurora"
          style={{
            width: 380,
            height: 380,
            top: "40%",
            left: "45%",
            background: "radial-gradient(circle, #22d3ee, transparent 70%)",
            opacity: 0.25,
          }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.35, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      )}
    </div>
  );
}
