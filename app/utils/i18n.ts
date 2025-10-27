import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import pt from "./i18n/pt.json";
import en from "./i18n/en.json";
import es from "./i18n/es.json";
import ru from "./i18n/ru.json";
import it from "./i18n/it.json";
import fr from "./i18n/fr.json";
import jp from "./i18n/jp.json";
import ko from "./i18n/ko.json";
import de from "./i18n/de.json";
import zh from "./i18n/zh.json";

export const translations = {
  pt,
  en,
  es,
  ru,
  it,
  fr,
  jp,
  ko,
  de,
  zh,
};

i18n.use(initReactI18next).init({
  resources: {
    pt: { translation: pt },
    en: { translation: en },
    es: { translation: es },
    ru: { translation: ru },
    it: { translation: it },
    fr: { translation: fr },
    ja: { translation: jp },
    ko: { translation: ko },
    de: { translation: de },
    zh: { translation: zh },
  },
  fallbackLng: "en",
  lng: "pt",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
