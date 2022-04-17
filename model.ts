import { ImageSourcePropType } from "react-native";

export enum Grades {
  Junior = "Junior",
  Middle = "Middle",
  Senior = "Senior",
}

export type Theme = {
  id: string;
  name: string;
};

export type Themes = {
  [key: string]: Theme;
};

export type Image = {
  source: ImageSourcePropType;
  width: number;
  height: number;
};

export type Question = {
  id: string;
  grade: Grades;
  theme: string;
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
  currentTheme: Theme;
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

export type GradesOptions = {
  value: Grades;
  label: string;
}[];
