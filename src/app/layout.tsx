import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Barlow } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.institutocurvelo.org.br"),
  title: {
    default: "Instituto Curvelo",
    template: "%s | Instituto Curvelo",
  },
  description:
    "Instituição de Ciência, Tecnologia e Inovação dedicada a pesquisa aplicada, automação, IoT e inteligência de dados.",
  openGraph: {
    type: "website",
    siteName: "Instituto Curvelo",
    locale: "pt_BR",
  },
};

export const viewport: Viewport = {
  themeColor: "#042b45",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt"
      className={`${bebas.variable} ${barlow.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <a href="#main" className="skip-link">
          Pular para o conteúdo
        </a>
        <LanguageProvider>
          <Header />
          <main id="main" className="flex-1">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
