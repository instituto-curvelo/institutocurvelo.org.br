"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Cpu,
  Cog,
  BarChart3,
  Check,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { contact, partners, routes } from "@/lib/site";
import {
  Container,
  Section,
  SectionHeading,
  FieldLabel,
  TickRule,
} from "@/components/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/contact-form";
import { AnimatedLogo } from "@/components/animated-logo";
import { cn } from "@/lib/utils";

const expertise = [
  {
    icon: Cpu,
    title: { pt: "IoT & Sensoriamento Inteligente", en: "IoT & Smart Sensing" },
    image: "/solutions/iot.jpg",
    href: `${routes.solutions}#iot`,
  },
  {
    icon: Cog,
    title: { pt: "Automação Industrial", en: "Industrial Automation" },
    image: "/solutions/automation.jpg",
    href: `${routes.solutions}#automation`,
  },
  {
    icon: BarChart3,
    title: { pt: "Inteligência de Dados", en: "Data Intelligence" },
    image: "/solutions/data-intelligence.jpg",
    href: `${routes.solutions}#dataIntelligence`,
  },
];

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="hero-gradient relative overflow-hidden text-white">
        <div className="grid-on-dark absolute inset-0" aria-hidden />
        <div className="deco-circle -right-40 -top-40 size-[420px]" aria-hidden />
        <Container className="relative py-28 md:py-36">
          <div className="flex flex-col items-start gap-12 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <h1 className="font-display text-6xl leading-none animate-rise md:text-8xl">
                {t({ pt: "Tecnologia", en: "Technology" })}{" "}
                <span className="text-accent-soft">
                  {t({ pt: "que inspira", en: "that inspires" })}
                </span>
              </h1>
              <p
                className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80 animate-rise md:text-xl"
                style={{ animationDelay: "60ms" }}
              >
                {t({
                  pt: "Oferecemos soluções tecnológicas e científicas avançadas, com foco em pesquisa, desenvolvimento e inovação em diversos setores.",
                  en: "We offer advanced technological and scientific solutions, focusing on research, development, and innovation in various sectors.",
                })}
              </p>
              <div
                className="mt-9 flex flex-wrap gap-3 animate-rise"
                style={{ animationDelay: "120ms" }}
              >
                <Button
                  asChild
                  size="lg"
                  className="border-transparent bg-white text-primary hover:bg-white/90"
                >
                  <Link href={routes.solutions}>
                    {t({ pt: "Explore nossas soluções", en: "Explore our solutions" })}
                    <ArrowRight />
                  </Link>
                </Button>
              </div>
            </div>

            <AnimatedLogo className="shrink-0 self-center" />
          </div>

          {/* coordinate readout strip */}
          <div
            className="mt-16 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-lg border border-white/15 bg-white/10 md:grid-cols-3 animate-rise"
            style={{ animationDelay: "180ms" }}
          >
            {[
              { k: { pt: "Natureza", en: "Type" }, v: "ICT" },
              { k: { pt: "Sede", en: "HQ" }, v: "Arujá · SP" },
              { k: { pt: "Mantenedor", en: "Maintainer" }, v: "Grupo GA230" },
            ].map((m) => (
              <div key={m.v} className="bg-[#063a5e] p-4">
                <div className="field-label mb-1.5 !text-accent-soft">{t(m.k)}</div>
                <div className="font-display text-2xl leading-none text-white">{m.v}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ---------- About ---------- */}
      <Section id="sobre">
        <Container>
          <SectionHeading
            eyebrow={t({ pt: "Sobre nós", en: "About us" })}
            title={t({ pt: "Quem somos", en: "Who we are" })}
            description={t({
              pt: "Somos uma Instituição de Ciência, Tecnologia e Inovação (ICT) privada e sem fins lucrativos, mantida pelo Grupo GA230, localizada em Arujá, São Paulo, Brasil.",
              en: "We are a private, non-profit Science, Technology, and Innovation Institution (ICT), maintained by the GA230 Group, located in Arujá, São Paulo, Brazil.",
            })}
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
            <Card>
              <div className="p-7">
                <h3 className="text-xl font-semibold">
                  {t({ pt: "Nossa missão", en: "Our mission" })}
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {t({
                    pt: "Fornecer soluções científicas e tecnológicas avançadas, agregando inovação e uso eficiente de recursos, capacitando parceiros a realizar seu potencial econômico e social, e promovendo o crescimento pessoal e profissional dos colaboradores em um ambiente de desenvolvimento contínuo.",
                    en: "To provide advanced scientific and technological solutions, adding innovation and efficient use of resources, enabling partners to realize their economic and social potential, and fostering the personal and professional growth of collaborators in an environment of continuous development.",
                  })}
                </p>
              </div>
            </Card>
            <div className="grid gap-px overflow-hidden rounded-md border border-border bg-border">
              {[
                { pt: "Inovação tecnológica", en: "Technological innovation" },
                { pt: "Desenvolvimento sustentável", en: "Sustainable development" },
                { pt: "Crescimento colaborativo", en: "Collaborative growth" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-card p-5">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-teal-100 text-teal-700">
                    <Check className="size-4" />
                  </span>
                  <span className="font-medium">{t(item)}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ---------- Expertise ---------- */}
      <Section id="expertise" className="border-y border-border bg-paper-100/50">
        <Container>
          <SectionHeading
            eyebrow={t({ pt: "Áreas de especialização", en: "Areas of expertise" })}
            title={t({ pt: "Tecnologia em ação", en: "Technology in action" })}
            description={t({
              pt: "Combinamos expertise técnica com inovação para oferecer soluções que transformam ideias em realidade.",
              en: "We combine technical expertise with innovation to offer solutions that transform ideas into reality.",
            })}
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {expertise.map((card, i) => {
              const Icon = card.icon;
              return (
                <Link key={card.href} href={card.href} className="group">
                  <Card interactive className="h-full overflow-hidden">
                    <div className="relative h-44 overflow-hidden border-b border-border">
                      <Image
                        src={card.image}
                        alt={t(card.title)}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-ink-900/20" />
                      <span className="absolute left-4 top-4 flex size-9 items-center justify-center rounded-md border border-border bg-card/90 text-teal-600 backdrop-blur">
                        <Icon className="size-5" />
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-5">
                      <div>
                        <FieldLabel index={i + 1} className="mb-2">
                          {t({ pt: "Área", en: "Area" })}
                        </FieldLabel>
                        <h3 className="text-lg font-semibold leading-snug">
                          {t(card.title)}
                        </h3>
                      </div>
                      <ArrowUpRight className="size-5 shrink-0 text-muted-foreground transition-colors group-hover:text-teal-500" />
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* ---------- By the numbers ---------- */}
      <Section className="bg-ink-900 text-white">
        <Container>
          <span className="field-label !text-accent-soft">
            {t({ pt: "Em números", en: "By the numbers" })}
          </span>
          <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 md:grid-cols-3">
            {[
              { n: "03", k: { pt: "Áreas de atuação", en: "Areas of expertise" } },
              { n: "03", k: { pt: "Laboratórios", en: "Laboratories" } },
              { n: "04", k: { pt: "Parceiros", en: "Partners" } },
            ].map((s) => (
              <div key={s.k.pt} className="bg-[#063a5e] p-7">
                <div className="font-display text-6xl leading-none tnum text-white">
                  {s.n}
                </div>
                <div className="mt-3 text-sm font-medium text-white/70">{t(s.k)}</div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---------- Partners ---------- */}
      <Section className="border-t border-white/10 bg-ink-900 text-white">
        <Container>
          <SectionHeading
            tone="dark"
            eyebrow={t({ pt: "Parceiros", en: "Partners" })}
            title={t({ pt: "Nossos parceiros", en: "Our partners" })}
            description={t({
              pt: "Trabalhamos em colaboração com organizações de referência para ampliar nosso impacto e oferecer soluções ainda mais robustas.",
              en: "We work in collaboration with leading organizations to expand our impact and offer even more robust solutions.",
            })}
          />
          <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 md:grid-cols-3">
            {partners.map((p) => (
              <div
                key={p.name}
                className={cn(
                  "flex h-28 items-center justify-center p-6",
                  p.surface === "light" ? "bg-white" : "bg-[#063a5e]",
                )}
              >
                <Image
                  src={p.logo}
                  alt={`${p.name} logo`}
                  width={140}
                  height={56}
                  className="max-h-12 w-auto object-contain opacity-90 transition-opacity hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---------- Contact ---------- */}
      <Section id="contato">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <SectionHeading
                eyebrow={t({ pt: "Contato", en: "Contact" })}
                title={t({ pt: "Vamos falar sobre tecnologia", en: "Let's talk technology" })}
                description={t({
                  pt: "Pronto para transformar seu negócio com tecnologia avançada? Entre em contato com nossa equipe para discutir como o Instituto Curvelo pode ajudar.",
                  en: "Ready to transform your business with advanced technology? Get in touch with our team to discuss how Instituto Curvelo can help.",
                })}
              />
              <TickRule className="my-8" />
              <ul className="space-y-5">
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 size-5 shrink-0 text-teal-500" />
                  <div>
                    <div className="field-label">{t({ pt: "Email", en: "Email" })}</div>
                    <a href={`mailto:${contact.email}`} className="hover:text-teal-600">
                      {contact.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 size-5 shrink-0 text-teal-500" />
                  <div>
                    <div className="field-label">{t({ pt: "Telefone", en: "Phone" })}</div>
                    <a href={contact.phoneHref} className="tnum hover:text-teal-600">
                      {contact.phone}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-teal-500" />
                  <div>
                    <div className="field-label">{t({ pt: "Localização", en: "Location" })}</div>
                    <span>{contact.address}</span>
                  </div>
                </li>
              </ul>
            </div>

            <Card>
              <div className="p-6 md:p-8">
                <h3 className="mb-5 text-xl font-semibold">
                  {t({ pt: "Envie uma mensagem", en: "Send a message" })}
                </h3>
                <ContactForm />
              </div>
            </Card>
          </div>
        </Container>
      </Section>
    </>
  );
}
