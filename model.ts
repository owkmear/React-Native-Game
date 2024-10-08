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
  grade: Grades;
};

export type ImagesSliceState = {
  correctAll: Image[];
  correct: Image;
  correctNumber: number;
  wrongAll: Image[];
  wrong: Image;
  wrongNumber: number;
  rankAll: RankImages;
  rank: Image;
};

export type StatisticsSliceState = {
  total: number;
  correct: number;
  wrong: number;
  rank: Rank;
};

export type GradesOptions = {
  value: Grades;
  label: string;
}[];

export type LanguagesOptions = {
  value: Languages;
  label: string;
}[];

export enum Rank {
  Trainee = "Trainee",
  Junior = "Junior",
  Middle = "Middle",
  Senior = "Senior",
  Architect = "Architect",
}

export type RankImages = {
  [Rank.Trainee]: Image;
  [Rank.Junior]: Image;
  [Rank.Middle]: Image;
  [Rank.Senior]: Image;
  [Rank.Architect]: Image;
};
