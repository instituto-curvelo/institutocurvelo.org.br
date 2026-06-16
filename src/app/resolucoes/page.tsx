"use client";

import { useEffect } from "react";
import { FileText, Download, Calendar } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { Container, Section, FieldLabel } from "@/components/section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function ResolutionsPage() {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = t({
      pt: "Resoluções | Instituto Curvelo",
      en: "Resolutions | Instituto Curvelo",
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
            <FieldLabel className="animate-rise !text-accent-soft">
              {t({ pt: "Resoluções", en: "Resolutions" })}
            </FieldLabel>
            <h1 className="mt-5 font-display text-5xl font-bold leading-[1.05] tracking-tight text-white animate-rise md:text-7xl">
              {t({
                pt: "Resoluções e Documentos",
                en: "Resolutions and Documents",
              })}
            </h1>
            <p
              className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80 animate-rise"
              style={{ animationDelay: "60ms" }}
            >
              {t({
                pt: "Transparência e conformidade: acesse todas as resoluções e documentos oficiais das unidades do Instituto de Ciência e Tecnologia.",
                en: "Transparency and compliance: access all official resolutions and documents from the Institute of Science and Technology units.",
              })}
            </p>
          </div>
        </Container>
      </section>

      {/* ---------- Documents ---------- */}
      <Section>
        <Container>
          <div className="mx-auto max-w-3xl">
            <Card>
              {/* Unit header */}
              <div className="border-b border-border p-5 md:p-6">
                <FieldLabel className="mb-2">
                  {t({ pt: "Unidade", en: "Unit" })}
                </FieldLabel>
                <h2 className="font-display text-lg font-semibold leading-snug">
                  NIT - Núcleo de Inovação Tecnológica
                </h2>
              </div>

              {/* Document row */}
              <div className="flex flex-col gap-4 p-5 md:flex-row md:items-center md:justify-between md:p-6">
                <div className="flex items-start gap-3">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-md border border-border bg-card text-teal-600">
                    <FileText className="size-5" />
                  </span>
                  <div>
                    <h3 className="font-medium leading-snug">
                      Resolução NIT nº 001/2025 - Política de Inovação
                    </h3>
                    <div className="mt-2 flex flex-wrap items-center gap-3">
                      <Badge variant="brand">Resolução</Badge>
                      <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                        <Calendar className="size-4 shrink-0 text-teal-500" />
                        <span className="field-label">Data:</span>
                        <span className="font-mono tnum text-foreground">
                          10/09/2025
                        </span>
                      </span>
                    </div>
                  </div>
                </div>

                <Button asChild variant="secondary" className="shrink-0">
                  <a
                    href="/documents/NIT_001_2025.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download />
                    {t({ pt: "Download", en: "Download" })}
                  </a>
                </Button>
              </div>
            </Card>

            {/* ---------- Footnote ---------- */}
            <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
              {t({
                pt: "Para solicitar documentos adicionais ou esclarecimentos, entre em contato através do nosso formulário de contato.",
                en: "To request additional documents or clarifications, please contact us through our contact form.",
              })}
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
