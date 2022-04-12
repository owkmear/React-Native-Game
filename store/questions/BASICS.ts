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
  3: {
    id: "f6c71972-352a-4763-9335-968bf547ee78",
    grade: Grades.Junior,
    theme: "Типы данных",
    question: `Что будет выведено в консоль?`,
    code: `const rate = { 5: 10, "5": 20 };

console.log(rate[5] + rate["5"]);`,
    correctAnswer: 4,
    variants: [`30`, `20`, `1020`, `40`],
    explanation: `Ключом в объектах может быть только строка или символ. В данном случае числовой ключ приводится к строке и выходит два строковых ключа '5'. При объявлении одинаковых ключей значение берётся только из последнего по порядку объявления. Когда мы обращаемся к объекту используя число в качестве ключа, то у нас тоже происходит преобразование числа к строке. В итоге у нас получается только один ключ '5' со значением '20'`,
  },
  4: {
    id: "cfdedcfd-32ed-4b92-bb3c-dba39b37b8e1",
    grade: Grades.Middle,
    theme: "Типы данных",
    question: `Что будет выведено в консоль?`,
    code: `class User {
  constructor({ login } = { login: "Quest" }, { service = "delivery" } = {}) {
    this.login = login;
    this.service = service;
  }
  get info() {
    return [this.login, this.service];
  }
}

const user = new User({}, {});

console.log(user.info);`,
    correctAnswer: 1,
    variants: [
      `[undefined, 'delivery']`,
      `[Quest, undefined]`,
      `[Quest, 'delivery']`,
      `[undefined, undefined]`,
    ],
    explanation: `Параметр 'login' в конструкторе получит деструктуризацию по-умолчанию только если передать undefined в первый параметр`,
  },
};

export default questions;
