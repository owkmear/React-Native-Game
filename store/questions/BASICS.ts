import { Questions } from "../../model";

const questions: Questions = {
  1: {
    id: "f25cf5d2-3cc7-44df-acfa-fcc2cfc3a13a",
    grade: "Junior",
    theme: "Типы данных",
    question: `Что будет выведено в консоль?`,
    code: `const array = ["black", 19, "red", 13, "yellow", 3];
const result = 13 in array;

console.log(result);`,
    correctAnswer: 3,
    variants: ["true", "6", "false", "3"],
    explanation: `В данном случае мы проверяем, есть ли в массиве 'array' элемент с индексом '13'`,
  },
};

export default questions;
