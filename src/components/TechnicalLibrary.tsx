import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  MessageCircle,
  BookOpen,
  Video,
  BellRing
} from "lucide-react";
import { FileText, Play, BarChart3, Clock, ExternalLink } from "lucide-react";
const openLink = (url) => window.open(url, "_blank", "noopener,noreferrer");
const libraryItems = [
  {
    id: 1,
    type: "Artigo Científico",
    title: "Treatment of Equine Metabolic Syndrome",
    description:
      "Morgan et al., 2015 – Revisão das principais estratégias terapêuticas (dieta, exercício, fármacos).",
    duration: "10 min leitura",
    category: "Artigos",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/commons/f/f8/Spotted_roan_horse_-_geograph.org.uk_-_1442708.jpg", // cavalo com sobrepeso – EMS  :contentReference[oaicite:0]{index=0}
    icon: FileText,
    link: "https://pubmed.ncbi.nlm.nih.gov/25808563/"
  },
  {
    id: 2,
    type: "Artigo Científico",
    title: "Insulin Dysregulation in Horses",
    description:
      "Frank et al., 2013 – Mecanismos, diagnóstico e manejo da disfunção insulínica em equinos.",
    duration: "9 min leitura",
    category: "Artigos",
    thumbnail:
      "https://www.americanfarriers.com/ext/resources/2023/04/26/Blood-work-Feature.jpg?t=1683906073&width=700", // coleta de sangue para testes de insulina  :contentReference[oaicite:1]{index=1}
    icon: FileText,
    link: "https://pubmed.ncbi.nlm.nih.gov/24033478/"
  },
  {
    id: 3,
    type: "Guia / Consenso",
    title: "EEG – Recomendações para EMS (2022)",
    description:
      "Diretrizes clínicas atualizadas do Equine Endocrinology Group para diagnóstico e tratamento da EMS.",
    duration: "12 min leitura",
    category: "Estudos",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Anatomy_and_physiology_of_animals_Main_endocrine_organs_of_the_body-int.svg/1024px-Anatomy_and_physiology_of_animals_Main_endocrine_organs_of_the_body-int.svg.png", // diagrama do sistema endócrino equino  :contentReference[oaicite:2]{index=2}
    icon: BarChart3,
    link:
      "https://idppid.com/sites/default/files/clinical-research/2022%20EEG%20EMS%20recomendations%202022-10-3b%20DRAFT_0.pdf"
  },
  {
    id: 4,
    type: "Revisão",
    title: "Efeito de Doenças Endócrinas na Reprodução Equina",
    description:
      "Revisão sobre como distúrbios endócrinos afetam a fertilidade de éguas e garanhões.",
    duration: "11 min leitura",
    category: "Estudos",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/commons/5/5d/Equine_Ultrasound_UFL_2006-09.jpg", // ultrassom reprodutivo  :contentReference[oaicite:3]{index=3}
    icon: FileText,
    link: "https://www.scielo.br/j/abem/a/fgfNxG4QSG3sHyf4XrZ49ZD/"
  }
];

const TechnicalLibrary = () => {
  const [activeFilter, setActiveFilter] = useState("Todos");
  const filters = ["Todos", "Artigos", "Estudos"];

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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
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
                  onClick={() => openLink(item.link)}   // ← aqui
                  className="bg-turquoise hover:bg-turquoise-dark text-white font-montserrat font-semibold"
                >
                  <ExternalLink className="h-4 w-4 mr-1" />
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
