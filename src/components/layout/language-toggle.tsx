"use client";

import { useLanguage } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function LanguageToggle({ className }: { className?: string }) {
  const { language, setLanguage } = useLanguage();
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-md border border-border font-mono text-xs",
        className,
      )}
      role="group"
      aria-label="Language"
    >
      {(["pt", "en"] as const).map((lang) => (
        <button
          key={lang}
          type="button"
          onClick={() => setLanguage(lang)}
          aria-pressed={language === lang}
          className={cn(
            "px-2.5 py-1.5 uppercase tracking-[0.08em] transition-colors first:rounded-l-md last:rounded-r-md",
            language === lang
              ? "bg-foreground text-background"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          {lang}
        </button>
      ))}
    </div>
  );
}
