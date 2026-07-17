import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CaseStudies } from "@/components/CaseStudies";

const ResultsPage = () => {
  return (
    <div className="min-h-screen bg-background custom-scrollbar">
      <Header />
      <main className="pt-24">
        <CaseStudies />
      </main>
      <Footer />
    </div>
  );
};

export default ResultsPage;
