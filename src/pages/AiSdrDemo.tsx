import { useMemo, useState } from "react";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Clock3,
  Headphones,
  Mic,
  PhoneCall,
  PhoneIncoming,
  PhoneOutgoing,
  ShieldAlert,
  Sparkles,
  Volume2,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

type DemoMode = "outbound" | "inbound";

type CallStatus = "idle" | "connecting" | "live";

const modes: Record<DemoMode, {
  eyebrow: string;
  title: string;
  description: string;
  icon: typeof PhoneOutgoing;
  script: string[];
}> = {
  outbound: {
    eyebrow: "Ativo · prospecção",
    title: "SDR de IA ligando para o lead",
    description:
      "Simule uma ligação ativa: a IA abre a conversa, qualifica dor, orçamento e momento, e propõe o próximo passo.",
    icon: PhoneOutgoing,
    script: [
      "Oi, aqui é a Sofia, SDR de IA. Vi que você demonstrou interesse em automação comercial — posso te fazer 2 perguntas rápidas?",
      "Hoje vocês já têm alguém ligando para leads novos ou essa etapa ainda fica com o time comercial?",
      "Se fizer sentido, eu posso agendar uma conversa de 15 minutos e enviar o resumo desta ligação para o consultor humano.",
    ],
  },
  inbound: {
    eyebrow: "Passivo · atendimento",
    title: "Lead liga e a IA atende na hora",
    description:
      "Simule uma ligação recebida: a IA entende a demanda, responde dúvidas, coleta contexto e encaminha o lead quente.",
    icon: PhoneIncoming,
    script: [
      "Olá! Você ligou para o laboratório de SDR por IA. Me conta rapidinho: você quer captar mais leads ou atender melhor quem já chama?",
      "Entendi. Qual é o volume médio de contatos por dia e qual canal mais pesa hoje: WhatsApp, formulário ou telefone?",
      "Perfeito. Vou registrar seu cenário e sugerir um fluxo inicial para validar com uma prova de conceito.",
    ],
  },
};

const quickPrompts = [
  "Quero testar para clínica / consultoria",
  "Tenho uma lista de leads para prospecção",
  "Quero receber ligações fora do horário comercial",
];

