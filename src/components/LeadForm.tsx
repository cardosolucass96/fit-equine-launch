
import { useState } from "react";
import { v4 as uuid } from 'uuid';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Clock, Users, ExternalLink } from "lucide-react";

const brazilianStates = [
  "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", 
  "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", 
  "RS", "RO", "RR", "SC", "SP", "SE", "TO"
];

const LeadForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    crm: "",
    state: "",
    lgpdConsent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const eventID = uuid();
    const searchParams = typeof window !== 'undefined'
      ? new URLSearchParams(window.location.search)
      : null;

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
      if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('track', 'Lead', {
          content_name: formData.crm,
          eventID
        });
      }

      const response = await fetch('/api/fb', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          city: "",
          profession: "",
          utm_source: searchParams?.get('utm_source') ?? "",
          utm_medium: searchParams?.get('utm_medium') ?? "",
          utm_campaign: searchParams?.get('utm_campaign') ?? "",
          utm_term: searchParams?.get('utm_term') ?? "",
          utm_content: searchParams?.get('utm_content') ?? "",
          event_id: eventID
        })
      });

      if (!response.ok) {
        throw new Error('Lead submission failed');
      }
      
      // Send event to dataLayer for Google Tag Manager
      if (typeof window !== 'undefined' && window.dataLayer) {
        window.dataLayer.push({
          event: 'lead_captured',
          form_name: 'performance_fit_waitlist',
          user_data: {
            email: formData.email,
            state: formData.state
          }
        });
      }

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
      window.open('https://chat.whatsapp.com/Ecq3icv0fbK5Wm6yBzXdhU?mode=gi_t', '_blank');
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
                Entrar no grupo VIP
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
                <span className="font-montserrat font-semibold">Lançamento em 04/05/2026</span>
              </div>
              <div className="flex items-center gap-2 text-turquoise">
                <Users className="h-5 w-5" />
                <span className="font-montserrat font-semibold">Vagas limitadas no grupo</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 rounded-2xl p-8">
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
                  onChange={(e) => handleInputChange('whatsapp', e.target.value)}
                  className="h-12"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="crm" className="font-montserrat font-semibold">
                  CRM
                </Label>
                <Input
                  id="crm"
                  type="text"
                  placeholder="Número do CRM"
                  value={formData.crm}
                  onChange={(e) => handleInputChange('crm', e.target.value)}
                  className="h-12"
                />
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
