import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "NexusIP transformed how we approach intellectual property. Their strategic guidance helped us build a patent portfolio that was instrumental in our Series B funding.",
    author: "Sarah Chen",
    role: "CEO, NeuroTech Labs",
    image: "SC",
  },
  {
    quote: "The team's deep technical expertise and responsiveness exceeded our expectations. They understood our complex biotech innovations and crafted bulletproof patent claims.",
    author: "Dr. Michael Rivera",
    role: "CTO, Genomix Therapeutics",
    image: "MR",
  },
  {
    quote: "From our first patent filing to managing our global IP portfolio, NexusIP has been an invaluable partner. Their strategic insights have saved us millions in potential litigation.",
    author: "James Morrison",
    role: "VP Legal, Quantum Systems",
    image: "JM",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(174_72%_40%_/_0.08)_0%,_transparent_50%)]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Trusted by Industry Leaders
          </h2>
        </div>

        {/* Testimonial Slider */}
        <div className="max-w-4xl mx-auto">
          <div className="relative glass-card rounded-3xl p-8 md:p-12">
            {/* Quote Icon */}
            <Quote className="w-12 h-12 text-primary/20 mb-6" />

            {/* Testimonial Content */}
            <div className="min-h-[200px] flex flex-col justify-between">
              <p className="text-xl md:text-2xl text-foreground font-medium leading-relaxed mb-8">
                "{testimonials[activeIndex].quote}"
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary font-semibold text-lg">
                      {testimonials[activeIndex].image}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonials[activeIndex].author}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonials[activeIndex].role}
                    </div>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={prevTestimonial}
                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "w-8 bg-primary"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
