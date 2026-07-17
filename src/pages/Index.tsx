import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import { Process } from "@/components/Process";
import { CaseStudies } from "@/components/CaseStudies";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background custom-scrollbar">
      <Header />
      <main>
        <Hero />
        <WhyChooseUs />
        <Services />
        <Process />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
