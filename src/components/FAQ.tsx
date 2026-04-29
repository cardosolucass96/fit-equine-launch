
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Quando a Performance FIT estará disponível no mercado?",
    answer: "O lançamento oficial da Performance FIT está previsto para 04/05/2026. Os participantes da lista VIP serão os primeiros a ter acesso ao produto e receberão condições especiais de pré-venda."
  },
  {
    question: "Como posso conhecer o embasamento técnico do produto?",
    answer: "Ao entrar na lista VIP, você recebe acesso a materiais técnicos exclusivos, incluindo mais de 20 artigos sobre saúde digestiva, equilíbrio metabólico e formulação nutricional para equinos."
  },
  {
    question: "Qual suporte técnico será oferecido?",
    answer: "Oferecemos suporte técnico completo por meio do nosso time especializado em nutrição equina. Isso inclui orientação sobre quantidade de ração, outros alimentos da dieta, transição alimentar, exercícios físicos, exames laboratoriais, monitoramento de resultados e acesso a materiais técnicos exclusivos via WhatsApp e webinars."
  }
];

const FAQ = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-gray-900 mb-6">
              Perguntas Frequentes
            </h2>
            <p className="text-lg text-gray-600">
              Tire suas dúvidas sobre a Performance FIT
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-lg border border-gray-200 px-6"
              >
                <AccordionTrigger className="text-left font-montserrat font-semibold text-gray-900 hover:text-turquoise transition-colors py-6 text-base md:text-lg">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-6 text-sm md:text-base">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-12 p-6 bg-white rounded-lg border border-gray-200">
            <h3 className="font-montserrat font-bold text-gray-900 mb-2">
              Ainda tem dúvidas?
            </h3>
            <p className="text-gray-600 mb-4">
              Entre em contato conosco pelo WhatsApp para falar diretamente com nossos especialistas.
            </p>
            <a 
              href="https://wa.me/5585991257648" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-turquoise hover:bg-turquoise-dark text-white font-montserrat font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Falar com especialista
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
