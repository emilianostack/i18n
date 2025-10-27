"use client";
import { ChefHat } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Locale } from "../utils/i18n-utils";

interface RecipeHeaderProps {
  locale: Locale;
}

export function RecipeHeader({ locale }: RecipeHeaderProps) {
  const { t } = useTranslation();
  return (
    <div className="text-center space-y-4">
      <div className="flex justify-center">
        <div className="bg-primary/10 p-4 rounded-full">
          <ChefHat className="w-12 h-12 text-primary" />
        </div>
      </div>
      <h1 className="text-4xl md:text-5xl font-bold text-balance text-foreground">
        {t("boloDeCenoura")}
      </h1>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
        {t("receitaTitulo")}
      </p>
    </div>
  );
}
