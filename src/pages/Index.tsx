
import { useState, useEffect, lazy, Suspense } from "react";
import StickyBar from "@/components/StickyBar";
import Hero from "@/components/Hero";

const Benefits = lazy(() => import("@/components/Benefits"));
const MetabolicSyndrome = lazy(() => import("@/components/MetabolicSyndrome"));
const TechnicalLibrary = lazy(() => import("@/components/TechnicalLibrary"));
const LeadForm = lazy(() => import("@/components/LeadForm"));
const FAQ = lazy(() => import("@/components/FAQ"));
const Footer = lazy(() => import("@/components/Footer"));

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white font-open-sans">
      <StickyBar />
      <main className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <Hero />
        <Suspense fallback={null}>
          <Benefits />
          <MetabolicSyndrome />
          <TechnicalLibrary />
          <LeadForm />
          <FAQ />
          <Footer />
        </Suspense>
      </main>
    </div>
  );
};

export default Index;
