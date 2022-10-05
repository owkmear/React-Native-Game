import { ImageSourcePropType } from "react-native";

export enum Grades {
  Junior = "Junior",
  Middle = "Middle",
  Senior = "Senior",
}

export enum Languages {
  Bosnia = "bs-BS",
  Germany = "de-DE",
  English = "en-US",
  Spain = "es-ES",
  French = "fr-FR",
  Indonesia = "id-ID",
  Italian = "it-IT",
  Japan = "ja-JA",
  Korea = "ko-KR",
  Netherlands = "nl-NL",
  Brazil = "pt-BR",
  Russian = "ru-RU",
  Thailand = "th-TH",
  Turkey = "tr-TR",
  Vietnam = "vi-VI",
  China = "zh-CN",
  Taiwan = "zh-TW",
}

export enum Themes {
  // Main
  BASICS = "BASICS",
  OBJECTS = "OBJECTS",
  DATA_TYPES = "DATA_TYPES",
  FUNCTIONS = "FUNCTIONS",
  CLASSES = "CLASSES",
  ERRORS = "ERRORS",
  ASYNC = "ASYNC",
  MODULES = "MODULES",

  // Extra
  STORAGE = "STORAGE",
  EVENTS = "EVENTS",
  TRICKS = "TRICKS",
  TYPESCRIPT = "TYPESCRIPT",
  ECMASCRIPT = "ECMASCRIPT",
  ALGORITHMS = "ALGORITHMS",
  MISC = "MISC",
}

export type Image = {
  source: ImageSourcePropType;
  width: number;
  height: number;
};

export type Question = {
  id: string;
  grade: Grades;
  theme: Themes;
  question: string;
  code?: string;
  correctAnswer: number;
  variants: string[];
  explanation: string;
};

export type Questions = {
  [key: string]: Question;
};

export type QuestionsSliceState = {
  language: Languages;
  questionNumber: number;
  answer: number | null;
  correct: boolean | null;
  question: Question;
  questions: Questions;
  completed: string[];
  currentTheme: Themes;
  currentGrade: Grades;
  images: {
    correctAnswers: Image[];
    correctAnswer: Image;
    currentCorrect: number;
    wrongAnswers: Image[];
    wrongAnswer: Image;
    currentWrong: number;
  };
};

export type StatisticsSliceState = {
  total: number;
  correct: number;
  wrong: number;
};

export type GradesOptions = {
  value: Grades;
  label: string;
}[];

export type LanguagesOptions = {
  value: Languages;
  label: string;
}[];
