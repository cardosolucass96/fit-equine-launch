
import { 
  Zap, 
  ShieldCheck, 
  Heart, 
  Leaf,
  Wheat,
  Sparkles
} from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Baixo Amido",
    description: "Menos picos de glicose, mais energia estável e segura. A fórmula FIT reduz o amido sem comprometer o desempenho."
  },
  {
    icon: ShieldCheck,
    title: "Zero Melaço",
    description: "Fórmula sem adição de açúcares, ideal para cavalos com distúrbios metabólicos."
  },
  {
    icon: Heart,
    title: "Antioxidantes",
    description: "Com vitaminas C, E e Selênio para proteção avançada contra o estresse oxidativo presente na obesidade e doenças metabólicas."
  },
  {
    icon: Sparkles,
    title: "Pré & Probióticos",
    description: "Microbiota intestinal equilibrada para maior absorção de nutrientes e segurança alimentar."
  },
  {
    icon: Leaf,
    title: "Alfafa Peletizada",
    description: "Fonte de proteína de qualidade e fibra funcional com ação tamponante para o trato gastrointestinal."
  },
  {
    icon: Wheat,
    title: "Fibras Alta Digestibilidade",
    description: "Energia sustentada por fibras de alta fermentabilidade e baixo índice glicêmico."
  }
];

const Benefits = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-gray-900 mb-6">
            Tecnologia Avançada em Nutrição Equina
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Performance FIT foi desenvolvida especificamente para cavalos obesos ou com síndrome metabólica, 
            oferecendo nutrição completa sem comprometer a saúde gastrointestinal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={benefit.title}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-turquoise rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-montserrat font-bold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Counter */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-montserrat font-bold text-turquoise mb-2">0%</div>
            <div className="text-gray-600 font-semibold">Melaço</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-montserrat font-bold text-turquoise mb-2">&lt;15%</div>
            <div className="text-gray-600 font-semibold">Amido</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-montserrat font-bold text-turquoise mb-2">+20</div>
            <div className="text-gray-600 font-semibold">Artigos Técnicos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-montserrat font-bold text-turquoise mb-2">+Saúde</div>
            <div className="text-gray-600 font-semibold">Metabólica e Digestiva</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
