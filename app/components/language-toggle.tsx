"use client";
import { useState, useRef, useEffect } from "react";
import { Locale } from "../utils/i18n-utils";

interface LanguageToggleProps {
  currentLocale: Locale;
  onLocaleChange: (locale: Locale) => void;
}

const LANGUAGES = [
  { code: "pt" as Locale, name: "Português", flag: "🇧🇷" },
  { code: "en" as Locale, name: "English", flag: "🇺🇸" },
  { code: "es" as Locale, name: "Español", flag: "🇪🇸" },
  { code: "ru" as Locale, name: "Русский", flag: "🇷🇺" },
  { code: "it" as Locale, name: "Italiano", flag: "🇮🇹" },
  { code: "fr" as Locale, name: "Français", flag: "🇫🇷" },
  { code: "ja" as Locale, name: "日本語", flag: "🇯🇵" },
  { code: "ko" as Locale, name: "한국어", flag: "🇰🇷" },
  { code: "de" as Locale, name: "Deutsch", flag: "🇩🇪" },
  { code: "zh" as Locale, name: "中文", flag: "🇨🇳" },
];

export function LanguageToggle({
  currentLocale,
  onLocaleChange,
}: LanguageToggleProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLanguage =
    LANGUAGES.find((lang) => lang.code === currentLocale) || LANGUAGES[0];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="relative " ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors font-medium text-sm"
      >
        <span className="text-xl">{currentLanguage.flag}</span>
        <span>{currentLanguage.name}</span>
        <svg
          className={`w-4 h-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full mt-2 right-0 w-48 bg-background border border-input rounded-md shadow-lg max-h-80 overflow-y-auto">
          {LANGUAGES.map((language) => (
            <button
              key={language.code}
              onClick={() => {
                onLocaleChange(language.code);
                setIsOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-2.5 text-left text-popover-foreground hover:bg-accent hover:text-accent-foreground transition-colors  ${
                currentLocale === language.code ? "bg-accent/50" : ""
              }`}
            >
              <span className="text-xl">{language.flag}</span>
              <span className="font-medium text-sm">{language.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
