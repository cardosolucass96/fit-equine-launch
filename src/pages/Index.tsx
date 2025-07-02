
import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import MetabolicSyndrome from "@/components/MetabolicSyndrome";
import LeadForm from "@/components/LeadForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import TechnicalLibrary from "@/components/TechnicalLibrary";
import IngredientsSection from "@/components/IngredientsSection";

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
        <IngredientsSection />
        <MetabolicSyndrome />
        <TechnicalLibrary />
        <LeadForm />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
