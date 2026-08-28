import type { Localized } from "@/lib/i18n";

/** Canonical institutional identity. */
export const site = {
  name: "Instituto Curvelo",
  cnpj: "CNPJ 60.911.337/0001-82",
  tagline: {
    pt: "Instituição de Ciência, Tecnologia e Inovação",
    en: "Science, Technology, and Innovation Institution",
  } satisfies Localized,
  description: {
    pt: "O Instituto Curvelo é uma Instituição de Ciência, Tecnologia e Inovação (ICT) privada e sem fins lucrativos, dedicada à pesquisa básica e aplicada e ao desenvolvimento de produtos, serviços e processos inovadores.",
    en: "Instituto Curvelo is a private, non-profit Science, Technology, and Innovation Institution (ICT) dedicated to basic and applied research and to developing innovative products, services, and processes.",
  } satisfies Localized,
};

/** Institutional contact (headquarters). */
export const contact = {
  email: "contato@institutocurvelo.org.br",
  phone: "+55 11 3835-3050",
  phoneHref: "tel:+551138353050",
  address: "Av. Marília, 1000, Galpão 27, Arujá, SP 07429-825",
};

/** Course / commercial contact. */
export const courseContact = {
  email: "contato@institutocurvelo.org.br",
  phone: "+55 12 99723-9684",
  phoneHref: "tel:+5512997239684",
  whatsapp: "5512997239684",
  city: { pt: "São José dos Campos, SP - Brasil", en: "São José dos Campos, SP - Brazil" } satisfies Localized,
};

export function whatsappUrl(message: string) {
  return `https://wa.me/${courseContact.whatsapp}?text=${encodeURIComponent(message)}`;
}

/** Primary navigation. Anchor links point at home-page sections. */
export const navItems: { label: Localized; href: string }[] = [
  { label: { pt: "O Instituto", en: "The Institute" }, href: "/instituto" },
  { label: { pt: "Soluções", en: "Solutions" }, href: "/solucoes" },
  { label: { pt: "Cursos", en: "Courses" }, href: "/cursos" },
  { label: { pt: "Resoluções", en: "Resolutions" }, href: "/resolucoes" },
  { label: { pt: "Contato", en: "Contact" }, href: "/#contato" },
];

export const routes = {
  home: "/",
  institute: "/instituto",
  solutions: "/solucoes",
  courses: "/cursos",
  resolutions: "/resolucoes",
  dataScience: "/curso/ciencia-de-dados",
  llmCourse: "/curso/llms-corporativos",
};

// `surface` is the tile background the logo sits on. Partners supply their logo
// either as a white reverse version (needs "dark") or in full color (needs
// "light"). Check a new logo against both before choosing.
//
// The order alternates dark and light so the grid reads as a checkerboard at
// 3 columns and as two solid columns at 2 columns. That only works because
// there happen to be as many dark logos as light ones, so adding a partner
// probably means reordering the list (or accepting that the pattern breaks).
export const partners: {
  name: string;
  logo: string;
  surface: "dark" | "light";
}[] = [
  { name: "iRede", logo: "/partners/irede.png", surface: "dark" },
  { name: "PIT", logo: "/partners/pit-logo.png", surface: "light" },
  { name: "Lactec", logo: "/partners/lactec.png", surface: "dark" },
  { name: "NUTES", logo: "/partners/nutes.png", surface: "light" },
  { name: "ICMC-USP", logo: "/partners/icmc-usp.png", surface: "dark" },
  { name: "ABINC", logo: "/partners/abinc.png", surface: "light" },
];
