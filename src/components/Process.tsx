import { Search, FileCheck, Send, Handshake } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: Search,
    title: "Discovery",
    description: "We conduct a thorough analysis of your invention and market landscape to identify patentable elements.",
  },
  {
    step: "02",
    icon: FileCheck,
    title: "Strategy & Drafting",
    description: "Our experts craft comprehensive patent claims and applications tailored to maximize your protection.",
  },
  {
    step: "03",
    icon: Send,
    title: "Filing & Prosecution",
    description: "We file your applications and manage all USPTO communications and office action responses.",
  },
  {
    step: "04",
    icon: Handshake,
    title: "Grant & Protection",
    description: "Receive your granted patent and ongoing support for enforcement, licensing, and portfolio growth.",
  },
];

const Process = () => {
  return (
    <section id="process" className="section-padding relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,_hsl(174_72%_40%_/_0.08)_0%,_transparent_60%)]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Your Path to Patent Protection
          </h2>
          <p className="text-muted-foreground text-lg">
            A streamlined process designed to protect your innovations efficiently and effectively.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.step}
                className="relative group"
              >
                {/* Step Number */}
                <div className="text-7xl font-bold text-primary/10 absolute -top-4 left-0 lg:left-1/2 lg:-translate-x-1/2 group-hover:text-primary/20 transition-colors duration-300">
                  {step.step}
                </div>

                {/* Icon Circle */}
                <div className="relative z-10 w-20 h-20 rounded-full bg-card border-2 border-border flex items-center justify-center mx-auto mb-6 group-hover:border-primary group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-300">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Content */}
                <div className="text-center lg:px-2">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow - Mobile/Tablet */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-6">
                    <div className="w-0.5 h-8 bg-gradient-to-b from-primary/30 to-transparent" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
