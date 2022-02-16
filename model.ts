export enum Grades {
  Junior = "JUNIOR",
  Middle = "MIDDLE",
  Senior = "SENIOR",
}

export type Theme = {
  id: string;
  name: string;
};

export type Themes = {
  [key: string]: Theme;
};

export type Question = {
  grade: Grades;
  theme: string;
  question: string;
  code: string;
  correctAnswer: number;
  variants: string[];
  explanation: string;
};

export type Questions = {
  [key: string]: Question;
};

export type QuestionsSliceState = {
  questionNumber: number;
  isOver: boolean;
  answer: number | null;
  correct: boolean | null;
  question: Question;
  questions: Questions;
  currentTheme: Theme;
  currentGrade: Grades;
};
