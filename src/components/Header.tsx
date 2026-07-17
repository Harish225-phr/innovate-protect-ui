import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { NAV_LINKS, SERVICES } from "../data/content";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState(false);
  const loc = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setMega(false);
  }, [loc.pathname, loc.hash]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="container-px">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 ${
            scrolled ? "glass-strong shadow-card" : "border border-transparent"
          }`}
        >
          <Link to="/" className="flex items-center gap-2.5">
            <Logo />
            <span className="font-display text-lg font-bold tracking-tight text-white">
              Contrive<span className="gradient-text">Insight</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((l) =>
              l.mega ? (
                <div
                  key={l.label}
                  className="relative"
                  onMouseEnter={() => setMega(true)}
                  onMouseLeave={() => setMega(false)}
                >
                  <button className="group flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-white/75 transition hover:text-white">
                    {l.label}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${mega ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence>
                    {mega && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-1/2 top-full w-[640px] -translate-x-1/2 pt-3"
                      >
                        <div className="glass-strong grid grid-cols-2 gap-2 rounded-2xl p-3 shadow-card">
                          {SERVICES.map((s) => (
                            <Link
                              key={s.slug}
                              to={`/services/${s.slug}`}
                              className="group flex gap-3 rounded-xl p-3 transition hover:bg-white/5"
                            >
                              <span
                                className="grid h-10 w-10 shrink-0 place-items-center rounded-lg"
                                style={{
                                  background: `linear-gradient(135deg, ${s.color[0]}33, ${s.color[1]}33)`,
                                  border: `1px solid ${s.color[0]}44`,
                                }}
                              >
                                <span
                                  className="h-4 w-4 rounded"
                                  style={{ background: `linear-gradient(135deg, ${s.color[0]}, ${s.color[1]})` }}
                                />
                              </span>
                              <span>
                                <span className="block text-sm font-semibold text-white">{s.name}</span>
                                <span className="block text-xs text-white/55">{s.tagline}</span>
                              </span>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={l.label}
                  to={l.to}
                  className="group relative rounded-full px-4 py-2 text-sm font-medium text-white/75 transition hover:text-white"
                >
                  {l.label}
                  <span className="absolute bottom-1 left-1/2 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-electric-400 to-indigo-500 transition-all duration-300 group-hover:w-2/3" />
                </Link>
              )
            )}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link to="/contact" className="btn-primary">
              Let's Talk <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <button
            className="grid h-10 w-10 place-items-center rounded-xl glass lg:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -10, height: 0 }}
              className="mt-2 overflow-hidden lg:hidden"
            >
              <div className="glass-strong rounded-2xl p-4">
                {NAV_LINKS.map((l) => (
                  <Link
                    key={l.label}
                    to={l.to}
                    className="block rounded-lg px-3 py-3 text-sm font-medium text-white/80 transition hover:bg-white/5 hover:text-white"
                  >
                    {l.label}
                  </Link>
                ))}
                {SERVICES.map((s) => (
                  <Link
                    key={s.slug}
                    to={`/services/${s.slug}`}
                    className="block rounded-lg px-3 py-3 pl-6 text-sm text-white/60 transition hover:bg-white/5 hover:text-white"
                  >
                    {s.name}
                  </Link>
                ))}
                <Link to="/contact" className="btn-primary mt-3 w-full">
                  Let's Talk
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

function Logo() {
  return (
    <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-electric-500 to-indigo-500 shadow-glow">
      <span className="font-display text-sm font-bold text-white">C</span>
      <span className="absolute inset-0 rounded-xl ring-1 ring-white/20" />
    </span>
  );
}
