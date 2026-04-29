
import { 
  Zap, 
  ShieldCheck, 
  Heart, 
  Leaf,
  Wheat,
  Sparkles,
  FlaskConical,
  Scale,
  Activity
} from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Baixo Amido",
    description: "Reduz picos de glicose e insulina, com mais segurança metabólica."
  },
  {
    icon: ShieldCheck,
    title: "Zero Melaço",
    description: "Controle de carboidratos não estruturais para cavalos sensíveis, como animais com gastrites recorrentes, resistência à insulina e obesidade."
  },
  {
    icon: Heart,
    title: "Antioxidantes",
    description: "Enriquecida com vitaminas E e C e selênio, para proteção contra estresse oxidativo."
  },
  {
    icon: Sparkles,
    title: "Pré & Probióticos",
    description: "Atuam no equilíbrio da microbiota intestinal e otimizam a digestibilidade de fibras."
  },
  {
    icon: Leaf,
    title: "Alfafa Peletizada",
    description: "Fonte de fibra funcional e proteína digestível com ação tamponante para o trato gastrointestinal."
  },
  {
    icon: Wheat,
    title: "Fibras de Alta Digestibilidade",
    description: "Energia segura com saciedade e suporte à saúde gastrointestinal."
  },
  {
    icon: FlaskConical,
    title: "Lithothamnium sp.",
    description: "Fonte de cálcio, magnésio e compostos bioativos com ação anti-inflamatória e efeito tamponante gástrico."
  },
  {
    icon: Scale,
    title: "Cromo Orgânico",
    description: "Mineral associado à melhora da sensibilidade à insulina e ao metabolismo de glicose."
  },
  {
    icon: Activity,
    title: "Aminoácidos Essenciais",
    description: "Auxiliam na preservação da massa muscular durante programas de controle de peso."
  }
];

const stats = [
  { value: "0%", label: "Melaço" },
  { value: ">14%", label: "Proteína Bruta" },
  { value: "<15%", label: "Amido" },
  { value: ">7%", label: "Extrato Etéreo" },
  { value: "+20", label: "Artigos Técnicos" }
];

const Benefits = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-gray-900 mb-6">
            Conceito Nutricional Contemporâneo
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Performance FIT foi desenvolvida baseada em conceito nutricional contemporâneo, que
            contempla menor teor de amido, maior inclusão de fibras de alta digestibilidade,
            ingredientes selecionados e aditivos funcionais estratégicos.
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
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-montserrat font-bold text-turquoise mb-2">{stat.value}</div>
              <div className="text-gray-600 font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
