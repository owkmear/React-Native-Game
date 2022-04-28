import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    "en-US": {
      translations: {
        settings: "Settings",
        back: "Back",
        testing: "testing",
        start: "Start",
        page_not_found: "Page not found",
        back_to_menu: "Back to menu",
        to_answer: "Answer",
        grade: 'Grade: "{{grade}}"',
      },
    },
    "ru-RU": {
      translations: {
        settings: "Настройки",
        back: "Назад",
        testing: "тестирование",
        start: "Начать",
        page_not_found: "Страница не найдена",
        back_to_menu: "Вернуться в меню",
        to_answer: "Ответить",
        grade: 'Уровень: "{{grade}}"',
      },
    },
  },
  compatibilityJSON: "v3",
  fallbackLng: "en-US",
  debug: true,
  ns: ["translations"],
  defaultNS: "translations",
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
