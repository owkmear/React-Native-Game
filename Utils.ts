import {
  Questions,
  GradesOptions,
  Grades,
  LanguagesOptions,
  Languages,
} from "./model";
import { getQuestionsData } from "./store/mockData";

export const randomInteger = (min: number, max: number): number =>
  Math.floor(min + Math.random() * (max + 1 - min));

export const filterQuestionsData = (
  grade: string,
  language: Languages,
  completed: string[] = []
): Questions => {
  const questionsData = getQuestionsData(language);
  const filteredQuestions: Questions = {};
  let index = 1;
  for (let key in questionsData) {
    if (
      questionsData[key].grade === grade &&
      !completed.includes(questionsData[key].id)
    ) {
      filteredQuestions[index] = questionsData[key];
      index++;
    }
  }
  return filteredQuestions;
};

export const gradesOptions: GradesOptions = [
  { value: Grades.Junior, label: Grades.Junior },
  { value: Grades.Middle, label: Grades.Middle },
  { value: Grades.Senior, label: Grades.Senior },
];

export const languagesOptions: LanguagesOptions = [
  { value: Languages.Bosnia, label: "Bosanski" },
  { value: Languages.Germany, label: "Deutsch" },
  { value: Languages.English, label: "English" },
  { value: Languages.Spain, label: "Español" },
  { value: Languages.French, label: "Français" },
  { value: Languages.Indonesia, label: "Indonesia" },
  { value: Languages.Japan, label: "日本語" },
  { value: Languages.Korea, label: "한국어" },
  { value: Languages.Netherlands, label: "Nederlands" },
  { value: Languages.Brazil, label: "Português Brasil" },
  { value: Languages.Russian, label: "Русский" },
  { value: Languages.Thailand, label: "ไทย" },
  { value: Languages.Turkey, label: "Türkçe" },
  { value: Languages.Ukraine, label: "Українська мова" },
  { value: Languages.Vietnam, label: "Tiếng Việt" },
  { value: Languages.China, label: "简体中文" },
  { value: Languages.Taiwan, label: "繁體中文" },
];
