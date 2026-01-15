import { FileSearch, FileText, FolderOpen, Lightbulb, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: FileText,
    title: "Patent Filing",
    description: "End-to-end patent application services from drafting to prosecution, ensuring your inventions receive maximum protection.",
    features: ["Provisional & non-provisional applications", "Claims optimization", "USPTO prosecution"],
  },
  {
    icon: FileSearch,
    title: "Patent Search & Analysis",
    description: "Comprehensive prior art searches and freedom-to-operate analyses to inform your innovation strategy.",
    features: ["Prior art research", "Patentability assessments", "Competitive landscape analysis"],
  },
  {
    icon: FolderOpen,
    title: "Portfolio Management",
    description: "Strategic management of your IP assets to maximize value and maintain competitive advantage.",
    features: ["Maintenance & renewals", "Portfolio optimization", "Licensing strategy"],
  },
  {
    icon: Lightbulb,
    title: "IP Strategy Consulting",
    description: "Tailored intellectual property strategies aligned with your business objectives and growth plans.",
    features: ["IP audits", "Monetization planning", "M&A due diligence"],
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-secondary/30 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Comprehensive IP Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            From initial patent search to global portfolio management, we provide full-spectrum intellectual property services.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative glass-card rounded-2xl p-8 overflow-hidden hover:shadow-xl transition-all duration-500"
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-start gap-5">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button variant="ghost" className="group/btn p-0 h-auto text-primary hover:text-primary">
                      Learn More
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