const AiSdrDemo = () => {
  const [mode, setMode] = useState<DemoMode>("outbound");
  const [status, setStatus] = useState<CallStatus>("idle");
  const [selectedPrompt, setSelectedPrompt] = useState(quickPrompts[0]);
  const [leadName, setLeadName] = useState("");
  const [leadPhone, setLeadPhone] = useState("");

  const activeMode = modes[mode];
  const ActiveIcon = activeMode.icon;

  const statusText = useMemo(() => {
    if (status === "connecting") return "Conectando sessão de voz…";
    if (status === "live") return "Demo em andamento · microfone liberado";
    return "Pronto para iniciar uma simulação";
  }, [status]);

  const handleStartDemo = () => {
    setStatus("connecting");
    window.setTimeout(() => setStatus("live"), 900);
  };

  const handleReset = () => {
    setStatus("idle");
  };

  return (
    <div className="min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.24),_transparent_34%),radial-gradient(circle_at_70%_20%,_rgba(168,85,247,0.22),_transparent_30%),linear-gradient(135deg,_rgba(15,23,42,0),_rgba(14,165,233,0.08))]" />

      <main className="relative mx-auto flex w-full max-w-7xl flex-col gap-12 px-5 py-8 sm:px-8 lg:px-10 lg:py-12">
        <nav className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-500/30">
              <Bot className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-semibold tracking-wide">Laboratório SDR IA</p>
              <p className="text-xs text-slate-300">MVP experimental para Instagram</p>
            </div>
          </div>
          <a href="#testar" className="hidden text-sm font-semibold text-cyan-200 transition hover:text-white sm:inline-flex">
            Testar agora
          </a>
        </nav>

        <section className="grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100">
              <Sparkles className="h-4 w-4" />
              OpenAI Realtime · voz↔voz inteligente
            </div>

            <div className="space-y-5">
              <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Teste um <span className="text-cyan-300">SDR por IA</span> em uma ligação de voz.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-300">
                Criei dois fluxos rápidos para mostrar, na prática, como um agente de voz pode prospectar leads ou atender chamadas recebidas usando um modelo Realtime da OpenAI.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {[
                { icon: Mic, label: "Conversa natural", text: "entrada e saída por áudio" },
                { icon: Zap, label: "Baixa latência", text: "respostas em tempo real" },
                { icon: ShieldAlert, label: "Experimental", text: "MVP para validação" },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 shadow-2xl shadow-slate-950/20 backdrop-blur">
                  <item.icon className="mb-3 h-5 w-5 text-cyan-300" />
                  <p className="font-bold">{item.label}</p>
                  <p className="text-sm text-slate-400">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="rounded-full bg-cyan-300 px-7 font-bold text-slate-950 hover:bg-cyan-200">
                <a href="#testar">
                  Escolher demo <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full border-white/20 bg-white/5 px-7 font-bold text-white hover:bg-white/10 hover:text-white">
                <a href="#como-funciona">Ver arquitetura</a>
              </Button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -inset-6 rounded-[3rem] bg-cyan-400/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-900/90 p-4 shadow-2xl shadow-cyan-950/50 backdrop-blur-xl">
              <div className="rounded-[2rem] border border-white/10 bg-slate-950 p-5">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Voice Agent</p>
                    <p className="text-lg font-bold">Sofia · SDR IA</p>
                  </div>
                  <div className={cn("flex h-12 w-12 items-center justify-center rounded-full", status === "live" ? "bg-emerald-400 text-slate-950" : "bg-cyan-300 text-slate-950")}>
                    <PhoneCall className="h-5 w-5" />
                  </div>
                </div>

                <div className="space-y-4 rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 p-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                      <ActiveIcon className="h-6 w-6 text-cyan-300" />
                    </div>
                    <div>
                      <p className="text-sm text-cyan-200">{activeMode.eyebrow}</p>
                      <p className="font-bold">{activeMode.title}</p>
                    </div>
                  </div>

                  <div className="flex items-end justify-between gap-4 rounded-2xl border border-white/10 bg-black/30 p-4">
                    <div className="flex items-end gap-1.5">
                      {[32, 48, 28, 58, 42, 64, 36, 52, 30].map((height, index) => (
                        <span
                          key={`${height}-${index}`}
                          className={cn("w-2 rounded-full bg-cyan-300/80", status === "live" && "animate-pulse")}
                          style={{ height }}
                        />
                      ))}
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-slate-400">Status</p>
                      <p className="text-sm font-semibold text-emerald-300">{statusText}</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {activeMode.script.map((line, index) => (
                      <div key={line} className="rounded-2xl bg-white/[0.06] p-3 text-sm leading-6 text-slate-300">
                        <span className="mr-2 font-bold text-cyan-300">{String(index + 1).padStart(2, "0")}</span>
                        {line}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="testar" className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-md sm:p-8">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-cyan-200">Escolha o cenário</p>
            <h2 className="text-3xl font-black">Dois SDRs para testar em minutos</h2>
            <p className="mt-4 text-slate-300">
              A demo abaixo é propositalmente simples: ela mostra o roteiro, a intenção da chamada e o ponto em que a integração real com telefonia/SIP entraria.
            </p>

            <div className="mt-6 grid gap-4">
              {(Object.keys(modes) as DemoMode[]).map((option) => {
                const item = modes[option];
                const Icon = item.icon;

                return (
                  <button
                    key={option}
                    onClick={() => {
                      setMode(option);
                      setStatus("idle");
                    }}
                    className={cn(
                      "rounded-3xl border p-5 text-left transition",
                      mode === option
                        ? "border-cyan-300 bg-cyan-300/15 shadow-lg shadow-cyan-950/40"
                        : "border-white/10 bg-slate-950/40 hover:border-white/25 hover:bg-white/10"
                    )}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-cyan-200">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-cyan-200">{item.eyebrow}</p>
                        <p className="text-xl font-black">{item.title}</p>
                        <p className="mt-2 text-sm leading-6 text-slate-300">{item.description}</p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="rounded-[2rem] border border-cyan-300/20 bg-slate-900/90 p-6 shadow-2xl shadow-cyan-950/30 sm:p-8">
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-bold text-cyan-200">{activeMode.eyebrow}</p>
                <h3 className="text-2xl font-black">{activeMode.title}</h3>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
                <Clock3 className="h-4 w-4 text-cyan-300" />
                2 min de teste
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="leadName" className="text-slate-200">Seu nome</Label>
                <Input
                  id="leadName"
                  value={leadName}
                  onChange={(event) => setLeadName(event.target.value)}
                  placeholder="Ex.: Ana"
                  className="border-white/10 bg-white/5 text-white placeholder:text-slate-500"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="leadPhone" className="text-slate-200">Telefone para teste</Label>
                <Input
                  id="leadPhone"
                  value={leadPhone}
                  onChange={(event) => setLeadPhone(event.target.value)}
                  placeholder="(11) 99999-9999"
                  className="border-white/10 bg-white/5 text-white placeholder:text-slate-500"
                />
              </div>
            </div>

            <div className="mt-5 space-y-3">
              <Label className="text-slate-200">Contexto rápido</Label>
              <div className="flex flex-wrap gap-2">
                {quickPrompts.map((prompt) => (
                  <button
                    key={prompt}
                    onClick={() => setSelectedPrompt(prompt)}
                    className={cn(
                      "rounded-full border px-4 py-2 text-sm transition",
                      selectedPrompt === prompt
                        ? "border-cyan-300 bg-cyan-300 text-slate-950"
                        : "border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"
                    )}
                  >
                    {prompt}
                  </button>
                ))}
              </div>
              <Textarea
                value={selectedPrompt}
                onChange={(event) => setSelectedPrompt(event.target.value)}
                className="min-h-24 border-white/10 bg-white/5 text-white placeholder:text-slate-500"
                placeholder="Descreva o cenário que você quer simular."
              />
            </div>

            <div className="mt-6 rounded-3xl border border-white/10 bg-black/25 p-5">
              <div className="flex items-center gap-3">
                <div className={cn("flex h-12 w-12 items-center justify-center rounded-full", status === "live" ? "bg-emerald-400 text-slate-950" : "bg-cyan-300 text-slate-950")}>
                  {status === "live" ? <Volume2 className="h-5 w-5" /> : <Headphones className="h-5 w-5" />}
                </div>
                <div>
                  <p className="font-bold">{statusText}</p>
                  <p className="text-sm text-slate-400">
                    {status === "live"
                      ? "Agora entraria o WebRTC/SIP com o agente de voz em tempo real."
                      : "Clique para iniciar o fluxo visual do MVP."}
                  </p>
                </div>
              </div>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Button onClick={handleStartDemo} className="rounded-full bg-emerald-400 font-bold text-slate-950 hover:bg-emerald-300" disabled={status === "connecting"}>
                  <PhoneCall className="h-4 w-4" />
                  {status === "live" ? "Reiniciar simulação" : "Iniciar chamada demo"}
                </Button>
                <Button onClick={handleReset} variant="outline" className="rounded-full border-white/15 bg-white/5 text-white hover:bg-white/10 hover:text-white">
                  Encerrar
                </Button>
              </div>
            </div>

            <p className="mt-5 rounded-2xl bg-amber-300/10 p-4 text-sm leading-6 text-amber-100">
              Aviso: este link é um MVP experimental. Para ligar de verdade para números de telefone ou receber chamadas, a próxima etapa é conectar telefonia/SIP, consentimento, logs e regras de compliance.
            </p>
          </div>
        </section>

        <section id="como-funciona" className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-md sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-200">Como viraria produção</p>
              <h2 className="mt-3 text-3xl font-black">Arquitetura simples para validar demanda</h2>
              <p className="mt-4 text-slate-300">
                A página coleta interesse e demonstra o fluxo. A versão real usaria uma sessão Realtime com áudio no navegador ou telefonia conectada para chamadas telefônicas.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {[
                { title: "1. Roteiro", text: "Definir ICP, objeções, perguntas de qualificação e handoff humano." },
                { title: "2. Voz IA", text: "Conectar o agente Realtime para conversar por áudio com baixa latência." },
                { title: "3. Telefonia", text: "Adicionar SIP/provedor de chamadas, opt-in, gravação e auditoria." },
              ].map((step) => (
                <div key={step.title} className="rounded-3xl border border-white/10 bg-slate-950/50 p-5">
                  <CheckCircle2 className="mb-4 h-6 w-6 text-emerald-300" />
                  <p className="text-lg font-black">{step.title}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AiSdrDemo;
