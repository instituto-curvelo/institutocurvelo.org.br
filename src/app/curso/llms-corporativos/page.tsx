"use client";

import { useEffect } from "react";
import {
  Clock,
  Monitor,
  Calendar,
  Award,
  Check,
  MessageCircle,
  ArrowRight,
  Mail,
  Phone,
} from "lucide-react";
import { useLanguage, type Localized } from "@/lib/i18n";
import { courseContact, whatsappUrl } from "@/lib/site";
import {
  Container,
  Section,
  SectionHeading,
  FieldLabel,
  TickRule,
} from "@/components/section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const subNav: { label: Localized; href: string }[] = [
  { label: { pt: "Sobre o Curso", en: "About Course" }, href: "#about" },
  { label: { pt: "Programa", en: "Curriculum" }, href: "#curriculum" },
  { label: { pt: "Metodologia", en: "Methodology" }, href: "#methodology" },
  { label: { pt: "Certificação", en: "Certification" }, href: "#certification" },
  { label: { pt: "Contato", en: "Contact" }, href: "#contact" },
];

const details: Localized[] = [
  { pt: "8 semanas de capacitação intensiva", en: "8 weeks of intensive training" },
  {
    pt: "3 horas semanais com aulas ao vivo + laboratórios práticos",
    en: "3 hours weekly with live classes + practical labs",
  },
  {
    pt: "24 horas de conteúdo técnico especializado",
    en: "24 hours of specialized technical content",
  },
  {
    pt: "Turmas limitadas para aprendizado personalizado",
    en: "Limited classes for personalized learning",
  },
  { pt: "Ollama, FAISS, LoRA/PEFT, LightRAG", en: "Ollama, FAISS, LoRA/PEFT, LightRAG" },
  {
    pt: "Certificado de curso livre ao final",
    en: "Free course certificate upon completion",
  },
];

const benefits: Localized[] = [
  {
    pt: "Competência técnica para projetar soluções LLM corporativas",
    en: "Technical competency to design corporate LLM solutions",
  },
  {
    pt: "Experiência prática com fine-tuning e otimização de modelos",
    en: "Practical experience with model fine-tuning and optimization",
  },
  {
    pt: "Implementação de pipelines RAG e Graph-RAG avançados",
    en: "Implementation of advanced RAG and Graph-RAG pipelines",
  },
  {
    pt: "Metodologia hands-on com notebooks e laboratórios",
    en: "Hands-on methodology with notebooks and laboratories",
  },
  {
    pt: "Técnicas de avaliação e controle de qualidade em produção",
    en: "Quality control and evaluation techniques for production",
  },
];

