"use client";
import { useTranslation } from "react-i18next";
import { Locale } from "../utils/i18n-utils";

interface RecipeFooterProps {
  locale: Locale;
}

export function RecipeFooter({ locale }: RecipeFooterProps) {
  const { t } = useTranslation();
  return (
    <div className="text-center py-8">
      <p className="text-muted-foreground">{t("feitoPor")}</p>
    </div>
  );
}
