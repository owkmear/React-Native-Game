import { Questions, Grades, Themes } from "../../model";

const questions: Questions = {
  1: {
    id: "2e3f33e6-0f3a-4a5d-a093-bfa31204440b",
    grade: Grades.Junior,
    theme: Themes.TYPESCRIPT,
    question: `Что будет выведено в консоль?`,
    code: `enum MODE {
  EASY,
  MEDIUM,
  HARD,
}
console.log(MODE[2]);`,
    correctAnswer: 3,
    variants: [`'MEDIUM'`, `2`, `'HARD'`, `undefined`],
    explanation: `В числовом перечислении каждой константе сопоставляется числовое значение. Обращаясь по числовому значению мы получаем текстовое значение 'HARD'`,
  },
};

export default questions;
