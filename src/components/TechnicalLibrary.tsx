
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
      "Construa parcerias, tire dúvidas sobre casos clínicos e encontre colegas dispostos a compartilhar boas práticas."
  },
  {
    icon: MessageCircle,
    title: "Plantão de perguntas 24 h",
    description:
      "Envie sua dúvida a qualquer momento e receba respostas rápidas da nossa equipe técnica ou de colegas experientes."
  },
  {
    icon: BookOpen,
    title: "Discussão de estudos e tendências",
    description:
      "Receba artigos, webinars e insights de pesquisas atuais — sempre traduzidos para a prática do haras."
  },
  {
    icon: Video,
    title: "Webinars e lives exclusivas",
    description:
      "Participe de encontros online mensais com especialistas convidados e aprofunde seus conhecimentos."
  },
  {
    icon: BellRing,
    title: "Primeiro a saber",
    description:
      "Quem está no grupo recebe em primeira mão atualizações sobre o lançamento da Ração FIT, testes de campo e promoções de pré-venda."
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
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
            Nosso grupo exclusivo reúne veterinários, zootecnistas e criadores engajados em oferecer o melhor manejo nutricional para cavalos com síndrome metabólica. Mais do que conteúdo, você terá acesso direto a profissionais que trocam experiências reais todos os dias.
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
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Preencha o formulário abaixo e receba o link de acesso imediato ao grupo no WhatsApp. Venha fazer parte dessa rede de profissionais que transformam a saúde equina todos os dias!
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
