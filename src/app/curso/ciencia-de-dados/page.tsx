"use client";

import { useEffect } from "react";
import Image from "next/image";
import {
  Clock,
  Monitor,
  Users,
  Award,
  Check,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import { useLanguage, type Localized } from "@/lib/i18n";
import { whatsappUrl, courseContact } from "@/lib/site";
import {
  Container,
  Section,
  SectionHeading,
  FieldLabel,
} from "@/components/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const details: Localized[] = [
  { pt: "12 semanas de capacitação intensiva", en: "12 weeks of intensive training" },
  { pt: "Encontros virtuais com especialista", en: "Virtual meetings" },
  { pt: "36 horas de conteúdo prático e teórico", en: "36 hours of practical and theoretical content" },
  { pt: "Turmas limitadas a 30 participantes", en: "Limited to 30 participants per class" },
  { pt: "Ministrado em R, Python ou PowerBI", en: "Taught in R, Python or PowerBI" },
  { pt: "Certificado de curso livre ao final", en: "Free course certificate upon completion" },
];

const benefits: Localized[] = [
  { pt: "Aprenda com professor do ITA e Unifesp", en: "Learn from ITA and Unifesp specialist" },
  { pt: "Metodologia prática com estudos de caso reais", en: "Practical methodology with real case studies" },
  { pt: "Relatórios descritivos com feedback personalizado", en: "Descriptive reports with personalized feedback" },
  { pt: "Material didático incluso e disponibilizado", en: "Course materials included and provided" },
  { pt: "Aplicação em projetos empresariais", en: "Immediate application in business projects" },
];

const modules: Localized[] = [
  { pt: "O que é Ciência de Dados e suas aplicações", en: "What is Data Science and its applications" },
  { pt: "Conceitos de modelagem de problema e aprendizado", en: "Problem modeling and learning concepts" },
  { pt: "Dados, informação e conhecimento", en: "Data, information and knowledge" },
  { pt: "Coleta, integração e armazenamento de dados", en: "Data collection, integration and storage" },
  { pt: "Análise exploratória e visualização de dados", en: "Exploratory analysis and data visualization" },
  { pt: "Limpeza e preparação de dados", en: "Data cleaning and preparation" },
  { pt: "Ajuste e avaliação de modelos", en: "Model fitting and evaluation" },
  { pt: "Estudos de caso práticos", en: "Practical case studies" },
  { pt: "Ética, privacidade e legalidade no uso de dados", en: "Ethics, privacy and legality in data use" },
];

const credentials: Localized[] = [
  { pt: "Doutor em Ciências de Computação pela USP", en: "PhD in Computer Science (USP)" },
  { pt: "Desde 2020, Professor do Programa PPG-PO (ITA/Unifesp)", en: "Since 2020, Professor at PPG-PO (ITA/Unifesp)" },
  { pt: "Estágio de pesquisa na Arizona State University (EUA)", en: "Research internship at Arizona State University (USA)" },
  { pt: "Autor de mais de 30 artigos científicos", en: "Author of 30+ scientific articles" },
  { pt: "Autor do livro 'Data Science Project'", en: "Author of 'Data Science Project' book" },
  { pt: "Co-fundador do grupo de pesquisa DroneComp (ITA)", en: "Co-founder of DroneComp research group" },
];

const methodology: Localized[] = [
  { pt: "Encontros virtuais semanais", en: "Weekly virtual meetings with specialist" },
  { pt: "Atividades práticas com relatórios", en: "Practical activities with descriptive reports" },
  { pt: "Revisão e feedback individualizado", en: "Individual review and feedback" },
  { pt: "Estudos de caso aplicados", en: "Applied case studies" },
  { pt: "Material de apoio bibliográfico", en: "Bibliographic support material" },
];

const audience: Localized[] = [
  { pt: "Profissionais que desejam ingressar na área de dados", en: "Professionals wanting to enter the data field" },
  { pt: "Equipes técnicas que precisam aprimorar processos", en: "Technical teams needing to improve processes" },
  { pt: "Empresas buscando inovação tecnológica", en: "Companies seeking technological innovation" },
  { pt: "Colaboradores em desenvolvimento de capacidades técnicas", en: "Employees developing technical capabilities" },
];

