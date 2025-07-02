import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Waves, Zap, Dna } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const IngredientsSection = () => {
  const compositionData = [
    { component: "Proteína Bruta", value: "140 g", type: "mín." },
    { component: "Extrato Etéreo", value: "70 g", type: "mín." },
    { component: "Amido", value: "150 g", type: "máx." },
    { component: "Lithothamnium sp.", value: "10 g", type: "mín." },
    { component: "Cromo Orgânico", value: "1,0 mg", type: "mín." },
    { component: "Mananoligossacarídeos (MOS)", value: "420 mg", type: "mín." },
    { component: "Betaglucanos", value: "780 mg", type: "mín." },
    { component: "Saccharomyces cerevisiae", value: "15×10⁹ UFC", type: "mín." }
  ];

  return (
    <section id="ingredientes" className="py-20 bg-gradient-to-b from-turquoise/10 via-white to-turquoise/5">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-4 text-gray-900">
            Ingredientes Funcionais e Composição Garantida
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Cada ingrediente é cuidadosamente selecionado por suas propriedades funcionais 
            e benefícios específicos para a saúde equina
          </p>
        </div>

        <Tabs defaultValue="ingredients" className="w-full">
          {/* TabsList oculto mas mantido no código para fácil reexibição */}
          <TabsList className="hidden">
            <TabsTrigger value="ingredients">Ingredientes Funcionais</TabsTrigger>
            <TabsTrigger value="composition">Composição Garantida</TabsTrigger>
          </TabsList>

          <TabsContent value="ingredients" className="space-y-8">
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-turquoise/30 shadow-none hover:shadow-lg hover:shadow-turquoise/10 transition-all duration-300 bg-white/90">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12  bg-turquoise rounded-lg flex items-center justify-center">
                      <Waves className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-montserrat text-gray-900">Lithothamnium sp.</CardTitle>
                      <Badge variant="secondary" className="mt-1 bg-turquoise/10 text-turquoise">Alga Calcária Marinha</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-turquoise mb-2">Principais nutrientes:</h4>
                      <p className="text-sm text-gray-600">
                        Cálcio, Magnésio e compostos bioativos
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-turquoise mb-2">Ações fisiológicas:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Anti-inflamatória (reduz marcadores inflamatórios sistêmicos)</li>
                        <li>• Tamponante gástrico (neutraliza excesso de acidez, protege mucosa)</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-turquoise/30 shadow-none hover:shadow-lg hover:shadow-turquoise/10 transition-all duration-300 bg-white/90">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12  bg-turquoise rounded-lg flex items-center justify-center">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-montserrat text-gray-900">Cromo Orgânico</CardTitle>
                      <Badge variant="secondary" className="mt-1 bg-turquoise/10 text-turquoise">Mineral Quelatado</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-turquoise mb-2">Tipo de mineral:</h4>
                      <p className="text-sm text-gray-600">
                        Cromo quelatado (orgânico)
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-turquoise mb-2">Benefícios metabólicos:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Melhora da sensibilidade à insulina</li>
                        <li>• Otimização do metabolismo da glicose</li>
                        <li>• Contribui para manutenção de níveis glicêmicos estáveis</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-turquoise/30 shadow-none hover:shadow-lg hover:shadow-turquoise/10 transition-all duration-300 bg-white/90">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12  bg-turquoise rounded-lg flex items-center justify-center">
                      <Dna className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-montserrat text-gray-900">Aminoácidos Essenciais</CardTitle>
                      <Badge variant="secondary" className="mt-1 bg-turquoise/10 text-turquoise">Síntese Proteica</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-turquoise mb-2">Função principal:</h4>
                      <p className="text-sm text-gray-600">
                        Fornecimento de substrato para síntese proteica
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-turquoise mb-2">Importância em dietas restritivas:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Preservação da massa muscular</li>
                        <li>• Redução do catabolismo proteico</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* TabsContent de composição garantida segue comentado */}
          {/*
          <TabsContent value="composition">
            <Card className="border-turquoise/30 bg-white/90">
              <CardHeader>
                <CardTitle className="text-2xl text-center font-montserrat text-turquoise">
                  Composição Garantida (por kg de produto)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-turquoise/20">
                        <th className="text-left py-3 px-4 font-semibold text-turquoise">Componente</th>
                        <th className="text-center py-3 px-4 font-semibold text-turquoise">Garantia</th>
                        <th className="text-center py-3 px-4 font-semibold text-turquoise">Tipo</th>
                      </tr>
                    </thead>
                    <tbody>
                      {compositionData.map((item, index) => (
                        <tr key={index} className="border-b border-turquoise/10 hover:bg-turquoise/5">
                          <td className="py-3 px-4 font-medium text-gray-900">{item.component}</td>
                          <td className="py-3 px-4 text-center font-semibold text-turquoise-dark">{item.value}</td>
                          <td className="py-3 px-4 text-center">
                            <Badge variant={item.type === "máx." ? "destructive" : "default"} className="bg-turquoise/10 text-turquoise">
                              {item.type}
                            </Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <div className="mt-6 p-4 bg-turquoise/10 rounded-lg">
                  <p className="text-sm text-gray-600 text-center">
                    Valores garantidos por análises laboratoriais realizadas conforme metodologias oficiais. 
                    Produto registrado no Ministério da Agricultura.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          */}
        </Tabs>
      </div>
    </section>
  );
};

export default IngredientsSection;