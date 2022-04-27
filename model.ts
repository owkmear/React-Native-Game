import { ImageSourcePropType } from "react-native";

export enum Grades {
  Junior = "Junior",
  Middle = "Middle",
  Senior = "Senior",
}

export enum Themes {
  // Main
  BASICS = "BASICS",
  CODE_QUALITY = "CODE_QUALITY",
  OBJECTS = "OBJECTS",
  DATA_TYPES = "DATA_TYPES",
  FUNCTIONS = "FUNCTIONS",
  PROTOTYPES = "PROTOTYPES",
  CLASSES = "CLASSES",
  ERRORS = "ERRORS",
  ASYNC = "ASYNC",
  GENERATORS_ITERATORS = "GENERATORS_ITERATORS",
  MODULES = "MODULES",

  // Extra
  TRICKS = "TRICKS",
  TYPESCRIPT = "TYPESCRIPT",
  ECMASCRIPT = "ECMASCRIPT",
}

export type ThemesMap = {
  [key in Themes]: { name: string };
};

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

export type ImagesSliceState = {
  correctAnswers: Image[];
  correctAnswer: Image;
  currentCorrect: number;
  wrongAnswers: Image[];
  wrongAnswer: Image;
  currentWrong: number;
};

export type GradesOptions = {
  value: Grades;
  label: string;
}[];