const certification: Localized[] = [
  { pt: "Certificado de curso livre emitido ao final", en: "Free course certificate issued upon completion" },
  { pt: "Conforme Decreto Presidencial N° 5.154/2004", en: "According to Presidential Decree No. 5.154/2004" },
  { pt: "Válido para capacitação profissional", en: "Valid for professional training" },
  { pt: "Disponibilizado para todos os participantes aprovados", en: "Available to all approved participants" },
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

export default function DataSciencePage() {
  const { t } = useLanguage();

  const waMessage = t({
    pt: "Olá! Gostaria de solicitar uma proposta para o curso de Introdução à Ciência de Dados.",
    en: "Hello! I would like to request a proposal for the Introduction to Data Science course.",
  });
  const waLink = whatsappUrl(waMessage);

  useEffect(() => {
    document.title = t({
      pt: "Ciência de Dados | Instituto Curvelo",
      en: "Data Science | Instituto Curvelo",
    });
  }, [t]);

  const navLinks: { href: string; label: Localized }[] = [
    { href: "#about", label: { pt: "Sobre o Curso", en: "About Course" } },
    { href: "#instructor", label: { pt: "Instrutor", en: "Instructor" } },
    { href: "#certification", label: { pt: "Certificação", en: "Certification" } },
    { href: "#contact", label: { pt: "Contato", en: "Contact" } },
  ];

  return (
    <>
      {/* ---------- In-page sub-nav ---------- */}
      <nav className="sticky top-16 z-30 border-b border-border bg-background/90 backdrop-blur">
        <Container>
          <div className="flex gap-6 overflow-x-auto py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="field-label whitespace-nowrap text-muted-foreground transition-colors hover:text-teal-600"
              >
                {t(link.label)}
              </a>
            ))}
          </div>
        </Container>
      </nav>

      {/* ---------- Hero ---------- */}
      <section className="hero-gradient relative overflow-hidden text-white">
        <div className="grid-on-dark absolute inset-0" aria-hidden />
        <Container className="relative py-24 md:py-32">
          <div className="max-w-3xl">
            <FieldLabel className="animate-rise !text-accent-soft">
              {t({ pt: "Curso", en: "Course" })}
            </FieldLabel>
            <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white animate-rise md:text-6xl">
              {t({
                pt: "Introdução à Ciência de Dados",
                en: "Introduction to Data Science",
              })}
            </h1>
            <p
              className="mt-5 text-lg font-medium text-accent-soft animate-rise"
              style={{ animationDelay: "60ms" }}
            >
              {t({
                pt: "Capacitação técnica especializada para profissionais e empresas",
                en: "Specialized technical training for professionals and companies",
              })}
            </p>
            <p
              className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80 animate-rise"
              style={{ animationDelay: "120ms" }}
            >
              {t({
                pt: "Capacite seus colaboradores com os fundamentos da ciência de dados com especialista renomado do ITA e Unifesp em apenas 12 semanas",
                en: "Learn data science fundamentals with renowned ITA/Unifesp specialist in just 12 weeks",
              })}
            </p>
            <div
              className="mt-9 animate-rise"
              style={{ animationDelay: "180ms" }}
            >
              <Button
                asChild
                size="lg"
                className="border-transparent bg-white text-primary hover:bg-white/90"
              >
                <a href={waLink} target="_blank" rel="noopener noreferrer">
                  {t({ pt: "SOLICITE PROPOSTA", en: "REQUEST PROPOSAL" })}
                  <ArrowRight />
                </a>
              </Button>
            </div>
          </div>

          {/* metric strip */}
          <div
            className="mt-16 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-md border border-white/15 bg-white/10 md:grid-cols-4 animate-rise"
            style={{ animationDelay: "240ms" }}
          >
            {[
              { icon: Clock, k: { pt: "Carga", en: "Hours" }, v: t({ pt: "36 horas", en: "36 hours" }) },
              { icon: Monitor, k: { pt: "Formato", en: "Format" }, v: t({ pt: "Virtual", en: "Virtual" }) },
              { icon: Users, k: { pt: "Vagas", en: "Spots" }, v: t({ pt: "Até 30 vagas", en: "Up to 30 spots" }) },
              { icon: Award, k: { pt: "Certificado", en: "Certificate" }, v: t({ pt: "Certificado incluso", en: "Certificate included" }) },
            ].map((m, i) => {
              const Icon = m.icon;
              return (
                <div key={i} className="bg-[#063a5e] p-4">
                  <div className="field-label mb-2 flex items-center gap-1.5 !text-accent-soft">
                    <Icon className="size-3.5 text-teal-500" />
                    {t(m.k)}
                  </div>
                  <div className="font-display text-base font-semibold tnum leading-snug text-white">
                    {m.v}
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ---------- Overview ---------- */}
      <Section id="about">
        <Container>
          <SectionHeading eyebrow={t({ pt: "Sobre o Curso", en: "About the Course" })} title={t({ pt: "Sobre o Curso", en: "About the Course" })} />
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <Card>
              <div className="p-7">
                <h3 className="text-xl font-semibold">
                  {t({ pt: "Detalhes", en: "Details" })}
                </h3>
                <div className="mt-5">
                  <CheckList items={details} />
                </div>
              </div>
            </Card>
            <Card>
              <div className="p-7">
                <h3 className="text-xl font-semibold">
                  {t({ pt: "Principais Benefícios", en: "Main Benefits" })}
                </h3>
                <div className="mt-5">
                  <CheckList items={benefits} />
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* ---------- Curriculum ---------- */}
      <Section className="border-y border-border bg-paper-100/50">
        <Container>
          <SectionHeading
            eyebrow={t({ pt: "Conteúdo", en: "Content" })}
            title={t({ pt: "Conteúdo Programático", en: "Curriculum" })}
          />
          <div className="mt-12 grid gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
            {modules.map((module, i) => (
              <div key={i} className="bg-card p-5">
                <FieldLabel index={i + 1} className="mb-3">
                  {t({ pt: "Módulo", en: "Module" })}
                </FieldLabel>
                <p className="font-medium leading-snug">{t(module)}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---------- Instructor ---------- */}
      <Section id="instructor">
        <Container>
          <SectionHeading
            eyebrow={t({ pt: "Instrutor", en: "Instructor" })}
            title={t({ pt: "Seu Instrutor", en: "Your Instructor" })}
          />
          <Card className="mt-12 overflow-hidden">
            <div className="grid gap-px bg-border md:grid-cols-[0.8fr_1.2fr]">
              <div className="bg-card p-7">
                <Image
                  src="/people/filipe-verri.png"
                  alt="Prof. Dr. Filipe Alves Neto Verri"
                  width={320}
                  height={320}
                  className="aspect-square w-full rounded-md border border-border object-cover"
                />
                <p className="mt-5 font-display text-lg font-semibold leading-snug">
                  {t({
                    pt: "Prof. Dr. Filipe A. N. Verri",
                    en: "Prof. Dr. Filipe Alves Neto Verri",
                  })}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {t({ pt: "Professor do ITA e Unifesp", en: "Professor at ITA and Unifesp" })}
                </p>
              </div>
              <div className="bg-card p-7">
                <h3 className="text-base font-semibold">
                  {t({
                    pt: "Credenciais e Experiência",
                    en: "Credentials and Experience",
                  })}
                </h3>
                <div className="mt-5">
                  <CheckList items={credentials} />
                </div>
              </div>
            </div>
          </Card>
        </Container>
      </Section>

      {/* ---------- Methodology + Target Audience ---------- */}
      <Section className="border-y border-border bg-paper-100/50">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            <Card>
              <div className="p-7">
                <SectionHeading
                  eyebrow={t({ pt: "Como", en: "How" })}
                  title={t({ pt: "Metodologia", en: "Methodology" })}
                />
                <div className="mt-6">
                  <CheckList items={methodology} />
                </div>
              </div>
            </Card>
            <Card>
              <div className="p-7">
                <SectionHeading
                  eyebrow={t({ pt: "Público", en: "Audience" })}
                  title={t({
                    pt: "Para Quem é Este Curso",
                    en: "Who This Course is For",
                  })}
                />
                <div className="mt-6">
                  <CheckList items={audience} />
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* ---------- Certification ---------- */}
      <Section id="certification">
        <Container>
          <SectionHeading
            eyebrow={t({ pt: "Certificado", en: "Certificate" })}
            title={t({ pt: "Certificação", en: "Certification" })}
          />
          <Card className="mt-10 max-w-2xl">
            <div className="p-7">
              <CheckList items={certification} />
            </div>
          </Card>
        </Container>
      </Section>

      {/* ---------- CTA / Contact ---------- */}
      <Section id="contact" className="border-t border-border bg-paper-100/50">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
              {t({
                pt: "SOLICITE SUA PROPOSTA AGORA",
                en: "REQUEST YOUR PROPOSAL NOW",
              })}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {t({
                pt: "Turmas sob demanda - Entre em contato",
                en: "Classes on demand - Contact us",
              })}
            </p>
            <div className="mt-8 flex justify-center">
              <Button asChild size="lg">
                <a href={waLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle />
                  {t({ pt: "SOLICITE PROPOSTA", en: "REQUEST PROPOSAL" })}
                </a>
              </Button>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              {t({
                pt: "Entre em contato para valores e cronograma detalhado",
                en: "Contact us for pricing and detailed schedule",
              })}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
              <a
                href={`mailto:${courseContact.email}`}
                className="hover:text-teal-600"
              >
                {courseContact.email}
              </a>
              <a
                href={courseContact.phoneHref}
                className="tnum hover:text-teal-600"
              >
                {courseContact.phone}
              </a>
              <span className="text-muted-foreground">{t(courseContact.city)}</span>
            </div>
          </div>
        </Container>
      </Section>

      {/* ---------- Floating WhatsApp button ---------- */}
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t({
          pt: "Fale conosco pelo WhatsApp",
          en: "Contact us on WhatsApp",
        })}
        className="fixed bottom-6 right-6 z-50 flex size-14 items-center justify-center rounded-full bg-signal-success text-white shadow-lg transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-success focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        <MessageCircle className="size-7" />
      </a>
    </>
  );
}
