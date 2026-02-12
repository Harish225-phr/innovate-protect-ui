import { Lightbulb, ShieldCheck, Users, Award } from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation Driven",
    description: "We empower inventors with strategic and forward-thinking IP solutions.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity First",
    description: "Transparency, trust, and confidentiality are the foundation of our services.",
  },
  {
    icon: Users,
    title: "Client-Centric Approach",
    description: "Every strategy is tailored to maximize client success.",
  },
  {
    icon: Award,
    title: "Excellence in Execution",
    description: "From drafting to filing, we ensure precision and global standards.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_hsl(174_72%_40%_/_0.05)_0%,_transparent_50%)]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Our Core Values
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What Drives Us Forward
          </h2>
          <p className="text-muted-foreground text-lg">
            Built on principles that prioritize your success and innovation protection.
          </p>
        </div>

        {/* Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="group glass-card rounded-2xl p-8 hover:bg-secondary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/5"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <value.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
