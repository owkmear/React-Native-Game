import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translations: {
          settings: "Settings",
          back: "Back",
          testing: "testing",
          start: "Start",
          page_not_found: "Page not found",
          back_to_menu: "Back to menu",
        },
      },
      ru: {
        translations: {
          settings: "Настройки",
          back: "Назад",
          testing: "тестирование",
          start: "Начать",
          page_not_found: "Страница не найдена",
          back_to_menu: "Вернуться в меню",
        },
      },
    },
    fallbackLng: "en",
    debug: true,
    ns: ["translations"],
    defaultNS: "translations",
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
