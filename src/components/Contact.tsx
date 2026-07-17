import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, CircleCheck as CheckCircle2 } from "lucide-react";
import { CONTACT_INFO } from "../data/content";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", company: "", phone: "", email: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`New inquiry from ${form.name} (${form.company})`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nCompany: ${form.company}\nPhone: ${form.phone}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${CONTACT_INFO.submit}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const field = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [k]: e.target.value });

  return (
    <section id="contact" className="relative py-24">
      <div className="container-px">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Contact"
              title={<>Let's build <span className="gradient-text">something great</span></>}
              subtitle="Tell us about your project. We'll get back within one business day."
            />
            <div className="mt-8 space-y-4">
              <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`} className="flex items-center gap-4 rounded-2xl glass p-4 transition hover:bg-white/5">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-electric-500/30 to-indigo-500/30">
                  <Phone className="h-5 w-5 text-electric-400" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-wider text-white/50">Phone</div>
                  <div className="font-semibold text-white">{CONTACT_INFO.phone}</div>
                </div>
              </a>
              {CONTACT_INFO.emails.map((em) => (
                <a key={em} href={`mailto:${em}`} className="flex items-center gap-4 rounded-2xl glass p-4 transition hover:bg-white/5">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-violet-500/30 to-pink-500/30">
                    <Mail className="h-5 w-5 text-violet-300" />
                  </span>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-white/50">Email</div>
                    <div className="font-semibold text-white">{em}</div>
                  </div>
                </a>
              ))}
              <div className="flex items-center gap-4 rounded-2xl glass p-4">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-teal-500/30 to-cyan-500/30">
                  <MapPin className="h-5 w-5 text-teal-300" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-wider text-white/50">Location</div>
                  <div className="font-semibold text-white">{CONTACT_INFO.location}</div>
                </div>
              </div>
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">
              <iframe
                title="ContriveInsight location"
                src="https://www.google.com/maps?q=Delhi,India&output=embed"
                className="h-56 w-full grayscale-[0.3] invert-[0.9] hue-rotate-180"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <motion.form
            onSubmit={submit}
            className="card-glow space-y-4 p-7 sm:p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name *"><input required value={form.name} onChange={field("name")} className="ci-input" placeholder="Your name" /></Field>
              <Field label="Company"><input value={form.company} onChange={field("company")} className="ci-input" placeholder="Company" /></Field>
              <Field label="Phone *"><input required value={form.phone} onChange={field("phone")} className="ci-input" placeholder="+91 ..." /></Field>
              <Field label="Email *"><input required type="email" value={form.email} onChange={field("email")} className="ci-input" placeholder="you@company.com" /></Field>
            </div>
            <Field label="Message *">
              <textarea required value={form.message} onChange={field("message")} rows={5} className="ci-input resize-none" placeholder="Tell us about your project..." />
            </Field>
            <button type="submit" className="btn-primary w-full">
              {sent ? <><CheckCircle2 className="h-4 w-4" /> Opening your email…</> : <>Send Message <Send className="h-4 w-4" /></>}
            </button>
            <p className="text-center text-xs text-white/40">Submissions are routed to {CONTACT_INFO.submit}</p>
          </motion.form>
        </div>
      </div>

      <style>{`
        .ci-input {
          width: 100%;
          border-radius: 0.75rem;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
          padding: 0.7rem 0.9rem;
          font-size: 0.875rem;
          color: #fff;
          outline: none;
          transition: all .2s;
        }
        .ci-input::placeholder { color: rgba(255,255,255,0.35); }
        .ci-input:focus { border-color: rgba(56,189,248,0.6); box-shadow: 0 0 0 3px rgba(56,189,248,0.15); }
      `}</style>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-white/50">{label}</span>
      {children}
    </label>
  );
}
