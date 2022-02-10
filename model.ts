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

export type Question = {
  theme: string;
  question: string;
  code: string;
  correctAnswer: number;
  variants: string[];
  explanation: string;
};

export type Questions = {
  [key: number]: Question;
};
