"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Cpu, Cog, BarChart3, Check, ArrowRight } from "lucide-react";
import { useLanguage, type Localized } from "@/lib/i18n";
import {
  Container,
  Section,
  SectionHeading,
  FieldLabel,
} from "@/components/section";
import { Button } from "@/components/ui/button";

type Solution = {
  id: string;
  icon: typeof Cpu;
  image: string;
  title: Localized;
  description: Localized;
  features: Localized[];
  applications: Localized[];
  benefits: Localized[];
};

const solutions: Solution[] = [
  {
    id: "iot",
    icon: Cpu,
    image: "/solutions/iot.jpg",
    title: { pt: "IoT & Sensoriamento Inteligente", en: "IoT & Smart Sensing" },
    description: {
      pt: "Desenvolvemos sistemas IoT completos que conectam seus equipamentos e operações. Monitoramento em tempo real para indústria, campo e fazenda.",
      en: "We develop complete IoT systems for real-time monitoring and control of industrial, agricultural, and livestock environments.",
    },
    features: [
      {
        pt: "Sensores sem fio para monitoramento industrial e rural",
        en: "Wireless Sensor Networks for industrial and rural environments",
      },
      {
        pt: "Dispositivos de baixo consumo com autonomia estendida",
        en: "Low-power IoT Devices",
      },
      { pt: "Monitoramento ambiental 24/7", en: "Real-time Environmental Monitoring" },
      {
        pt: "Supervisão remota de operações críticas",
        en: "Remote Telemetry and Supervision Systems",
      },
      {
        pt: "Processamento local de dados com Edge Computing",
        en: "Edge Computing for local data processing",
      },
    ],
    applications: [
      {
        pt: "Monitoramento de máquinas e linha de produção",
        en: "Industrial machine and equipment monitoring",
      },
      { pt: "Controle de qualidade ambiental", en: "Air and water quality control" },
      { pt: "Gestão eficiente de energia", en: "Smart energy management" },
      { pt: "Agricultura de precisão", en: "Precision agriculture and livestock" },
      {
        pt: "Manejo inteligente de rebanhos",
        en: "Herd monitoring and animal welfare",
      },
      {
        pt: "Rastreamento e localização de ativos",
        en: "Asset and vehicle tracking",
      },
    ],
    benefits: [
      { pt: "Visibilidade total das operações", en: "Complete operational visibility" },
      {
        pt: "Menos paradas não programadas",
        en: "Predictive maintenance and reduced downtime",
      },
      { pt: "Economia de energia", en: "Energy savings" },
      { pt: "Decisões baseadas em dados reais", en: "Real data-driven decisions" },
    ],
  },
  {
    id: "automation",
    icon: Cog,
    image: "/solutions/automation.jpg",
    title: { pt: "Automação Industrial", en: "Industrial Automation" },
    description: {
      pt: "Soluções completas de Indústria 4.0 que modernizam sua produção. Mais eficiência, menos desperdício, resultados comprovados.",
      en: "We implement complete Industry 4.0 solutions to optimize production processes and increase operational efficiency through intelligent automation.",
    },
    features: [
      {
        pt: "Sistemas de supervisão sob medida para sua operação",
        en: "Custom supervision and control systems",
      },
      {
        pt: "Robótica industrial e colaborativa",
        en: "Industrial and Collaborative Robotics",
      },
      {
        pt: "Controle preciso de processos produtivos",
        en: "Advanced industrial process control",
      },
      {
        pt: "Integração com ERP e sistemas corporativos",
        en: "System Integration (ERP and corporate systems)",
      },
      {
        pt: "Manutenção preditiva com Machine Learning",
        en: "Predictive Maintenance using machine learning",
      },
    ],
    applications: [
      {
        pt: "Automação completa de linhas de produção",
        en: "Automated production lines",
      },
      {
        pt: "Controle de qualidade automatizado",
        en: "Automated quality control systems",
      },
      {
        pt: "Logística e armazenagem inteligente",
        en: "Smart logistics and warehousing",
      },
      {
        pt: "Processos químicos e industriais",
        en: "Chemical and industrial process control",
      },
      {
        pt: "Embalagem e distribuição",
        en: "Packaging and distribution automation",
      },
      {
        pt: "Inspeção visual automatizada",
        en: "Computer vision systems for inspection",
      },
    ],
    benefits: [
      { pt: "Mais produtividade", en: "Increased productivity" },
      { pt: "Menos defeitos e desperdício", en: "Reduced defects and waste" },
      { pt: "Operação mais segura", en: "Enhanced operational safety" },
      {
        pt: "Rastreabilidade total da produção",
        en: "Complete production traceability",
      },
    ],
  },
  {
    id: "dataIntelligence",
    icon: BarChart3,
    image: "/solutions/data-intelligence.jpg",
    title: { pt: "Inteligência de Dados", en: "Data Intelligence" },
    description: {
      pt: "Transformamos dados em decisões que impulsionam resultados. Usamos análise avançada e Machine Learning para você tomar as melhores decisões, mais rápido.",
      en: "We transform data into strategic decisions using advanced analytics and Machine Learning to optimize your operations.",
    },
    features: [
      {
        pt: "Painéis de controle personalizados para suas operações",
        en: "Custom control panels for your operations",
      },
      {
        pt: "Modelos preditivos que antecipam problemas e oportunidades",
        en: "Predictive models to anticipate failures and opportunities",
      },
      {
        pt: "Análise de Grafos para resolver desafios complexos de logística",
        en: "Graph Analysis for complex process optimization",
      },
      {
        pt: "Processamento eficiente de grandes volumes de dados",
        en: "Intelligent processing of large data volumes",
      },
      {
        pt: "Assistentes inteligentes personalizados usando LLMs e RAG",
        en: "Specialized virtual assistants using LLMs and RAG",
      },
    ],
    applications: [
      {
        pt: "Previsão de demanda e planejamento estratégico",
        en: "Demand forecasting and production planning",
      },
      {
        pt: "Otimização de operações agropecuárias",
        en: "Agricultural and livestock operations optimization",
      },
      {
        pt: "Detecção precoce de falhas e anomalias",
        en: "Early detection of equipment and herd issues",
      },
      {
        pt: "Monitoramento de qualidade e performance",
        en: "Quality and performance analysis",
      },
      {
        pt: "Otimização de rotas e cadeia logística",
        en: "Route and logistics optimization using graphs",
      },
      {
        pt: "Assistentes inteligentes personalizados para seu negócio",
        en: "Intelligent assistants customized for your business",
      },
    ],
    benefits: [
      {
        pt: "Resultados mensuráveis e ROI comprovado",
        en: "Measurable results and proven ROI",
      },
      { pt: "Redução significativa de custos", en: "Significant cost reduction" },
      {
        pt: "Antecipação de problemas antes que aconteçam",
        en: "Anticipate problems before they happen",
      },
      {
        pt: "Decisões mais rápidas e assertivas",
        en: "Faster and more accurate decisions",
      },
    ],
  },
];

