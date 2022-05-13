import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translation_US from "./locales/en-US.json";
import translation_RU from "./locales/ru-RU.json";
import translation_TW from "./locales/zh-TW.json";

i18n.use(initReactI18next).init({
  resources: {
    "en-US": { translation: translation_US },
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
