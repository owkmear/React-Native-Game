import { Questions, Grades } from "../../model";

const questions: Questions = {
  1: {
    id: "f25cf5d2-3cc7-44df-acfa-fcc2cfc3a13a",
    grade: Grades.Junior,
    theme: "Типы данных",
    question: `Что будет выведено в консоль?`,
    code: `const array = ["black", 19, "red", 13, "yellow", 3];
const result = 13 in array;

console.log(result);`,
    correctAnswer: 3,
    variants: ["true", "6", "false", "3"],
    explanation: `В данном случае мы проверяем, есть ли в массиве 'array' элемент с индексом '13'`,
  },
  2: {
    id: "28dc98de-868b-4109-9c38-074045473a87",
    grade: Grades.Junior,
    theme: "Типы данных",
    question: `Что будет выведено в консоль?`,
    code: `const fruits = [];
fruits[0] = "apple";
fruits[1] = "pear";
fruits[5] = "banana";

console.log(fruits.length);`,
    correctAnswer: 2,
    variants: [`0`, `6`, `5`, `3`],
    explanation: `Отсутствующий промежуток массива будет заполняться значениями 'undefined', а в консоли массив будет выглядеть следующим образом: "['apple', 'pear', empty × 3, 'banana']"`,
  },
};

export default questions;
