import { motion } from "framer-motion";
import { Monitor, Smartphone, Building2, LayoutGrid, Boxes, Users, BarChart3 } from "lucide-react";
import { SectionHeading } from "../SectionHeading";

const CAPABILITIES = [
  { icon: Monitor, title: "Website Development", desc: "Marketing sites, web apps, PWAs and headless commerce — fast, accessible and beautiful." },
  { icon: Smartphone, title: "Mobile Applications", desc: "Native and cross-platform iOS & Android apps with delightful UX." },
  { icon: Building2, title: "Enterprise Software", desc: "Custom platforms that handle complex workflows and millions of records." },
  { icon: LayoutGrid, title: "Business Portals", desc: "Self-service portals for customers, partners and vendors." },
  { icon: Boxes, title: "ERP Systems", desc: "Unified resource planning that connects finance, ops and inventory." },
  { icon: Users, title: "CRM & HRMS", desc: "Relationship and people management tailored to your processes." },
];

export function DigitalEngineeringDetail() {
  return (
    <section className="relative py-24">
      <div className="container-px">
        <SectionHeading
          eyebrow="Capabilities"
          title={<>Modern SaaS-grade <span className="gradient-text">engineering</span></>}
          subtitle="From idea to production — we build software that scales with your business."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CAPABILITIES.map((c, i) => (
            <motion.div
              key={c.title}
              className="card-glow group p-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              whileHover={{ y: -6 }}
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-electric-500/25 to-indigo-500/25">
                <c.icon className="h-6 w-6 text-electric-400" />
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-white">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{c.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* dashboard preview */}
        <motion.div
          className="card-glow mt-12 overflow-hidden p-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-electric-400" />
            <span className="font-display text-sm font-semibold text-white">Interactive Dashboard Preview</span>
          </div>
          <div className="mt-5 grid gap-4 md:grid-cols-4">
            {[
              { label: "Active Users", val: "48.2K", up: "+12%" },
              { label: "Revenue", val: "$1.2M", up: "+8%" },
              { label: "Uptime", val: "99.98%", up: "+0.1%" },
              { label: "Avg Load", val: "0.4s", up: "-22%" },
            ].map((m, i) => (
              <motion.div
                key={m.label}
                className="rounded-xl border border-white/10 bg-white/5 p-4"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-xs text-white/50">{m.label}</div>
                <div className="mt-1 font-display text-2xl font-bold text-white">{m.val}</div>
                <div className="text-xs text-teal-400">{m.up}</div>
              </motion.div>
            ))}
          </div>
          <div className="mt-4 flex h-32 items-end gap-2 rounded-xl border border-white/10 bg-white/5 p-4">
            {[40, 65, 50, 80, 55, 90, 70, 95, 60, 85, 75, 100].map((h, i) => (
              <motion.div
                key={i}
                className="flex-1 rounded-t bg-gradient-to-t from-electric-500/40 to-indigo-500/80"
                initial={{ height: 0 }}
                whileInView={{ height: `${h}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
