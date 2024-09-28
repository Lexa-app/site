"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { useRouter } from "next/navigation";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { IntlProvider } from "react-intl";
import frTranslations from "@/intl/translations/fr.json";
import enTranslations from "@/intl/translations/en.json";

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

const translations = {
  fr: frTranslations,
  en: enTranslations
};

export const availableLanguages = [
  { value: "fr", label: "common.language.fr" },
  { value: "en", label: "common.language.en" }
] as const;

export function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter();
  const locale = "en";

  return (
    <NextUIProvider navigate={router.push}>
      <NextThemesProvider  {...themeProps}>
        <IntlProvider locale={locale} messages={translations[locale]}>
          {children}
        </IntlProvider>
      </NextThemesProvider>
    </NextUIProvider>
  );
}
