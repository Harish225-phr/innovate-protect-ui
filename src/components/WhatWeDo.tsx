import { motion } from "framer-motion";
import { WHAT_WE_DO } from "../data/content";
import { Icon } from "./Icon";
import { SectionHeading } from "./SectionHeading";

export function WhatWeDo() {
  return (
    <section className="relative py-24">
      <div className="container-px">
        <SectionHeading
          eyebrow="What We Do"
          title={<>Four ways we <span className="gradient-text">power your business</span></>}
          subtitle="Build, manage, innovate and protect — a complete technology partner, not just a vendor."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {WHAT_WE_DO.map((item, i) => (
            <motion.div
              key={item.name}
              className="card-glow group p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
            >
              <div
                className="grid h-14 w-14 place-items-center rounded-2xl transition-transform duration-500 group-hover:scale-110"
                style={{
                  background: `linear-gradient(135deg, ${item.color[0]}33, ${item.color[1]}33)`,
                  border: `1px solid ${item.color[0]}55`,
                  boxShadow: `0 0 30px -10px ${item.color[0]}66`,
                }}
              >
                <Icon name={item.icon} className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-white">{item.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{item.desc}</p>
              <div
                className="mt-5 h-px w-full opacity-30"
                style={{ background: `linear-gradient(90deg, ${item.color[0]}, transparent)` }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