const weeks: { title: Localized; topics: Localized[] }[] = [
  {
    title: { pt: "Fundamentos Técnicos dos LLMs", en: "LLM Technical Fundamentals" },
    topics: [
      {
        pt: "Arquitetura Transformer: atenção e encodings posicionais",
        en: "Transformer architecture: attention and positional encodings",
      },
      {
        pt: "Tipos de modelos: causal vs encoder-decoder vs encoder",
        en: "Model types: causal vs encoder-decoder vs encoder",
      },
      {
        pt: "Tokenização e análise de custos/latência",
        en: "Tokenization and cost/latency analysis",
      },
      {
        pt: "Lab: Profiling com Ollama (llama2 vs mistral)",
        en: "Lab: Profiling with Ollama (llama2 vs mistral)",
      },
    ],
  },
  {
    title: { pt: "Arquiteturas e Fine-Tuning", en: "Architectures and Fine-Tuning" },
    topics: [
      { pt: "Variantes GPT-style vs T5-style", en: "GPT-style vs T5-style variants" },
      {
        pt: "Técnicas de eficiência: quantização, pruning, distillation",
        en: "Efficiency techniques: quantization, pruning, distillation",
      },
      {
        pt: "Fine-tuning: full vs instruction vs LoRA/PEFT",
        en: "Fine-tuning: full vs instruction vs LoRA/PEFT",
      },
      {
        pt: "Lab: Experimento LoRA/PEFT com dataset corporativo",
        en: "Lab: LoRA/PEFT experiment with corporate dataset",
      },
    ],
  },
  {
    title: { pt: "Prompting Avançado e Verificação", en: "Advanced Prompting and Verification" },
    topics: [
      {
        pt: "Hard Prompt vs Soft Prompt e técnicas de controle",
        en: "Hard Prompt vs Soft Prompt and control techniques",
      },
      {
        pt: "Prompt chaining e templates reutilizáveis",
        en: "Prompt chaining and reusable templates",
      },
      {
        pt: "Verificação automática e citation forcing",
        en: "Automatic verification and citation forcing",
      },
      {
        pt: "Lab: Chains com verificação e avaliação A/B",
        en: "Lab: Chains with verification and A/B evaluation",
      },
    ],
  },
  {
    title: { pt: "Embeddings e RAG Tradicional", en: "Embeddings and Traditional RAG" },
    topics: [
      {
        pt: "Estratégias de chunking e escolha de modelos",
        en: "Chunking strategies and model selection",
      },
      {
        pt: "FAISS local: indexação, sharding e updates",
        en: "Local FAISS: indexing, sharding and updates",
      },
      {
        pt: "Pipeline RAG: retrievers e re-ranking híbrido",
        en: "RAG pipeline: retrievers and hybrid re-ranking",
      },
      {
        pt: "Lab: Pipeline completo RAG com Ollama",
        en: "Lab: Complete RAG pipeline with Ollama",
      },
    ],
  },
  {
    title: { pt: "MCP e Orquestração", en: "MCP and Orchestration" },
    topics: [
      {
        pt: "Model Context Protocol: schema e contratos",
        en: "Model Context Protocol: schema and contracts",
      },
      {
        pt: "Orquestração: vector store + KG + APIs empresariais",
        en: "Orchestration: vector store + KG + enterprise APIs",
      },
      {
        pt: "Timeout/fallback e observabilidade com tracing",
        en: "Timeout/fallback and observability with tracing",
      },
      {
        pt: "Lab: Orquestrador multi-fonte com logs de latência",
        en: "Lab: Multi-source orchestrator with latency logs",
      },
    ],
  },
  {
    title: { pt: "Knowledge Graphs Empresariais", en: "Enterprise Knowledge Graphs" },
    topics: [
      {
        pt: "Mapeamento ER/relacional para Knowledge Graphs",
        en: "ER/relational mapping to Knowledge Graphs",
      },
      {
        pt: "Geração de KG via LLM e políticas de versionamento",
        en: "KG generation via LLM and versioning policies",
      },
      {
        pt: "Provenance e governança de dados estruturados",
        en: "Provenance and structured data governance",
      },
      {
        pt: "Lab: Mini-ontologia corporativa com consultas",
        en: "Lab: Corporate mini-ontology with queries",
      },
    ],
  },
  {
    title: { pt: "Graph-RAG e LightRAG", en: "Graph-RAG and LightRAG" },
    topics: [
      {
        pt: "Graph-RAG: subgrafos como contexto relevante",
        en: "Graph-RAG: subgraphs as relevant context",
      },
      {
        pt: "Templates para grounding e evidências estruturadas",
        en: "Templates for grounding and structured evidence",
      },
      {
        pt: "LightRAG: otimizações para GraphRAG em produção",
        en: "LightRAG: production optimizations for GraphRAG",
      },
      { pt: "Lab: Endpoint híbrido Graph-RAG", en: "Lab: Hybrid Graph-RAG endpoint" },
    ],
  },
  {
    title: { pt: "Produção e Governança", en: "Production and Governance" },
    topics: [
      {
        pt: "Arquitetura de produção: microservices e SLOs",
        en: "Production architecture: microservices and SLOs",
      },
      {
        pt: "Observability: métricas de latência e hallucination rate",
        en: "Observability: latency and hallucination rate metrics",
      },
      { pt: "Segurança: PII, redaction, compliance", en: "Security: PII, redaction, compliance" },
      { pt: "Projeto final: PoC com RAG + KG + MCP", en: "Final project: PoC with RAG + KG + MCP" },
    ],
  },
];

