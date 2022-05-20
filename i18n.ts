import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translation_BS from "./locales/bs-BS.json";
import translation_DE from "./locales/de-DE.json";
import translation_US from "./locales/en-US.json";
import translation_ES from "./locales/es-ES.json";
import translation_FR from "./locales/fr-FR.json";
import translation_RU from "./locales/ru-RU.json";
import translation_TW from "./locales/zh-TW.json";

i18n.use(initReactI18next).init({
  resources: {
    "bs-BS": { translation: translation_BS },
    "de-DE": { translation: translation_DE },
    "en-US": { translation: translation_US },
    "es-ES": { translation: translation_ES },
    "fr-FR": { translation: translation_FR },
    "ru-RU": { translation: translation_RU },
    "zh-TW": { translation: translation_TW },
  },
  compatibilityJSON: "v3",
  fallbackLng: "ru-RU",
  debug: true,
  ns: ["translation"],
  defaultNS: "translation",
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
