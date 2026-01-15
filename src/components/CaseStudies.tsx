import { TrendingUp } from "lucide-react";

const caseStudies = [
  {
    title: "AI-Powered Medical Device",
    industry: "Healthcare",
    result: "17 Patents Granted",
    description: "Protected breakthrough diagnostic technology with comprehensive patent portfolio across 12 countries.",
    stats: { patents: 17, countries: 12, timeline: "18 months" },
  },
  {
    title: "Renewable Energy System",
    industry: "Clean Tech",
    result: "$50M Licensing Deal",
    description: "Strategic IP positioning led to major licensing agreement with Fortune 500 energy company.",
    stats: { patents: 8, countries: 25, timeline: "24 months" },
  },
  {
    title: "Fintech Payment Platform",
    industry: "Financial Services",
    result: "Successful IPO",
    description: "IP portfolio valuation contributed significantly to company's $2B public offering.",
    stats: { patents: 23, countries: 8, timeline: "36 months" },
  },
];

const CaseStudies = () => {
  return (
    <section id="results" className="section-padding bg-secondary/30 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
              Case Studies
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Proven Results for Innovators
            </h2>
            <p className="text-muted-foreground text-lg">
              See how we've helped groundbreaking companies protect and monetize their intellectual property.
            </p>
          </div>
          <div className="flex items-center gap-3 glass-card px-6 py-4 rounded-xl">
            <TrendingUp className="w-6 h-6 text-primary" />
            <div>
              <div className="text-2xl font-bold text-foreground">$2.5B+</div>
              <div className="text-sm text-muted-foreground">IP Value Protected</div>
            </div>
          </div>
        </div>

        {/* Case Study Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <div
              key={study.title}
              className="group glass-card rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500"
            >
              {/* Header */}
              <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-6">
                <span className="text-xs font-medium text-primary uppercase tracking-wider">
                  {study.industry}
                </span>
                <h3 className="text-xl font-semibold text-foreground mt-2 mb-1">
                  {study.title}
                </h3>
                <div className="text-2xl font-bold gradient-text">
                  {study.result}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {study.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                  <div className="text-center">
                    <div className="text-lg font-bold text-foreground">{study.stats.patents}</div>
                    <div className="text-xs text-muted-foreground">Patents</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-foreground">{study.stats.countries}</div>
                    <div className="text-xs text-muted-foreground">Countries</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-foreground">{study.stats.timeline}</div>
                    <div className="text-xs text-muted-foreground">Timeline</div>
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

export default CaseStudies;