const audience: Localized[] = [
  { pt: "Gestores de TI e inovação tecnológica", en: "IT and technological innovation managers" },
  { pt: "Cientistas de dados e engenheiros de ML", en: "Data scientists and ML engineers" },
  { pt: "Equipes técnicas em IA e automação", en: "Technical teams in AI and automation" },
  { pt: "Desenvolvedores de soluções corporativas", en: "Corporate solution developers" },
];

const methodology: Localized[] = [
  { pt: "Aulas ao vivo com demonstrações práticas", en: "Live classes with practical demonstrations" },
  {
    pt: "Laboratórios hands-on com notebooks interativos",
    en: "Hands-on laboratories with interactive notebooks",
  },
  {
    pt: "Projetos semanais com datasets corporativos",
    en: "Weekly projects with corporate datasets",
  },
  { pt: "Sessões de code review e melhores práticas", en: "Code review sessions and best practices" },
  { pt: "Projeto final com apresentação técnica", en: "Final project with technical presentation" },
];

const certification: Localized[] = [
  {
    pt: "Certificado de curso livre emitido ao final",
    en: "Free course certificate issued upon completion",
  },
  {
    pt: "Conforme Decreto Presidencial N° 5.154/2004",
    en: "According to Presidential Decree No. 5.154/2004",
  },
  {
    pt: "Válido para capacitação profissional técnica",
    en: "Valid for technical professional training",
  },
  {
    pt: "Comprovação de 24 horas de treinamento especializado",
    en: "Proof of 24 hours of specialized training",
  },
];

function CheckList({ items }: { items: Localized[] }) {
  const { t } = useLanguage();
  return (
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2.5">
          <Check className="mt-0.5 size-4 shrink-0 text-teal-500" />
          <span className="text-muted-foreground">{t(item)}</span>
        </li>
      ))}
    </ul>
  );
}

