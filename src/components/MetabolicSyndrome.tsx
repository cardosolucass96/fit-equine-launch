
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
              Saúde metabólica: 
              <span className="text-turquoise"> Melhora da sensibilidade à insulina e redução do estresse oxidativo</span>
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
                <Shield className="h-6 w-6 text-turquoise mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-montserrat font-semibold text-gray-900 mb-2">Prevenção de Laminite</h4>
                  <p className="text-gray-600">Protocolo nutricional específico para reduzir riscos inflamatórios.</p>
                </div>
              </div>
            </div>

            <Button
              onClick={handleDownload}
              className="bg-turquoise hover:bg-turquoise-dark text-white font-montserrat font-semibold transition-all duration-300"
            >
              Saber mais
            </Button>
          </div>

          {/* Infographic */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-xl font-montserrat font-bold text-center text-gray-900 mb-8">
              Prevalência estimada da obesidade em equinos
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Mangalarga Marchador atletas no Brasil<sup>(1)</sup></span>
                <div className="flex items-center gap-3">
                  <div className="w-32 h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div className="w-3/4 h-full bg-turquoise rounded-full"></div>
                  </div>
                  <span className="font-montserrat font-bold text-gray-900 w-12">31,25%</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-600">Cavalos de lazer na Escócia<sup>(2)</sup></span>
                <div className="flex items-center gap-3">
                  <div className="w-32 h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div className="w-3/4 h-full bg-turquoise rounded-full"></div>
                  </div>
                  <span className="font-montserrat font-bold text-gray-900 w-12">45%</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-600">Cavalos Islandeses na Dinamarca<sup>(3)</sup></span>
                <div className="flex items-center gap-3">
                  <div className="w-32 h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div className="w-14 h-full bg-turquoise rounded-full"></div>
                  </div>
                  <span className="font-montserrat font-bold text-gray-900 w-12">10,2%</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-600">Cavalos no Sudoeste da Virgínia - EUA<sup>(4)</sup></span>
                <div className="flex items-center gap-3">
                  <div className="w-32 h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div className="w-2/3 h-full bg-turquoise rounded-full"></div>
                  </div>
                  <span className="font-montserrat font-bold text-gray-900 w-12">18,7%</span>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-white rounded-lg border-l-4 border-turquoise">
              <p className="text-[10px]  text-gray-600">
                <strong className="text-gray-900">Referências:</strong> (1) ROSA, S.W. (2024). DISTRIBUIÇÃO DE ESCORE DE CONDIÇÃO CORPORAL EM EQUINOS ATLETAS DA RAÇA MANGALARGA MARCHADOR.<br /><br />
(2) WYSE, C. A., MCNIE, K. A., TANNAHILL, V. J., MURRAY, J. K. & LOVE, S. (2008)Prevalence of obesity in riding horses in Scotland. Veterinary Record 162, 590-591<br /><br />
(3) JENSEN RB, DANIELSEN SH, TAUSON AH. Body condition score, morphometric measurements and estimation of body weight in mature Icelandic horses in Denmark. Acta Vet Scand. v. 58, n.1, p. 59 – 63. 2016.<br /><br />
(4) THATCHER, C. D., PLEASAN T, R. S., GEOR, R. J. & ELVINGER, F. (2012) Prevalence of overconditioning in mature horses in southwest Virginia during thesummer. Journal of Veterinary Internal Medicine 26, 1413-1418.

              </p>
            </div>
          </div>
          {/* Infographic */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-xl font-montserrat font-bold text-center text-gray-900 mb-8">
              Prevalência de hiperinsulinemia em equinos
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Pôneis na Austrália<sup>(1)</sup></span>
                <div className="flex items-center gap-3">
                  <div className="w-32 h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div className="w-3/4 h-full bg-turquoise rounded-full"></div>
                  </div>
                  <span className="font-montserrat font-bold text-gray-900 w-12">31,25%</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-600">Equinos em Ohio<sup>(2)</sup></span>
                <div className="flex items-center gap-3">
                  <div className="w-32 h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div className="w-29 h-full bg-turquoise rounded-full"></div>
                  </div>
                  <span className="font-montserrat font-bold text-gray-900 w-12">45%</span>
                </div>
              </div>

            <div className="mt-8 p-4 bg-white rounded-lg border-l-4 border-turquoise">
              <p className="text-[10px]  text-gray-600">
                <strong className="text-gray-900">Referências:</strong> (1) MORGAN, R. A., MCGOWAN, T. W. & MCGOWAN, C. M. (2014) Prevalenceand risk factors for hyperinsulinaemia in ponies in queensland, Australia. AustralianVeterinary Journal 92, 101-106.<br /><br />
(2) MUNO, J., GALLATIN, L. & GEOR, R. J. (2009) Prevalence and risk factors for hyper-insulinemia in clinically normal horses in central Ohio. Journal of Veterinary InternalMedicine 23, 721.<br /><br />

              </p>
            </div>
          </div>
        </div>
      </div>
        </div>
    </section>
  );
};

export default MetabolicSyndrome;