const taxDetails: Localized[] = [
  {
    pt: "Recuperação de até 20% dos gastos com inovação tecnológica",
    en: "Return of up to 20% of technological innovation expenses",
  },
  {
    pt: "Redução do IR e CSLL sobre investimentos em treinamento",
    en: "Reduction of IR and CSLL on training investments",
  },
  {
    pt: "Fortalecimento da inovação tecnológica da empresa",
    en: "Strengthening of company's technological innovation",
  },
  {
    pt: "Compliance com requisitos de Pesquisa, Desenvolvimento e Inovação",
    en: "Compliance with R&D requirements",
  },
];

export default function SolutionsPage() {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = t({
      pt: "Soluções | Instituto Curvelo",
      en: "Solutions | Instituto Curvelo",
    });
  }, [t]);

  const columnLabels = {
    features: { pt: "Recursos", en: "Features" },
    applications: { pt: "Aplicações", en: "Applications" },
    benefits: { pt: "Benefícios", en: "Benefits" },
  };

  function CheckList({ items }: { items: Localized[] }) {
    return (
      <ul className="mt-4 space-y-3 text-sm">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2.5">
            <Check className="mt-0.5 size-4 shrink-0 text-teal-500" />
            <span className="text-muted-foreground">{t(item)}</span>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="blueprint-grid absolute inset-0" aria-hidden />
        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background"
          aria-hidden
        />
        <Container className="relative py-20 md:py-32">
          <div className="max-w-3xl">
            <FieldLabel className="animate-rise">
              {t({ pt: "Soluções", en: "Solutions" })}
            </FieldLabel>
            <h1 className="mt-5 font-display text-5xl font-bold leading-[1.05] tracking-tight animate-rise md:text-7xl">
              {t({ pt: "Automação e IoT", en: "Automation & IoT" })}
            </h1>
            <p
              className="mt-6 text-xl font-medium text-teal-600 animate-rise"
              style={{ animationDelay: "60ms" }}
            >
              {t({
                pt: "Soluções inteligentes para indústria do futuro",
                en: "Smart solutions for the industry of the future",
              })}
            </p>
            <p
              className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground animate-rise"
              style={{ animationDelay: "120ms" }}
            >
              {t({
                pt: "Conectamos dispositivos, automatizamos processos e transformamos dados em insights estratégicos.",
                en: "We connect devices, automate processes, and transform data into strategic insights.",
              })}
            </p>
          </div>
        </Container>
      </section>

      {/* ---------- Solution sections ---------- */}
      {solutions.map((solution, i) => {
        const Icon = solution.icon;
        const imageFirst = i % 2 === 0;
        const shaded = i % 2 === 1;
        return (
          <Section
            key={solution.id}
            id={solution.id}
            className={shaded ? "border-y border-border bg-paper-100/50" : undefined}
          >
            <Container>
              <div className="grid items-center gap-10 lg:grid-cols-2">
                <div
                  className={
                    imageFirst ? "lg:order-1" : "lg:order-2"
                  }
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-md border border-border">
                    <Image
                      src={solution.image}
                      alt={t(solution.title)}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-ink-900/20" aria-hidden />
                    <span className="absolute left-4 top-4 flex size-10 items-center justify-center rounded-md border border-border bg-card/90 text-teal-600 backdrop-blur">
                      <Icon className="size-5" />
                    </span>
                  </div>
                </div>
                <div className={imageFirst ? "lg:order-2" : "lg:order-1"}>
                  <FieldLabel index={i + 1} className="mb-4">
                    {t({ pt: "Solução", en: "Solution" })}
                  </FieldLabel>
                  <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
                    {t(solution.title)}
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                    {t(solution.description)}
                  </p>
                </div>
              </div>

              <div className="mt-12 grid gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-3">
                <div className="bg-card p-6">
                  <FieldLabel>{t(columnLabels.features)}</FieldLabel>
                  <CheckList items={solution.features} />
                </div>
                <div className="bg-card p-6">
                  <FieldLabel>{t(columnLabels.applications)}</FieldLabel>
                  <CheckList items={solution.applications} />
                </div>
                <div className="bg-card p-6">
                  <FieldLabel>{t(columnLabels.benefits)}</FieldLabel>
                  <CheckList items={solution.benefits} />
                </div>
              </div>
            </Container>
          </Section>
        );
      })}

      {/* ---------- CTA ---------- */}
      <Section className="border-t border-border">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold md:text-4xl">
              {t({ pt: "Pronto para Começar?", en: "Ready to Get Started?" })}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              {t({
                pt: "Entre em contato conosco para discutir como podemos ajudar seu negócio a crescer com tecnologia.",
                en: "Contact us to discuss how we can help your business grow with technology.",
              })}
            </p>
            <Button asChild size="lg" className="mt-8">
              <Link href="/#contato">
                {t({ pt: "Fale Conosco", en: "Contact Us" })}
                <ArrowRight />
              </Link>
            </Button>
          </div>
        </Container>
      </Section>

      {/* ---------- Tax Benefits (Lei do Bem) ---------- */}
      <Section className="border-t border-border bg-paper-100/50">
        <Container>
          <SectionHeading
            eyebrow={t({ pt: "Benefícios Fiscais", en: "Tax Benefits" })}
            title={t({
              pt: "Lei do Bem (Lei 11.196/2005)",
              en: "Brazilian Innovation Law (Lei do Bem)",
            })}
            description={t({
              pt: "Nossas projetos são elegíveis para benefícios fiscais da Lei do Bem para empresas do regime de lucro real.",
              en: "Our projects are eligible for tax benefits under the Innovation Law for companies under the real profit tax regime.",
            })}
          />
          <div className="mt-10 grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2">
            {taxDetails.map((detail, i) => (
              <div key={i} className="flex items-start gap-3 bg-card p-6">
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-teal-100 text-teal-700">
                  <Check className="size-4" />
                </span>
                <span className="font-medium leading-snug">{t(detail)}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            {t({
              pt: "Entre em contato para saber mais sobre como aproveitar esses benefícios fiscais em sua empresa.",
              en: "Contact us to learn more about how to take advantage of these tax benefits for your company.",
            })}
          </p>
        </Container>
      </Section>
    </>
  );
}
