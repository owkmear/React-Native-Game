import { Questions, Grades } from "../../model";

const questions: Questions = {
  1: {
    id: "691386b7-0db7-4fc1-8bbc-82164632217d",
    grade: Grades.Senior,
    theme: "Хитрости JavaScript",
    question: `Что будет выведено в консоль?`,
    code: `function calculate(...rest) {
  return
    rest.filter((number, index) => index % 2 === 0);
}

const result = calculate(12, 3, 9, 6);

console.log(result);
`,
    correctAnswer: 4,
    variants: [`[12, 9]`, `undefined`, `[3, 6]`, `[]`],
    explanation: `Следует обратить внимание что висячий оператор return висячий. Javascript автоматически производит расстановку точек с запятыми (ASI), поэтому висячий return будет преобразован в 'return;' и функция вернёт undefined`,
  },
};

export default questions;
