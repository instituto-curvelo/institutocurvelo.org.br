"use client";

import { useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  Check,
  Clock,
  MessageCircle,
  Monitor,
} from "lucide-react";
import { useLanguage, type Localized } from "@/lib/i18n";
import { routes, whatsappUrl } from "@/lib/site";
import {
  Container,
  Section,
  SectionHeading,
  FieldLabel,
} from "@/components/section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Course = {
  id: string;
  level: { label: Localized; variant: "outline" | "violet" };
  title: Localized;
  description: Localized;
  href: string;
  metrics: { k: Localized; v: Localized }[];
  highlights: Localized[];
  whatsapp: Localized;
};

const courses: Course[] = [
  {
    id: "data-science",
    level: {
      label: { pt: "Iniciante", en: "Beginner" },
      variant: "outline",
    },
    title: {
      pt: "Introdução à Ciência de Dados",
      en: "Introduction to Data Science",
    },
    description: {
      pt: "Aprenda os fundamentos da ciência de dados com especialista renomado do ITA e Unifesp.",
      en: "Learn data science fundamentals with renowned ITA/Unifesp specialist.",
    },
    href: routes.dataScience,
    metrics: [
      { k: { pt: "Duração", en: "Duration" }, v: { pt: "12 semanas", en: "12 weeks" } },
      { k: { pt: "Carga", en: "Hours" }, v: { pt: "36 horas", en: "36 hours" } },
      { k: { pt: "Formato", en: "Format" }, v: { pt: "Virtual", en: "Virtual" } },
    ],
    highlights: [
      { pt: "Professor do ITA e Unifesp", en: "ITA and Unifesp Professor" },
      { pt: "Metodologia prática", en: "Practical methodology" },
      { pt: "Certificado incluso", en: "Certificate included" },
      { pt: "R, Python ou PowerBI", en: "R, Python or PowerBI" },
    ],
    whatsapp: {
      pt: 'Olá! Gostaria de solicitar uma proposta para o curso "Introdução à Ciência de Dados".',
      en: 'Hello! I would like to request a proposal for the "Introduction to Data Science" course.',
    },
  },
  {
    id: "llm-course",
    level: {
      label: { pt: "Avançado", en: "Advanced" },
      variant: "violet",
    },
    title: {
      pt: "LLMs Corporativos",
      en: "Corporate LLMs",
    },
    description: {
      pt: "Domine arquiteturas LLM, Fine-Tuning, RAG e Knowledge Graphs para aplicações corporativas.",
      en: "Master LLM architectures, Fine-Tuning, RAG and Knowledge Graphs for corporate applications.",
    },
    href: routes.llmCourse,
    metrics: [
      { k: { pt: "Duração", en: "Duration" }, v: { pt: "8 semanas", en: "8 weeks" } },
      { k: { pt: "Carga", en: "Hours" }, v: { pt: "24 horas", en: "24 hours" } },
      { k: { pt: "Formato", en: "Format" }, v: { pt: "Virtual", en: "Virtual" } },
    ],
    highlights: [
      { pt: "Ollama, FAISS, LoRA/PEFT", en: "Ollama, FAISS, LoRA/PEFT" },
      { pt: "Graph-RAG prático", en: "Practical Graph-RAG" },
      { pt: "Certificado incluso", en: "Certificate included" },
      { pt: "Projetos corporativos", en: "Corporate projects" },
    ],
    whatsapp: {
      pt: 'Olá! Gostaria de solicitar uma proposta para o curso "LLMs Corporativos".',
      en: 'Hello! I would like to request a proposal for the "Corporate LLMs" course.',
    },
  },
];

const metricIcons = [Calendar, Clock, Monitor];

