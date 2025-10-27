"use client";
import { useEffect, useState } from "react";
import { IngredientsSection } from "./ingredients-section";
import { InstructionsSection } from "./instructions-section";
import { LanguageToggle } from "./language-toggle";
import { RecipeFooter } from "./recipe-footer";
import { RecipeHeader } from "./recipe-header";
import { Locale } from "../utils/i18n-utils";
import i18next from "../utils/i18n";

export function RecipeContainer() {
  const [locale, setLocale] = useState<Locale>("pt");

  useEffect(() => {
    i18next.changeLanguage(locale);
  }, [locale]);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 md:py-12 max-w-4xl">
        <div className="flex justify-end mb-8">
          <LanguageToggle currentLocale={locale} onLocaleChange={setLocale} />
        </div>

        <div className="space-y-8">
          <RecipeHeader locale={locale} />
          <IngredientsSection locale={locale} />
          <InstructionsSection locale={locale} />
          <RecipeFooter locale={locale} />
        </div>
      </div>
    </div>
  );
}
