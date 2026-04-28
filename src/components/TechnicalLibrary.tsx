
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Play, BarChart3, Clock, Download } from "lucide-react";

const libraryItems = [
  {
    id: 1,
    type: "Artigo",
    title: "Síndrome Metabólica Equina: Abordagem Nutricional",
    description: "Revisão completa sobre estratégias nutricionais para cavalos com resistência à insulina.",
    duration: "15 min leitura",
    category: "Artigos",
    thumbnail: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop",
    icon: FileText
  },
  {
    id: 2,
    type: "Vídeo",
    title: "Formulação de Dietas para Cavalos Metabólicos",
    description: "Demonstração prática de como balancear rações para cavalos com síndrome metabólica.",
    duration: "2 min",
    category: "Vídeos",
    thumbnail: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?q=80&w=2070&auto=format&fit=crop",
    icon: Play
  },
  {
    id: 3,
    type: "Estudo",
    title: "Eficácia da Ração FIT em Cavalos PSI",
    description: "Estudo de caso com 12 cavalos Puro Sangue Inglês demonstrando melhora dos parâmetros metabólicos.",
    duration: "8 min leitura",
    category: "Estudos",
    thumbnail: "https://images.unsplash.com/photo-1580910051074-3877dddc1a8d?q=80&w=2070&auto=format&fit=crop",
    icon: BarChart3
  }
];

const TechnicalLibrary = () => {
  const [activeFilter, setActiveFilter] = useState("Todos");
  const filters = ["Todos", "Artigos", "Vídeos", "Estudos"];

  const filteredItems = activeFilter === "Todos" 
    ? libraryItems 
    : libraryItems.filter(item => item.category === activeFilter);

  const scrollToForm = () => {
    const formElement = document.getElementById('lead-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-gray-900 mb-6">
            Biblioteca Técnica Exclusiva
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Acesse conteúdos científicos desenvolvidos por especialistas em nutrição equina
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              onClick={() => setActiveFilter(filter)}
              className={`font-montserrat font-semibold transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-turquoise hover:bg-turquoise-dark text-white'
                  : 'border-turquoise text-turquoise hover:bg-turquoise hover:text-white'
              }`}
            >
              {filter}
            </Button>
          ))}
        </div>

        {/* Library Items */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {filteredItems.map((item, index) => (
            <div 
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative">
                <img 
                  src={item.thumbnail} 
                  alt={item.title}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <Badge className="absolute top-4 left-4 bg-turquoise text-white">
                  {item.type}
                </Badge>
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <item.icon className="h-12 w-12 text-white opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-montserrat font-bold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock className="h-4 w-4 mr-1" />
                    {item.duration}
                  </div>
                  <Button 
                    size="sm"
                    onClick={scrollToForm}
                    className="bg-turquoise hover:bg-turquoise-dark text-white font-montserrat font-semibold"
                  >
                    <Download className="h-4 w-4 mr-1" />
                    Acessar
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Cadastre-se para acessar nossa biblioteca completa com mais de 20 materiais exclusivos
          </p>
          <Button 
            onClick={scrollToForm}
            className="bg-turquoise hover:bg-turquoise-dark text-white font-montserrat font-semibold text-lg px-8 py-3"
          >
            Quero acesso completo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TechnicalLibrary;
