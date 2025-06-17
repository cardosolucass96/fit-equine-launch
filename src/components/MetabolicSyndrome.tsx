
import { Button } from "@/components/ui/button";
import { Download, TrendingUp, Heart, Shield } from "lucide-react";

const MetabolicSyndrome = () => {
  const handleDownload = () => {
    const formElement = document.getElementById('lead-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-gray-900 leading-tight">
              Síndrome Metabólica Equina: 
              <span className="text-turquoise"> Desafio Nutricional</span>
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              A síndrome metabólica equina afeta milhões de cavalos globalmente, caracterizada por 
              resistência à insulina, obesidade regional e laminite recorrente.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <TrendingUp className="h-6 w-6 text-turquoise mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-montserrat font-semibold text-gray-900 mb-2">Controle Glicêmico</h4>
                  <p className="text-gray-600">Redução significativa dos picos pós-prandiais de glicose e insulina.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Heart className="h-6 w-6 text-turquoise mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-montserrat font-semibold text-gray-900 mb-2">Saúde Cardiovascular</h4>
                  <p className="text-gray-600">Melhora da sensibilidade à insulina e redução do estresse oxidativo.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Shield className="h-6 w-6 text-turquoise mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-montserrat font-semibold text-gray-900 mb-2">Prevenção de Laminite</h4>
                  <p className="text-gray-600">Protocolo nutricional específico para reduzir riscos inflamatórios.</p>
                </div>
              </div>
            </div>

            <Button 
              onClick={handleDownload}
              variant="outline"
              className="border-turquoise text-turquoise hover:bg-turquoise hover:text-white font-montserrat font-semibold transition-all duration-300"
            >
              <Download className="h-4 w-4 mr-2" />
              Baixar artigo científico
            </Button>
          </div>

          {/* Infographic */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-xl font-montserrat font-bold text-center text-gray-900 mb-8">
              Prevalência da Síndrome Metabólica
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Cavalos de Esporte</span>
                <div className="flex items-center gap-3">
                  <div className="w-32 h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div className="w-3/4 h-full bg-turquoise rounded-full"></div>
                  </div>
                  <span className="font-montserrat font-bold text-gray-900 w-12">23%</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-600">Cavalos de Lazer</span>
                <div className="flex items-center gap-3">
                  <div className="w-32 h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div className="w-full h-full bg-turquoise rounded-full"></div>
                  </div>
                  <span className="font-montserrat font-bold text-gray-900 w-12">34%</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-600">Pôneis</span>
                <div className="flex items-center gap-3">
                  <div className="w-32 h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div className="w-5/6 h-full bg-turquoise rounded-full"></div>
                  </div>
                  <span className="font-montserrat font-bold text-gray-900 w-12">28%</span>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-white rounded-lg border-l-4 border-turquoise">
              <p className="text-sm text-gray-600">
                <strong className="text-gray-900">Nota:</strong> Dados baseados em estudos veterinários de 2023. 
                A prevalência varia conforme região e manejo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetabolicSyndrome;
