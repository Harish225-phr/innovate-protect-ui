import { Link } from "react-router-dom";
import { Linkedin, Twitter, Github, ArrowRight } from "lucide-react";
import { SERVICES } from "../data/content";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-ink-950 pt-20 pb-10">
      <div className="absolute -top-40 left-1/2 h-80 w-[60%] -translate-x-1/2 rounded-full bg-gradient-to-r from-electric-500/20 via-indigo-500/15 to-violet-500/20 blur-3xl" />
      <div className="container-px relative">
        {/* newsletter */}
        <div className="card-glow mx-auto mb-16 flex max-w-4xl flex-col items-center gap-6 p-8 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <h3 className="font-display text-xl font-bold text-white">Stay ahead of the curve</h3>
            <p className="mt-1 text-sm text-white/60">Insights on tech, AI, OTT and IP — no spam.</p>
          </div>
          <form className="flex w-full max-w-sm gap-2" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="you@company.com" className="w-full rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white outline-none focus:border-electric-400/60" />
            <button className="btn-primary shrink-0 px-5 py-2.5">Subscribe <ArrowRight className="h-4 w-4" /></button>
          </form>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Link to="/" className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-electric-500 to-indigo-500 font-display text-sm font-bold text-white">C</span>
              <span className="font-display text-lg font-bold text-white">Contrive<span className="gradient-text">Insight</span></span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/55">
              Technology That Helps Businesses Grow. Engineering, AI, OTT and intellectual property services for ambitious teams.
            </p>
            <div className="mt-5 flex gap-3">
              {[Linkedin, Twitter, Github].map((I, i) => (
                <a key={i} href="#" className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/5 text-white/70 transition hover:bg-white/10 hover:text-white">
                  <I className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterCol title="Services" links={SERVICES.map((s) => ({ label: s.name, to: `/services/${s.slug}` }))} />
          <FooterCol title="Company" links={[
            { label: "About", to: "/#about" },
            { label: "Industries", to: "/#industries" },
            { label: "Process", to: "/#process" },
            { label: "Contact", to: "/contact" },
          ]} />
          <FooterCol title="Contact" links={[
            { label: "+91 70151 89070", to: "tel:+917015189070" },
            { label: "info@contriveinsight.com", to: "mailto:info@contriveinsight.com" },
            { label: "Delhi, India", to: "/contact" },
          ]} />
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-sm text-white/40 sm:flex-row">
          <span>© {new Date().getFullYear()} ContriveInsight. All rights reserved.</span>
          <span>Designed & engineered with precision.</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { label: string; to: string }[] }) {
  return (
    <div>
      <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white/80">{title}</h4>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l.label}>
            <Link to={l.to} className="text-sm text-white/55 transition hover:text-white">{l.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
