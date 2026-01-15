import { Shield, Zap, Globe, Award } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Bulletproof Protection",
    description: "Comprehensive patent strategies that safeguard your innovations against infringement and competitive threats.",
  },
  {
    icon: Zap,
    title: "Fast-Track Filing",
    description: "Accelerated patent applications with our streamlined process, reducing time-to-protection by up to 40%.",
  },
  {
    icon: Globe,
    title: "Global Coverage",
    description: "International patent protection across 40+ countries with our network of trusted partners worldwide.",
  },
  {
    icon: Award,
    title: "Expert Team",
    description: "Work with seasoned patent attorneys and IP specialists with decades of combined experience.",
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
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Innovation Deserves Elite Protection
          </h2>
          <p className="text-muted-foreground text-lg">
            We combine deep legal expertise with cutting-edge technology to deliver unmatched IP protection for forward-thinking businesses.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group glass-card rounded-2xl p-8 hover:bg-secondary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/5"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
