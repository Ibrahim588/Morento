"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "ar" | "en";

interface LanguageContextType {
  language: Language;
  direction: "rtl" | "ltr";
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
  t: (arText: string, enText: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>("ar");

  useEffect(() => {
    const saved = localStorage.getItem("morento_lang") as Language;
    if (saved === "ar" || saved === "en") {
      setLanguageState(saved);
      document.documentElement.lang = saved;
      document.documentElement.dir = saved === "ar" ? "rtl" : "ltr";
    } else {
      document.documentElement.lang = "ar";
      document.documentElement.dir = "rtl";
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("morento_lang", lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  };

  const toggleLanguage = () => {
    const next = language === "ar" ? "en" : "ar";
    setLanguage(next);
  };

  const t = (arText: string, enText: string): string => {
    return language === "ar" ? arText : enText;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        direction: language === "ar" ? "rtl" : "ltr",
        toggleLanguage,
        setLanguage,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

