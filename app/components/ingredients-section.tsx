"use client";
import { useTranslation } from "react-i18next";
import { Locale, ingredients } from "../utils/i18n-utils";

interface IngredientsSectionProps {
  locale: Locale;
}

export function IngredientsSection({ locale }: IngredientsSectionProps) {
  const { t } = useTranslation();

  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 md:p-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
        {t("ingredientes")}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {ingredients.map((ingredient, index) => {
          const ingredientName = t(ingredient.nameKey);
          const amount = t(ingredient.amountKey);

          return (
            <div
              key={index}
              className="flex items-center justify-between p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
            >
              <span className="font-medium text-foreground">
                {ingredientName}
              </span>
              <span className="text-muted-foreground">{amount}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