const benefits: Localized[] = [
  {
    pt: "Recuperação de até 20% dos gastos com capacitação tecnológica",
    en: "Return of up to 20% of technological training expenses",
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

export default function CoursesPage() {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = t({
      pt: "Cursos | Instituto Curvelo",
      en: "Courses | Instituto Curvelo",
    });
  }, [t]);

  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="blueprint-grid absolute inset-0" aria-hidden />
        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background"
          aria-hidden
        />
        <Container className="relative py-20 md:py-28">
          <div className="max-w-3xl">
            <FieldLabel className="animate-rise">
              {t({ pt: "Cursos", en: "Courses" })}
            </FieldLabel>
            <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight animate-rise md:text-6xl">
              {t({ pt: "Nossos Cursos", en: "Our Courses" })}
            </h1>
            <p
              className="mt-6 text-lg font-medium text-teal-600 animate-rise"
              style={{ animationDelay: "60ms" }}
            >
              {t({
                pt: "Capacitação técnica especializada para profissionais e empresas",
                en: "Specialized technical training for professionals and companies",
              })}
            </p>
            <p
              className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground animate-rise"
              style={{ animationDelay: "120ms" }}
            >
              {t({
                pt: "Descubra nossa seleção de cursos desenvolvidos para preparar você e sua equipe para os desafios do futuro tecnológico.",
                en: "Discover our selection of courses designed to prepare you and your team for the challenges of the technological future.",
              })}
            </p>
          </div>
        </Container>
      </section>

      {/* ---------- Available courses ---------- */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow={t({ pt: "Disponíveis", en: "Available" })}
            title={t({ pt: "Cursos disponíveis", en: "Available courses" })}
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {courses.map((course, idx) => (
              <Card
                key={course.id}
                interactive
                className="flex h-full flex-col p-7"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="success">
                    {t({ pt: "Disponível", en: "Available" })}
                  </Badge>
                  <Badge variant={course.level.variant}>
                    {t(course.level.label)}
                  </Badge>
                </div>

                <h3 className="mt-5 text-2xl font-semibold leading-snug">
                  {t(course.title)}
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {t(course.description)}
                </p>

                {/* metric strip */}
                <div className="mt-7 grid grid-cols-3 gap-px overflow-hidden rounded-md border border-border bg-border">
                  {course.metrics.map((m, i) => {
                    const Icon = metricIcons[i];
                    return (
                      <div key={i} className="bg-card p-4">
                        <div className="field-label mb-1.5 flex items-center gap-1.5">
                          <Icon className="size-3.5 text-teal-500" />
                          {t(m.k)}
                        </div>
                        <div className="font-display text-base font-semibold tnum">
                          {t(m.v)}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* highlights */}
                <ul className="mt-6 space-y-3 text-sm">
                  {course.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <Check className="mt-0.5 size-4 shrink-0 text-teal-500" />
                      <span className="text-muted-foreground">{t(h)}</span>
                    </li>
                  ))}
                </ul>

                {/* actions */}
                <div className="mt-7 flex flex-col gap-3 pt-1 sm:flex-row">
                  <Button asChild className="sm:flex-1">
                    <Link href={course.href}>
                      {t({ pt: "Ver Curso", en: "View Course" })}
                      <ArrowRight />
                    </Link>
                  </Button>
                  <Button asChild variant="secondary" className="sm:flex-1">
                    <a
                      href={whatsappUrl(t(course.whatsapp))}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle />
                      {t({ pt: "Solicitar Proposta", en: "Request Proposal" })}
                    </a>
                  </Button>
                </div>

                <span className="sr-only">{idx + 1}</span>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---------- Tax benefits (Lei do Bem) ---------- */}
      <Section className="border-t border-border bg-paper-100/50">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
            <SectionHeading
              eyebrow={t({ pt: "Lei do Bem (Lei 11.196/2005)", en: "Brazilian Innovation Law (Lei do Bem)" })}
              title={t({ pt: "Benefícios Fiscais", en: "Tax Benefits" })}
              description={t({
                pt: "Nossas capacitações são elegíveis para benefícios fiscais da Lei do Bem para empresas do regime de lucro real.",
                en: "Our training programs are eligible for tax benefits under the Innovation Law for companies under the real profit tax regime.",
              })}
            />
            <div>
              <div className="grid gap-px overflow-hidden rounded-md border border-border bg-border">
                {benefits.map((b, i) => (
                  <div key={i} className="flex items-start gap-3 bg-card p-5">
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-teal-100 text-teal-700">
                      <Check className="size-4" />
                    </span>
                    <span className="font-medium leading-snug">{t(b)}</span>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                {t({
                  pt: "Entre em contato para saber mais sobre como aproveitar esses benefícios fiscais em sua empresa.",
                  en: "Contact us to learn more about how to take advantage of these tax benefits for your company.",
                })}
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
