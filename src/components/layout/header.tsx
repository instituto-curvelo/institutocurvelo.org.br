"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { navItems } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Container } from "@/components/section";
import { LanguageToggle } from "@/components/layout/language-toggle";

export function Header() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md transition-shadow",
        scrolled && "shadow-sm",
      )}
    >
      <Container className="flex h-[72px] items-center justify-between">
        <Link href="/" className="flex items-center" aria-label="Instituto Curvelo">
          <Image
            src="/brand/logo-horizontal-light.svg"
            alt="Instituto Curvelo"
            width={130}
            height={48}
            priority
            unoptimized
            className="h-9 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-sm px-3 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:bg-surface hover:text-primary"
            >
              {t(item.label)}
            </Link>
          ))}
          <LanguageToggle />
        </nav>

        <button
          type="button"
          className="lg:hidden"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </Container>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2.5 text-sm font-medium text-foreground hover:bg-muted"
              >
                {t(item.label)}
              </Link>
            ))}
            <div className="px-2 pt-3">
              <LanguageToggle />
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