export default function LLMCoursePage() {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = t({
      pt: "LLMs Corporativos | Instituto Curvelo",
      en: "Corporate LLMs | Instituto Curvelo",
    });
  }, [t]);

  const openWhatsApp = () => {
    const msg = t({
      pt: "Olá! Gostaria de solicitar uma proposta para o curso de LLMs Corporativos.",
      en: "Hello! I would like to request a proposal for the Corporate LLMs course.",
    });
    window.open(whatsappUrl(msg), "_blank", "noopener,noreferrer");
  };

  const metrics: { icon: typeof Clock; k: Localized; v: Localized }[] = [
    { icon: Clock, k: { pt: "Carga", en: "Hours" }, v: { pt: "24 horas", en: "24 hours" } },
    { icon: Monitor, k: { pt: "Formato", en: "Format" }, v: { pt: "Virtual", en: "Virtual" } },
    { icon: Calendar, k: { pt: "Duração", en: "Duration" }, v: { pt: "8 semanas", en: "8 weeks" } },
    {
      icon: Award,
      k: { pt: "Certificado", en: "Certificate" },
      v: { pt: "Certificado incluso", en: "Certificate included" },
    },
  ];

  return (
    <>
      {/* ---------- Sticky in-page sub-nav ---------- */}
      <nav className="sticky top-16 z-30 border-b border-border bg-background/90 backdrop-blur">
        <Container>
          <ul className="-mx-1 flex items-center gap-1 overflow-x-auto py-2.5">
            {subNav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="field-label whitespace-nowrap rounded-md px-3 py-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  {t(item.label)}
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </nav>

      {/* ---------- Hero ---------- */}
      <section className="hero-gradient relative overflow-hidden text-white">
        <div className="grid-on-dark absolute inset-0" aria-hidden />
        <Container className="relative py-24 md:py-32">
          <div className="max-w-3xl">
            <FieldLabel className="animate-rise !text-accent-soft">{t({ pt: "Curso", en: "Course" })}</FieldLabel>
            <h1 className="mt-5 font-display text-5xl font-bold leading-[1.05] tracking-tight text-white animate-rise md:text-6xl">
              {t({ pt: "LLMs Corporativos", en: "Corporate LLMs" })}
            </h1>
            <p
              className="mt-5 text-xl font-medium text-white animate-rise"
              style={{ animationDelay: "60ms" }}
            >
              {t({
                pt: "Arquiteturas, Fine-Tuning, RAG e Knowledge Graphs",
                en: "Architectures, Fine-Tuning, RAG and Knowledge Graphs",
              })}
            </p>
            <p
              className="mt-4 max-w-2xl text-lg leading-relaxed text-white/80 animate-rise"
              style={{ animationDelay: "120ms" }}
            >
              {t({
                pt: "Domine as tecnologias LLM mais avançadas para aplicações corporativas em 8 semanas intensivas",
                en: "Master the most advanced LLM technologies for corporate applications in 8 intensive weeks",
              })}
            </p>
            <div
              className="mt-9 flex flex-wrap items-center gap-4 animate-rise"
              style={{ animationDelay: "180ms" }}
            >
              <Button
                size="lg"
                onClick={openWhatsApp}
                className="border-transparent bg-white text-primary hover:bg-white/90"
              >
                {t({ pt: "SOLICITE PROPOSTA", en: "REQUEST PROPOSAL" })}
                <ArrowRight />
              </Button>
              <Badge variant="violet">{t({ pt: "Avançado", en: "Advanced" })}</Badge>
            </div>
          </div>

          {/* metric strip */}
          <div
            className="mt-16 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-md border border-white/15 bg-white/10 md:grid-cols-4 animate-rise"
            style={{ animationDelay: "240ms" }}
          >
            {metrics.map((m, i) => {
              const Icon = m.icon;
              return (
                <div key={i} className="bg-[#063a5e] p-4">
                  <div className="field-label !text-accent-soft mb-1.5 inline-flex items-center gap-1.5">
                    <Icon className="size-3.5 text-teal-500" />
                    {t(m.k)}
                  </div>
                  <div className="font-display text-base font-semibold tnum text-white">{t(m.v)}</div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ---------- Overview ---------- */}
      <Section id="about">
        <Container>
          <SectionHeading
            eyebrow={t({ pt: "Sobre o Curso", en: "About Course" })}
            title={t({ pt: "Sobre o Curso", en: "About the Course" })}
            description={t({
              pt: "Curso técnico especializado em Large Language Models (LLMs) aplicados ao ambiente corporativo, cobrindo desde fundamentos até implementações avançadas com RAG, Knowledge Graphs e técnicas de fine-tuning.",
              en: "Specialized technical course in Large Language Models (LLMs) applied to corporate environments, covering from fundamentals to advanced implementations with RAG, Knowledge Graphs and fine-tuning techniques.",
            })}
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <Card>
              <div className="p-7">
                <h3 className="text-xl font-semibold">
                  {t({ pt: "Detalhes do Curso", en: "Course Details" })}
                </h3>
                <TickRule className="my-5" />
                <CheckList items={details} />
              </div>
            </Card>
            <Card>
              <div className="p-7">
                <h3 className="text-xl font-semibold">
                  {t({ pt: "Benefícios", en: "Benefits" })}
                </h3>
                <TickRule className="my-5" />
                <CheckList items={benefits} />
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* ---------- Curriculum ---------- */}
      <Section id="curriculum" className="border-y border-border bg-paper-100/50">
        <Container>
          <SectionHeading
            eyebrow={t({ pt: "Programa", en: "Curriculum" })}
            title={t({ pt: "Programa Semanal", en: "Weekly Program" })}
            description={t({
              pt: "* A grade de matérias é flexível e pode ser adequada às necessidades do cliente.",
              en: "* The curriculum is flexible and can be tailored to client needs.",
            })}
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {weeks.map((week, i) => (
              <Card key={i} className="h-full">
                <div className="p-6">
                  <FieldLabel index={i + 1} className="mb-3 [&>span:first-child]:text-signal-violet">
                    {t({ pt: "Semana", en: "Week" })}
                  </FieldLabel>
                  <h3 className="text-lg font-semibold leading-snug">
                    {`Semana ${i + 1} — ${t(week.title)}`}
                  </h3>
                  <TickRule className="my-4" />
                  <CheckList items={week.topics} />
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---------- Target Audience + Methodology ---------- */}
      <Section id="methodology">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            <Card>
              <div className="p-7">
                <FieldLabel className="mb-3">
                  {t({ pt: "Para quem", en: "For whom" })}
                </FieldLabel>
                <h3 className="text-xl font-semibold">
                  {t({ pt: "Público-Alvo", en: "Target Audience" })}
                </h3>
                <TickRule className="my-5" />
                <CheckList items={audience} />
              </div>
            </Card>
            <Card>
              <div className="p-7">
                <FieldLabel className="mb-3">
                  {t({ pt: "Como", en: "How" })}
                </FieldLabel>
                <h3 className="text-xl font-semibold">
                  {t({ pt: "Metodologia", en: "Methodology" })}
                </h3>
                <TickRule className="my-5" />
                <CheckList items={methodology} />
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* ---------- Certification ---------- */}
      <Section id="certification" className="border-y border-border bg-paper-100/50">
        <Container>
          <SectionHeading
            eyebrow={t({ pt: "Certificação", en: "Certification" })}
            title={t({ pt: "Certificação", en: "Certification" })}
          />
          <div className="mt-10 max-w-2xl">
            <Card>
              <div className="p-7">
                <CheckList items={certification} />
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* ---------- CTA + contact ---------- */}
      <Section id="contact">
        <Container>
          <Card>
            <div className="p-8 md:p-12">
              <div className="mx-auto max-w-2xl text-center">
                <FieldLabel className="justify-center">
                  {t({ pt: "Contato", en: "Contact" })}
                </FieldLabel>
                <h2 className="mt-4 font-display text-3xl font-semibold leading-tight md:text-4xl">
                  {t({ pt: "SOLICITE SUA PROPOSTA AGORA", en: "REQUEST YOUR PROPOSAL NOW" })}
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  {t({
                    pt: "Turmas sob demanda - Entre em contato",
                    en: "Classes on demand - Contact us",
                  })}
                </p>
                <div className="mt-8 flex justify-center">
                  <Button size="lg" onClick={openWhatsApp}>
                    {t({ pt: "SOLICITE PROPOSTA", en: "REQUEST PROPOSAL" })}
                    <MessageCircle />
                  </Button>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  {t({
                    pt: "Entre em contato para valores e cronograma detalhado",
                    en: "Contact us for pricing and detailed schedule",
                  })}
                </p>
              </div>

              <TickRule className="my-9" />

              <div className="grid gap-6 sm:grid-cols-2">
                <a
                  href={`mailto:${courseContact.email}`}
                  className="flex items-start gap-3 hover:text-teal-600"
                >
                  <Mail className="mt-0.5 size-5 shrink-0 text-teal-500" />
                  <div>
                    <div className="field-label">{t({ pt: "Email", en: "Email" })}</div>
                    <span>{courseContact.email}</span>
                  </div>
                </a>
                <a
                  href={courseContact.phoneHref}
                  className="flex items-start gap-3 hover:text-teal-600"
                >
                  <Phone className="mt-0.5 size-5 shrink-0 text-teal-500" />
                  <div>
                    <div className="field-label">{t({ pt: "Telefone", en: "Phone" })}</div>
                    <span className="tnum">{courseContact.phone}</span>
                  </div>
                </a>
              </div>
            </div>
          </Card>
        </Container>
      </Section>

      {/* ---------- Floating WhatsApp button ---------- */}
      <button
        type="button"
        onClick={openWhatsApp}
        aria-label={t({ pt: "Solicitar proposta via WhatsApp", en: "Request a proposal via WhatsApp" })}
        className="fixed bottom-6 right-6 z-40 flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-colors duration-150 hover:bg-teal-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        <MessageCircle className="size-6" />
      </button>
    </>
  );
}
