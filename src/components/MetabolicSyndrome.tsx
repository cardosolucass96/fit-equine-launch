
import { Button } from "@/components/ui/button";
import { Download, TrendingUp, Heart, Shield } from "lucide-react";

const obesityStudies = [
  {
    label: "Mangalarga Marchador atletas no Brasil",
    value: 31.25,
    displayValue: "31,25%",
    ref: "(1)"
  },
  {
    label: "Cavalos de lazer na Escócia",
    value: 45,
    displayValue: "45%",
    ref: "(2)"
  },
  {
    label: "Cavalos Islandeses na Dinamarca",
    value: 10.2,
    displayValue: "10,2%",
    ref: "(3)"
  },
  {
    label: "Cavalos no Sudoeste da Virgínia, EUA",
    value: 18.7,
    displayValue: "18,7%",
    ref: "(4)"
  }
];

const hyperinsulinemiaStudies = [
  {
    label: "Pôneis na Austrália",
    value: 27,
    displayValue: "27%",
    ref: "(1)"
  },
  {
    label: "Equinos em Ohio, EUA",
    value: 22.3,
    displayValue: "22,3%",
    ref: "(2)"
  }
];

const MetabolicSyndrome = () => {
  const handleDownload = () => {
    const formElement = document.getElementById('lead-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const maxObesityValue = Math.max(...obesityStudies.map((item) => item.value));
  const maxHyperinsulinemiaValue = Math.max(...hyperinsulinemiaStudies.map((item) => item.value));

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-gray-900 leading-tight">
              Saúde Digestiva e Metabólica:
              <span className="text-turquoise"> em foco</span>
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              O manejo nutricional de equinos sensíveis pede formulações com menor teor de amido,
              maior inclusão de fibras de alta digestibilidade e ingredientes funcionais capazes de
              contribuir para o equilíbrio metabólico e gastrointestinal.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <TrendingUp className="h-6 w-6 text-turquoise mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-montserrat font-semibold text-gray-900 mb-2">Controle Glicêmico</h4>
                  <p className="text-gray-600">Baixo amido e zero melaço ajudam a reduzir picos de glicose e insulina, com mais segurança metabólica.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Heart className="h-6 w-6 text-turquoise mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-montserrat font-semibold text-gray-900 mb-2">Saúde Metabólica</h4>
                  <p className="text-gray-600">Melhora da sensibilidade à insulina e redução do estresse oxidativo.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Shield className="h-6 w-6 text-turquoise mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-montserrat font-semibold text-gray-900 mb-2">Suporte Digestivo</h4>
                  <p className="text-gray-600">Fibras de alta digestibilidade, alfafa peletizada, pré e probióticos apoiam a microbiota e a saúde gastrointestinal.</p>
                </div>
              </div>
            </div>

            <Button 
              onClick={handleDownload}
              variant="outline"
              className="border-turquoise text-turquoise hover:bg-turquoise hover:text-white font-montserrat font-semibold transition-all duration-300"
            >
              <Download className="h-4 w-4 mr-2" />
              Quero acessar os materiais técnicos
            </Button>
          </div>

          {/* Infographic */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-xl font-montserrat font-bold text-center text-gray-900 mb-8">
              Prevalência estimada em estudos com equinos
            </h3>
            
            <div className="space-y-8">
              <div>
                <h4 className="font-montserrat font-semibold text-gray-900 mb-4">Obesidade em equinos</h4>
                <div className="space-y-4">
                  {obesityStudies.map((study) => (
                    <div key={study.label}>
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <span className="text-sm text-gray-600 leading-relaxed">
                          {study.label} <span className="text-gray-400">{study.ref}</span>
                        </span>
                        <span className="font-montserrat font-bold text-gray-900 whitespace-nowrap">
                          {study.displayValue}
                        </span>
                      </div>
                      <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-turquoise rounded-full"
                          style={{ width: `${(study.value / maxObesityValue) * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-montserrat font-semibold text-gray-900 mb-4">Hiperinsulinemia em equinos</h4>
                <div className="space-y-4">
                  {hyperinsulinemiaStudies.map((study) => (
                    <div key={study.label}>
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <span className="text-sm text-gray-600 leading-relaxed">
                          {study.label} <span className="text-gray-400">{study.ref}</span>
                        </span>
                        <span className="font-montserrat font-bold text-gray-900 whitespace-nowrap">
                          {study.displayValue}
                        </span>
                      </div>
                      <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-turquoise rounded-full"
                          style={{ width: `${(study.value / maxHyperinsulinemiaValue) * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-white rounded-lg border-l-4 border-turquoise">
              <p className="text-sm text-gray-600 leading-relaxed">
                <strong className="text-gray-900">Referências:</strong> Rosa (2024); Wyse et al. (2008);
                Jensen et al. (2016); Thatcher et al. (2012); Morgan et al. (2014); Muno et al. (2009).
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mt-2">
                As prevalências variam conforme a população avaliada, o manejo e os critérios de
                classificação adotados em cada estudo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetabolicSyndrome;
