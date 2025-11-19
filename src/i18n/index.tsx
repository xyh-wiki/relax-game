/**
 * @Author:XYH
 * @Date:2025-11-20
 * @Description: 简单的前端国际化实现，使用 React Context 与 JSON 文本
 */
import React, { createContext, useContext, useMemo, useState } from "react";
import en from "./en.json";
import zh from "./zh.json";

type Locale = "en" | "zh";

interface I18nContextValue {
  locale: Locale;
  t: (key: string) => string;
  switchLocale: (next: Locale) => void;
}

const messages: Record<Locale, Record<string, string>> = {
  en,
  zh
};

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

export const I18nProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [locale, setLocale] = useState<Locale>("en");

  const t = (key: string): string => {
    const dict = messages[locale] ?? {};
    return dict[key] ?? messages["en"][key] ?? key;
  };

  const value = useMemo<I18nContextValue>(
    () => ({
      locale,
      t,
      switchLocale: (next) => setLocale(next)
    }),
    [locale]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = (): I18nContextValue => {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n must be used within I18nProvider");
  }
  return ctx;
};
