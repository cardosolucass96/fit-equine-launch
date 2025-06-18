
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";
import { Check, ChevronsUpDown } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Clock, Users, ExternalLink } from "lucide-react";

const brazilianStates = [
  "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA",
  "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN",
  "RS", "RO", "RR", "SC", "SP", "SE", "TO"
];

const professions = [
  "Zootecnista",
  "Criador",
  "Veterinario",
  "Competidor",
  "Outro",
];

const formatWhatsApp = (value: string) => {
  const digits = value.replace(/\D/g, '').slice(0, 11);
  if (digits.length <= 2) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  }
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
};


const LeadForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    profession: "",
    state: "",
    city: "",
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_term: "",
    utm_content: "",
    lgpdConsent: false,
  });
  const [cities, setCities] = useState<string[]>([]);
  const [isLoadingCities, setIsLoadingCities] = useState(false);
  const [cityOpen, setCityOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  // Capture UTM parameters on load
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setFormData((prev) => ({
      ...prev,
      utm_source: params.get('utm_source') || '',
      utm_medium: params.get('utm_medium') || '',
      utm_campaign: params.get('utm_campaign') || '',
      utm_term: params.get('utm_term') || '',
      utm_content: params.get('utm_content') || '',
    }));
  }, []);

  useEffect(() => {
    const uf = formData.state;
    if (!uf) {
      setCities([]);
      return;
    }

    const cacheKey = `cities-${uf}`;
    const cached = sessionStorage.getItem(cacheKey);
    if (cached) {
      setCities(JSON.parse(cached));
      return;
    }

    const fetchCities = async () => {
      setIsLoadingCities(true);
      try {
        const response = await fetch(
          `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios?orderBy=nome`
        );
        const data = await response.json();
        const names = data.map((c: { nome: string }) => c.nome);
        setCities(names);
        sessionStorage.setItem(cacheKey, JSON.stringify(names));
      } catch (error) {
        toast({
          title: 'Erro',
          description: 'Falha ao carregar cidades, tente novamente.',
          variant: 'destructive',
        });
      } finally {
        setIsLoadingCities(false);
      }
    };

    fetchCities();
  }, [formData.state, toast]);

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
      ...(field === 'state' && { city: '' })
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate required fields
    if (!formData.name || !formData.email || !formData.whatsapp || !formData.lgpdConsent) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // Simulate API call to MailerLite
      console.log("Submitting form data:", formData);
      
      // Send event to dataLayer for Google Tag Manager
      if (typeof window !== 'undefined' && window.dataLayer) {
        window.dataLayer.push({
          event: 'lead_captured',
          form_name: 'performance_fit_waitlist',
          user_data: {
            email: formData.email,
            state: formData.state,
            city: formData.city
          }
        });
      }

      // Send data to external webhook without additional validation
      await fetch('https://webhook-n8n.grupovorp.com/webhook/integral-mix', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      }).catch((error) => {
        console.error('Failed to send webhook', error);
      });

      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setIsSubmitted(true);
      toast({
        title: "Sucesso!",
        description: "Seus dados foram enviados. Clique no botão abaixo para entrar no grupo WhatsApp.",
      });

    } catch (error) {
      toast({
        title: "Erro",
        description: "Ocorreu um erro ao enviar seus dados. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppRedirect = () => {
    // Redirect to WhatsApp group after 1.5s delay
    setTimeout(() => {
      window.open('https://chat.whatsapp.com/grupowhatsapp.fit', '_blank');
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <section id="lead-form" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-green-50 border border-green-200 rounded-2xl p-8 mb-8">
              <div className="text-green-600 text-6xl mb-4">✓</div>
              <h3 className="text-2xl font-montserrat font-bold text-gray-900 mb-4">
                Obrigado! Você está na lista VIP
              </h3>
              <p className="text-gray-600 mb-6">
                Clique no botão abaixo para entrar no grupo exclusivo de WhatsApp e receber 
                todas as novidades sobre a Performance FIT em primeira mão.
              </p>
              <Button
                onClick={handleWhatsAppRedirect}
                className="bg-green-500 hover:bg-green-600 text-white font-montserrat font-semibold text-lg px-8 py-3"
              >
                <ExternalLink className="h-5 w-5 mr-2" />
                Entrar no grupo VIP do WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="lead-form" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-gray-900 mb-6">
              Entre para a lista VIP e receba acesso ao nosso grupo exclusivo
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Seja o primeiro a saber sobre o lançamento da Performance FIT e tenha acesso 
              a conteúdos técnicos exclusivos.
            </p>

            {/* Urgency Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
              <div className="flex items-center gap-2 text-turquoise">
                <Clock className="h-5 w-5" />
                <span className="font-montserrat font-semibold">Lançamento em Jul/2025</span>
              </div>
              <div className="flex items-center gap-2 text-turquoise">
                <Users className="h-5 w-5" />
                <span className="font-montserrat font-semibold">Vagas limitadas no grupo</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 rounded-2xl p-8">
            <input type="hidden" id="utm_source" name="utm_source" value={formData.utm_source} />
            <input type="hidden" id="utm_medium" name="utm_medium" value={formData.utm_medium} />
            <input type="hidden" id="utm_campaign" name="utm_campaign" value={formData.utm_campaign} />
            <input type="hidden" id="utm_term" name="utm_term" value={formData.utm_term} />
            <input type="hidden" id="utm_content" name="utm_content" value={formData.utm_content} />
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="font-montserrat font-semibold">
                  Nome completo *
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Seu nome completo"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="h-12"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="font-montserrat font-semibold">
                  E-mail corporativo *
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="h-12"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="whatsapp" className="font-montserrat font-semibold">
                  WhatsApp *
                </Label>
                <Input
                  id="whatsapp"
                  type="tel"
                  placeholder="(11) 99999-9999"
                  value={formData.whatsapp}
                  onChange={(e) =>
                    handleInputChange('whatsapp', formatWhatsApp(e.target.value))
                  }
                  className="h-12"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="profession" className="font-montserrat font-semibold">
                  Profissão
                </Label>
                <Select onValueChange={(value) => handleInputChange('profession', value)}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Selecione sua profissão" />
                  </SelectTrigger>
                  <SelectContent>
                    {professions.map((profession) => (
                      <SelectItem key={profession} value={profession}>
                        {profession}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="state" className="font-montserrat font-semibold">
                Estado
              </Label>
              <Select onValueChange={(value) => handleInputChange('state', value)}>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Selecione seu estado" />
                </SelectTrigger>
                <SelectContent>
                  {brazilianStates.map((state) => (
                    <SelectItem key={state} value={state}>
                      {state}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="city" className="font-montserrat font-semibold">
                Cidade
              </Label>
              <Popover open={cityOpen} onOpenChange={setCityOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    className="h-12 w-full justify-between"
                    disabled={!formData.state || isLoadingCities}
                  >
                    {formData.city
                      ? formData.city
                      : isLoadingCities
                        ? 'Carregando...'
                        : 'Selecione sua cidade'}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0">
                  <Command>
                    <CommandInput placeholder="Busque sua cidade..." />
                    <CommandList>
                      <CommandEmpty>Nenhuma cidade encontrada.</CommandEmpty>
                      <CommandGroup>
                        {cities.map((city) => (
                          <CommandItem
                            key={city}
                            value={city}
                            onSelect={(currentValue) => {
                              handleInputChange('city', currentValue)
                              setCityOpen(false)
                            }}
                          >
                            <Check
                              className={cn(
                                'mr-2 h-4 w-4',
                                formData.city === city ? 'opacity-100' : 'opacity-0'
                              )}
                            />
                            {city}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>

            <div className="flex items-start space-x-2">
              <Checkbox
                id="lgpd"
                checked={formData.lgpdConsent}
                onCheckedChange={(checked) => handleInputChange('lgpdConsent', checked as boolean)}
                className="mt-1"
                required
              />
              <Label 
                htmlFor="lgpd" 
                className="text-sm text-gray-600 leading-relaxed cursor-pointer"
              >
                Aceito receber comunicações da Integral MIX sobre lançamentos de produtos, 
                conteúdos técnicos e eventos. Posso cancelar a qualquer momento conforme nossa 
                <span className="text-turquoise hover:underline"> Política de Privacidade</span>.
              </Label>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-turquoise hover:bg-turquoise-dark text-white font-montserrat font-semibold text-lg py-4 h-auto transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:transform-none"
            >
              {isSubmitting ? 'Aguarde...' : 'Aguardar novidades'}
            </Button>

            <p className="text-center text-sm text-gray-500 mt-4">
              <strong className="text-turquoise">Vagas limitadas no grupo.</strong> Garante seu lugar antes do simpósio!
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
