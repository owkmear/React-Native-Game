import { Questions, Grades } from "../../model";

const questions: Questions = {
  1: {
    id: "bd5ef8a7-2a90-4cf2-b4d5-189ba50e57be",
    grade: Grades.Junior,
    theme: "Промисы, async/await",
    question: `const loadStorage = async () =>
  await new Promise((resolve, reject) => {
    resolve("Storage");
  });

console.log(loadStorage());`,
    correctAnswer: 2,
    variants: [
      `"Storage"`,
      `undefined`,
      `Promise {<pending>}`,
      `Promise {<fulfilled>: 'Storage'}`,
    ],
    explanation: `Асинхронная функция не дожидается выполнения промиса, поэтому будет возвращён промис в состоянии 'pending'`,
  },
};

export default questions;
