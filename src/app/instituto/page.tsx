"use client";

import { useEffect } from "react";
import { Check, FlaskConical, Lightbulb, Microscope } from "lucide-react";
import { useLanguage, type Localized } from "@/lib/i18n";
import {
  Container,
  Section,
  SectionHeading,
  FieldLabel,
} from "@/components/section";
import { Card } from "@/components/ui/card";

const cpdiActivities: Localized[] = [
  {
    pt: "Prospecção e execução de projetos",
    en: "Prospecting and executing projects",
  },
  {
    pt: "Gestão da equipe de colaboradores",
    en: "Managing the team of collaborators",
  },
  {
    pt: "Estabelecimento do Conselho Técnico-Científico",
    en: "Establishing the Technical-Scientific Council",
  },
  {
    pt: "Estabelecimento, supervisão e gestão de laboratórios",
    en: "Establishing, overseeing, and managing laboratories",
  },
  {
    pt: "Responsabilidade direta por processos associados ao modelo de gestão",
    en: "Being directly responsible for processes associated with the management model",
  },
];

const labs: Localized[] = [
  {
    pt: "Laboratório de Eletrônica e Dispositivos",
    en: "Electronics and Devices Laboratory",
  },
  {
    pt: "Laboratório de Sistemas de Manufatura e Automação",
    en: "Manufacturing Systems and Automation Laboratory",
  },
  {
    pt: "Laboratório de Sistemas de Informação",
    en: "Information Systems Laboratory",
  },
];

const nitActivities: Localized[] = [
  {
    pt: "Manter e publicar a Política de Inovação do Instituto Curvelo",
    en: "Safeguarding the Innovation Policy of Instituto Curvelo",
  },
  {
    pt: "Gestão de ativos de propriedade intelectual",
    en: "Managing intellectual property assets",
  },
  {
    pt: "Identificação e criação de oportunidades",
    en: "Identifying and creating opportunities",
  },
  {
    pt: "Aproveitamento de recursos de políticas públicas nacionais",
    en: "Leveraging resources from national public policies",
  },
  {
    pt: "Gestão e promoção de parcerias",
    en: "Managing and promoting partnerships",
  },
];

function CheckList({ items }: { items: Localized[] }) {
  const { t } = useLanguage();
  return (
    <ul className="mt-8 space-y-4">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-teal-100 text-teal-700">
            <Check className="size-4" />
          </span>
          <span className="leading-relaxed text-foreground">{t(item)}</span>
        </li>
      ))}
    </ul>
  );
}

export default function InstitutePage() {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = t({
      pt: "Instituto Curvelo - Institucional",
      en: "The Institute | Instituto Curvelo",
    });
  }, [t]);

  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="hero-gradient relative overflow-hidden text-white">
        <div className="grid-on-dark absolute inset-0" aria-hidden />
        <div className="deco-circle -right-40 -top-40 size-[420px]" aria-hidden />
        <Container className="relative py-24 md:py-32">
          <div className="max-w-3xl">
            <FieldLabel className="animate-rise !text-accent-soft">Instituto Curvelo</FieldLabel>
            <h1 className="mt-5 font-display text-5xl font-bold leading-[1.05] tracking-tight text-white animate-rise md:text-7xl">
              {t({ pt: "O Instituto", en: "The Institute" })}
            </h1>
            <p
              className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80 animate-rise"
              style={{ animationDelay: "60ms" }}
            >
              {t({
                pt: "Conheça nossa estrutura organizacional, centros de pesquisa e núcleo de inovação tecnológica.",
                en: "Learn about our organizational structure, research centers and technological innovation office.",
              })}
            </p>
          </div>
        </Container>
      </section>

      {/* ---------- R&D Center (CPDI) ---------- */}
      <Section id="cpdi">
        <Container>
          <SectionHeading
            eyebrow="CPDI"
            title={t({
              pt: "Centro de Pesquisa, Desenvolvimento e Inovação",
              en: "Research and Development Center",
            })}
            description={t({
              pt: "O Centro de Pesquisa e Desenvolvimento (CPDI) é nossa unidade para conduzir atividades de Pesquisa e Desenvolvimento (P&D), que incluem:",
              en: "The Research and Development Center (R&DC) is our unit for conducting Research and Development (R&D) activities, which include:",
            })}
          />

          <CheckList items={cpdiActivities} />

          {/* Technical-Scientific Council */}
          <div className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <FieldLabel className="mb-4">
                {t({ pt: "Governança", en: "Governance" })}
              </FieldLabel>
              <h3 className="text-2xl font-semibold leading-tight">
                {t({
                  pt: "Conselho Técnico-Científico",
                  en: "Technical-Scientific Council",
                })}
              </h3>
            </div>
            <Card>
              <div className="flex items-start gap-4 p-7">
                <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-md border border-border bg-card text-teal-600">
                  <Microscope className="size-5" />
                </span>
                <p className="leading-relaxed text-muted-foreground">
                  {t({
                    pt: "O Conselho Técnico-Científico é composto por representantes do setor educacional ou outros institutos de pesquisa com fortes conexões com vários membros da cadeia de valor de produção de conhecimento tecnológico. Garante nossa relação com a academia e mantém altos padrões de gestão através do modelo de gestão.",
                    en: "The Technical-Scientific Council is composed of representatives from the education sector or other research institutes with strong connections to various members of the technological knowledge production value chain. It ensures our relationship with academia and maintains high management standards through the management model.",
                  })}
                </p>
              </div>
            </Card>
          </div>

          {/* Laboratories */}
          <div className="mt-14">
            <FieldLabel className="mb-5">
              {t({ pt: "Laboratórios", en: "Laboratories" })}
            </FieldLabel>
            <div className="grid gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-3">
              {labs.map((lab, i) => (
                <div key={i} className="flex flex-col bg-card p-5">
                  <div className="flex items-center justify-between">
                    <FieldLabel index={i + 1}>
                      {t({ pt: "Laboratório", en: "Laboratory" })}
                    </FieldLabel>
                    <FlaskConical className="size-5 shrink-0 text-teal-600" />
                  </div>
                  <h4 className="mt-4 text-lg font-semibold leading-snug">
                    {t(lab)}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ---------- Innovation Office (NIT) ---------- */}
      <Section id="nit" className="border-y border-border bg-paper-100/50">
        <Container>
          <SectionHeading
            eyebrow="NIT"
            title={t({
              pt: "Núcleo de Inovação Tecnológica",
              en: "Innovation Office",
            })}
            description={t({
              pt: "O Núcleo de Inovação Tecnológico (NIT) do Instituto Curvelo é responsável por coordenar atividades de inovação tecnológica e transferência de tecnologia. Suas principais atividades incluem:",
              en: "The Innovation Office (IO) of Instituto Curvelo is responsible for coordinating technological innovation and technology transfer activities. Its main activities include:",
            })}
          />

          <CheckList items={nitActivities} />

          <p className="mt-10 inline-flex items-center gap-2.5 text-sm text-muted-foreground">
            <Lightbulb className="size-5 shrink-0 text-teal-600" />
            {t({
              pt: "Inovação tecnológica e transferência de tecnologia.",
              en: "Technological innovation and technology transfer.",
            })}
          </p>
        </Container>
      </Section>
    </>
  );
}
