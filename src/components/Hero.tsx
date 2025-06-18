
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Hero = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('lead-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden lg:pt-12">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?q=80&w=2126&auto=format&fit=crop')`
        }}
      />
      
      {/* Strategic Feed Badge */}
      <Badge className="absolute top-8 right-8 bg-turquoise text-white px-4 py-2 font-montserrat font-semibold text-sm">
        Strategic Feed
      </Badge>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-montserrat font-bold mb-6 leading-tight animate-fade-in">
          O PRÓXIMO NÍVEL EM CUIDADO EQUINO
        </h1>
        
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-montserrat font-semibold text-turquoise mb-8 animate-fade-in delay-300">
          Descubra agora a ração PERFORMANCE FIT
        </h2>
        
        <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in delay-500">
          FIT une ciência de ponta e ingredientes de alta digestibilidade para cavalos com síndrome metabólica
        </p>
        
        <Button 
          onClick={scrollToForm}
          className="bg-turquoise hover:bg-turquoise-dark text-white font-montserrat font-semibold text-lg px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 animate-fade-in delay-700"
          size="lg"
        >
          Quero receber em primeira mão
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
