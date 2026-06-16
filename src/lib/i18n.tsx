"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Language = "pt" | "en";

/** A string that exists in both languages. */
export type Localized = { pt: string; en: string };

const STORAGE_KEY = "institute-language";

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  /** Resolve a Localized value (or a [pt, en] tuple) to the active language. */
  t: (value: Localized | [string, string]) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("pt");

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as Language | null;
    if (saved === "pt" || saved === "en") setLanguageState(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (next: Language) => {
    setLanguageState(next);
    localStorage.setItem(STORAGE_KEY, next);
  };

  const t = (value: Localized | [string, string]) =>
    Array.isArray(value) ? value[language === "pt" ? 0 : 1] : value[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
