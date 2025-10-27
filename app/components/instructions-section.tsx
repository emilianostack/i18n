"use client";
import { useTranslation } from "react-i18next";
import { Locale, instructions } from "../utils/i18n-utils";

interface InstructionsSectionProps {
  locale: Locale;
}

export function InstructionsSection({ locale }: InstructionsSectionProps) {
  const { t } = useTranslation();

  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 md:p-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
        {t("instrucoes")}
      </h2>
      <div className="space-y-6">
        {instructions.map((step, index) => {
          const title = t(`${step.titleKey}`);
          const description = t(`${step.descriptionKey}`);

          return (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                  {index + 1}
                </div>
              </div>
              <div className="flex-1 space-y-2">
                <h3 className="text-lg font-semibold text-foreground">
                  {title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  {description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
