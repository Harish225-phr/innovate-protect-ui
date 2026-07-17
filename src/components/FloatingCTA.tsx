import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function FloatingCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5, duration: 0.5 }}
      className="fixed bottom-6 right-6 z-40"
    >
      <Link to="/contact" className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-electric-500 to-indigo-500 px-5 py-3 text-sm font-semibold text-white shadow-glow transition-all hover:scale-105">
        Contact Us
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </Link>
    </motion.div>
  );
}
