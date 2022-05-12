import { Questions, Grades, Themes } from "../../model";

const questions: Questions = {
  1: {
    id: "6623883f-e664-4241-855e-6ae6615db35e",
    grade: Grades.Junior,
    theme: Themes.ECMASCRIPT,
    question: `Для задания приватных свойст и методов в JS используюется`,
    correctAnswer: 2,
    variants: ["Модификатор private", "#", "Замыкание", "_"],
    explanation: `Используется префикс '#' в имени свойств и методов. Приватные поля и методы появились в стандарте ES2022`,
  },
  2: {
    id: "8c3d35db-63af-4891-a116-4509eeab5ce8",
    grade: Grades.Junior,
    theme: Themes.ECMASCRIPT,
    question: `Что будет выведено в консоль?`,
    code: `class Connection {
  constructor(ip) {
    this.#ip = ip;
  }

  #ip = null;
}
const connection = new Connection("245.126.89.243");

console.log(connection.#ip);`,
    correctAnswer: 4,
    variants: [
      `'245.126.89.243'`,
      `undefined`,
      `null`,
      `Uncaught SyntaxError: Private field '#ip' must be declared in an enclosing class`,
    ],
    explanation: `Обращение к приватному свойству вне области видимости приведёт к ошибке`,
  },
};

export default questions;
