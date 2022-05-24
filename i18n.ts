import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translation_BS from "./locales/bs-BS.json";
import translation_DE from "./locales/de-DE.json";
import translation_US from "./locales/en-US.json";
import translation_ES from "./locales/es-ES.json";
import translation_FR from "./locales/fr-FR.json";
import translation_ID from "./locales/id-ID.json";
import translation_JA from "./locales/ja-JA.json";
import translation_KR from "./locales/ko-KR.json";
import translation_NL from "./locales/nl-NL.json";
import translation_BR from "./locales/pt-BR.json";
import translation_RU from "./locales/ru-RU.json";
import translation_TH from "./locales/th-TH.json";
import translation_TW from "./locales/zh-TW.json";

i18n.use(initReactI18next).init({
  resources: {
    "bs-BS": { translation: translation_BS },
    "de-DE": { translation: translation_DE },
    "en-US": { translation: translation_US },
    "es-ES": { translation: translation_ES },
    "fr-FR": { translation: translation_FR },
    "id-ID": { translation: translation_ID },
    "ja-JA": { translation: translation_JA },
    "ko-KR": { translation: translation_KR },
    "nl-NL": { translation: translation_NL },
    "pt-BR": { translation: translation_BR },
    "ru-RU": { translation: translation_RU },
    "th-TH": { translation: translation_TH },
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
