
import { Button } from "@/components/ui/button";
import {
  Users,
  MessageCircle,
  BookOpen,
  Video,
  BellRing
} from "lucide-react";

const points = [
  {
    icon: Users,
    title: "Networking estratégico",
    description:
      "Parcerias e troca de dúvidas com profissionais."
  },
  {
    icon: MessageCircle,
    title: "Plantão de perguntas 24 h",
    description:
      "Envie perguntas e receba respostas rápidas."
  },
  {
    icon: BookOpen,
    title: "Discussão de estudos e tendências",
    description:
      "Artigos e insights práticos para o haras."
  },
  {
    icon: Video,
    title: "Webinars e lives exclusivas",
    description:
      "Encontros mensais com especialistas."
  },
  {
    icon: BellRing,
    title: "Primeiro a saber",
    description:
      "Atualizações sobre a Performance FIT e promoções."
  }
];

const ExpertCommunity = () => {
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
            🌐 Comunidade de Especialistas
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conecte-se com quem vive o mesmo desafio que você
          </p>
          <p className="text-lg text-gray-600 max-w-xl mx-auto mt-4">
            Veterinários, zootecnistas e criadores trocam experiências reais sobre manejo nutricional.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {points.map((point, index) => (
            <div
              key={point.title}
              className="flex items-start gap-4 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center justify-center w-12 h-12 bg-turquoise rounded-full flex-shrink-0">
                <point.icon className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-montserrat font-semibold text-gray-900 mb-2">
                  {point.title}
                </h3>
                <p className="text-gray-600">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Preencha o formulário e receba o link para entrar no grupo agora mesmo.
          </p>
          <Button
            onClick={scrollToForm}
            className="bg-turquoise hover:bg-turquoise-dark text-white font-montserrat font-semibold text-lg px-8 py-3"
          >
            Quero entrar agora!
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ExpertCommunity;
