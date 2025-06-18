
import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import MetabolicSyndrome from "@/components/MetabolicSyndrome";
import ExpertCommunity from "@/components/TechnicalLibrary";
import LeadForm from "@/components/LeadForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white font-open-sans">
      <main className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <Hero />
        <Benefits />
        <MetabolicSyndrome />
        <ExpertCommunity />
        <LeadForm />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
