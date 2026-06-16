"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { contact, navItems, site } from "@/lib/site";
import { Container } from "@/components/section";

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="mt-auto border-t border-border bg-ink-900 text-paper-50">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Image
              src="/brand/logo-wordmark.png"
              alt="Instituto Curvelo"
              width={170}
              height={40}
              className="h-9 w-auto brightness-0 invert"
            />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-300">
              {site.name} — {t(site.tagline)}
            </p>
            <p className="mt-3 font-mono text-xs text-ink-300">{site.cnpj}</p>
          </div>

          <div>
            <div className="field-label mb-4 text-ink-300">
              <span className="text-teal-300">//</span> {t({ pt: "Navegação", en: "Navigation" })}
            </div>
            <ul className="space-y-2.5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-ink-300 transition-colors hover:text-paper-50"
                  >
                    {t(item.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="field-label mb-4 text-ink-300">
              <span className="text-teal-300">//</span> {t({ pt: "Contato", en: "Contact" })}
            </div>
            <ul className="space-y-3 text-sm text-ink-300">
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 size-4 shrink-0 text-teal-300" />
                <a href={`mailto:${contact.email}`} className="hover:text-paper-50">
                  {contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 size-4 shrink-0 text-teal-300" />
                <a href={contact.phoneHref} className="tnum hover:text-paper-50">
                  {contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0 text-teal-300" />
                <span>{contact.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="tick-rule mt-12 !bg-ink-700" />
        <p className="mt-6 font-mono text-xs text-ink-500">
          © {new Date().getFullYear()} {site.name}. {t({ pt: "Todos os direitos reservados.", en: "All rights reserved." })}
        </p>
      </Container>
    </footer>
  );
}
