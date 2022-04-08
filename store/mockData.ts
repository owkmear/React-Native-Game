import { Grades, Themes, Questions, Image } from "../model";

const grades: Grades = {
  JUNIOR: "Junior",
  MIDDLE: "Middle",
  SENIOR: "Senior",
};

const themes: Themes = {
  BASICS: { id: "BASICS", name: "Основы JavaScript" },
  TRICKS: { id: "TRICKS", name: "Хитрости JavaScript" },
  DATA_TYPES: { id: "DATA_TYPES", name: "Типы данных" },
  CODE_QUALITY: { id: "CODE_QUALITY", name: "Качество кода" },
  PROTOTYPES: { id: "PROTOTYPES", name: "Прототипы, наследование" },
  ASYNC: { id: "ASYNC", name: "Промисы, async/await" },
  GENERATORS_ITERATORS: {
    id: "GENERATORS_ITERATORS",
    name: "Генераторы, продвинутая итерация",
  },
  TYPESCRIPT: { id: "TYPESCRIPT", name: "Typescript" },
  ES2022: { id: "ES2022", name: "ECMAScript 2022" },
};

const correctAnswerImages: Image[] = [
  {
    source: require("../assets/images/correct/correct_1.png"),
    width: 760,
    height: 611,
  },
  {
    source: require("../assets/images/correct/correct_2.png"),
    width: 513,
    height: 714,
  },
  {
    source: require("../assets/images/correct/correct_3.png"),
    width: 573,
    height: 494,
  },
  {
    source: require("../assets/images/correct/correct_4.png"),
    width: 653,
    height: 697,
  },
  {
    source: require("../assets/images/correct/correct_5.png"),
    width: 1100,
    height: 800,
  },
  {
    source: require("../assets/images/correct/correct_6.png"),
    width: 1100,
    height: 800,
  },
  {
    source: require("../assets/images/correct/correct_7.png"),
    width: 1100,
    height: 800,
  },
  {
    source: require("../assets/images/correct/correct_8.png"),
    width: 1100,
    height: 800,
  },
  {
    source: require("../assets/images/correct/correct_9.png"),
    width: 1100,
    height: 800,
  },
  {
    source: require("../assets/images/correct/correct_10.png"),
    width: 1100,
    height: 800,
  },
  {
    source: require("../assets/images/correct/correct_11.png"),
    width: 1100,
    height: 800,
  },
  {
    source: require("../assets/images/correct/correct_12.png"),
    width: 1100,
    height: 800,
  },
  {
    source: require("../assets/images/correct/correct_13.png"),
    width: 1100,
    height: 800,
  },
  {
    source: require("../assets/images/correct/correct_14.png"),
    width: 1100,
    height: 800,
  },
  {
    source: require("../assets/images/correct/correct_15.png"),
    width: 1100,
    height: 800,
  },
  {
    source: require("../assets/images/correct/correct_16.png"),
    width: 1100,
    height: 800,
  },
  {
    source: require("../assets/images/correct/correct_17.png"),
    width: 1100,
    height: 800,
  },
  {
    source: require("../assets/images/correct/correct_18.png"),
    width: 1100,
    height: 800,
  },
  {
    source: require("../assets/images/correct/correct_19.png"),
    width: 1100,
    height: 800,
  },
  {
    source: require("../assets/images/correct/correct_20.png"),
    width: 1100,
    height: 800,
  },
];

const wrongAnswerImages: Image[] = [
  {
    source: require("../assets/images/wrong/wrong_1.png"),
    width: 677,
    height: 630,
  },
  {
    source: require("../assets/images/wrong/wrong_2.png"),
    width: 463,
    height: 656,
  },
  {
    source: require("../assets/images/wrong/wrong_3.png"),
    width: 537,
    height: 366,
  },
  {
    source: require("../assets/images/wrong/wrong_4.png"),
    width: 1100,
    height: 800,
  },
  {
    source: require("../assets/images/wrong/wrong_5.png"),
    width: 1100,
    height: 800,
  },
  {
    source: require("../assets/images/wrong/wrong_6.png"),
    width: 1100,
    height: 800,
  },
  {
    source: require("../assets/images/wrong/wrong_7.png"),
    width: 1100,
    height: 800,
  },
  {
    source: require("../assets/images/wrong/wrong_8.png"),
    width: 1100,
    height: 800,
  },
  {
    source: require("../assets/images/wrong/wrong_9.png"),
    width: 999,
    height: 656,
  },
  {
    source: require("../assets/images/wrong/wrong_10.png"),
    width: 1100,
    height: 800,
  },
  {
    source: require("../assets/images/wrong/wrong_11.png"),
    width: 1100,
    height: 800,
  },
  {
    source: require("../assets/images/wrong/wrong_12.png"),
    width: 1100,
    height: 800,
  },
  {
    source: require("../assets/images/wrong/wrong_13.png"),
    width: 1100,
    height: 800,
  },
  {
    source: require("../assets/images/wrong/wrong_14.png"),
    width: 1100,
    height: 800,
  },
  {
    source: require("../assets/images/wrong/wrong_15.png"),
    width: 1100,
    height: 800,
  },
  {
    source: require("../assets/images/wrong/wrong_16.png"),
    width: 1100,
    height: 800,
  },
  {
    source: require("../assets/images/wrong/wrong_17.png"),
    width: 1100,
    height: 800,
  },
  {
    source: require("../assets/images/wrong/wrong_18.png"),
    width: 1100,
    height: 800,
  },
  {
    source: require("../assets/images/wrong/wrong_19.png"),
    width: 1100,
    height: 800,
  },
  {
    source: require("../assets/images/wrong/wrong_20.png"),
    width: 1100,
    height: 800,
  },
  {
    source: require("../assets/images/wrong/wrong_21.png"),
    width: 1100,
    height: 800,
  },
  {
    source: require("../assets/images/wrong/wrong_22.png"),
    width: 1100,
    height: 800,
  },
  {
    source: require("../assets/images/wrong/wrong_23.png"),
    width: 1100,
    height: 800,
  },
  {
    source: require("../assets/images/wrong/wrong_24.png"),
    width: 1100,
    height: 800,
  },
  {
    source: require("../assets/images/wrong/wrong_25.png"),
    width: 1100,
    height: 800,
  },
  {
    source: require("../assets/images/wrong/wrong_26.png"),
    width: 1100,
    height: 800,
  },
  {
    source: require("../assets/images/wrong/wrong_27.png"),
    width: 1100,
    height: 800,
  },
  {
    source: require("../assets/images/wrong/wrong_28.png"),
    width: 1100,
    height: 800,
  },
  {
    source: require("../assets/images/wrong/wrong_29.png"),
    width: 1100,
    height: 800,
  },
  {
    source: require("../assets/images/wrong/wrong_30.png"),
    width: 1100,
    height: 800,
  },
  {
    source: require("../assets/images/wrong/wrong_31.png"),
    width: 1100,
    height: 800,
  },
];

const questionsData: Questions = {
  1: {
    id: "edd3d592-3686-41f7-86e7-dc969e06b125",
    grade: "Junior",
    theme: "Тонкости и неоднозначности языка",
    question: `Что будет выведено в консоль?`,
    code: `let arr = [1, 2, 3];
arr.length = 5;
console.log(arr);`,
    correctAnswer: 4,
    variants: [
      "[1, 2, 3, length: 5]",
      "[1, 2, 3]",
      "[1, 2, 3, null, null]",
      "[1, 2, 3, <2 empty items>] либо [1, 2, 3, undefined, undefined]",
    ],
    explanation: `Массивы являются спископодобными объектами, чьи прототипы содержат методы для операций обхода и изменения массива. Ни размер массива, ни типы его элементов не являются фиксированными, поскольку размер массива может увеличиваться и уменьшаться в любое время, то нет, ровным счётом, никакой гарантии, что массив окажется плотным. Кроме того, в любой момент допускается установить свойство 'Array.length' для изменения размера массива. В данном конкрентном случае, происходит расширение массива, путём увеличения числового значения свойства 'Array.length' до 5. При этом, скажем так, расширенные элементы будут иметь значение 'undefined'.`,
  },
  2: {
    id: "2354da12-4c22-496a-a5f0-bc7840348381",
    grade: "Middle",
    theme: "Тонкости и неоднозначности языка",
    question: `Что будет выведено в консоль в результате выполнения данной функции?`,
    code: `const foo = (a, b, c=333) => {
  arguments[0] = 999;
  arguments[1] = 777;
  console.log(a, b);
}
foo(111, 222);`,
    correctAnswer: 2,
    variants: [
      "111 222",
      "ReferenceError: arguments is not defined",
      "999 777",
      "SyntaxError: Unexpected token '='",
    ],
    explanation:
      "Стрелочные функции ('arrow functions') не имеют собственного объекта 'arguments', поэтому в теле стрелочных функций 'arguments' будет ссылаться на переменную в окружающей области видимости.",
  },
  3: {
    id: "b781b79b-a69f-4435-addb-6fedba22d560",
    grade: "Middle",
    theme: "Тонкости и неоднозначности языка",
    question:
      "Что будет выведено в консоль в результате выполнения данного кода?",
    code: `const toString = Object.prototype.toString;
const r = toString(null);
console.log(r);`,
    correctAnswer: 4,
    variants: [
      "[object Null]",
      "[object Object]",
      "null",
      "[object Undefined]",
    ],
    explanation:
      "Для корректного использования метода 'Object.prototype.toString()' с любым объектом, необходимо вызвать на нём функции 'Function.prototype.call()' или 'Function.prototype.apply()' передав объект, который хотим исследовать, первым параметром 'thisArgs'. Фактически же, мы не передали методу никакого объекта, соответственно тот резонно из раза в раз будет возвращать нам строковое представление 'undefined'.",
  },
  4: {
    id: "3075881a-f294-452e-9513-f7eac0824830",
    grade: "Junior",
    theme: "Тонкости и неоднозначности языка",
    question: "Что будет выведено в консоль?",
    code: `let a = null;
let b = Number('0');
console.log(a >= b);`,
    correctAnswer: 1,
    variants: ["true", "false"],
    explanation:
      "Довольно неочевидное поведение языка, особенно если вы знаете что 'null > 0', 'null == 0'и 'null < 0'возвращают 'false'. Для того, чтобы понять происходящее необходимо разобрать логику работы оператора 'больше или равно' ('>='). Получая левым операндом 'null', а правым 'string', данный оператор выполнит приведение операндов к примитиву (в данном случае к типу 'number'), после чего выполнит сравнение '0 >= 0', что закономерно вернёт 'true'.",
  },
  5: {
    id: "ed81c908-3504-4550-8e7b-d309ecf15d6b",
    grade: "Senior",
    theme: "Тонкости и неоднозначности языка",
    question: "Что будет выведено в консоль?",
    code: `new Promise((res, rej)) => {
  setTimeout(() => {
    res('OK')
  }, 3000);
}).then(r => {
  console.log(r);
}).finally(msg => {
  console.log('The end');
});`,
    correctAnswer: 1,
    variants: ["Ok затем The end", "OK", "The end затем OK", "The end"],
    explanation:
      "Согласно спецификации JS, метод 'Promise.prototype.finally()' возвращает промис в случае, когда некоторый промис был выполнен (неважно насколько успешно). Это даёт возможность запустить один раз определённый код, который должен выполняться вне зависимости от того, с каким результатом выполнился исходный промис (что собственно и отражено в данном примере).",
  },
  6: {
    id: "f73a3a9a-19a7-4b0a-bacb-664814a8e2c6",
    grade: "Senior",
    theme: "Тонкости и неоднозначности языка",
    question: "Что будет выведено в консоль?",
    code: `function* foo(end) {
  let i = 0;
  while(i < end)
    yield i++;
}
let bar = foo(1);
console.log(bar.next().value);
console.log(bar.next().done);`,
    correctAnswer: 1,
    variants: ["0 затем true", "true затем 0", "true", "0"],
    explanation:
      "Функции-генераторы (объявленные как 'function*') несколько отличаются от обычных объектов функций. Когда генератор вызывается, он не выполняет свой код. Вместо этого генератор возвращает 'объект-генератор', основным методом которого является 'next()'. При вызове он запускает выполнение кода до ближайшей инструкции 'yield'. По достижении 'yield' выполнение функции приостанавливается, а соответствующее значение возвращается во внешний код. Метод '.next()' возвращает объект с двумя свойствами 'done' и 'value'. Свойство 'done' описывает положение итератора (если элемент последний - связан со значением 'true', иначе 'false'). Свойство 'value' связываются с любым валидным значением, возвращаемым итератором.",
  },
  7: {
    id: "effef574-f18d-4136-8b8d-a3d3ea5fa1aa",
    grade: "Junior",
    theme: "Тонкости и неоднозначности языка",
    question: "Что будет выведено в консоль?",
    code: `const summ = 13 + 7n;
		console.log(summ);`,
    correctAnswer: 3,
    variants: ["20", "137n", "Выбросится исключение", "undefined"],
    explanation: `Выбросится исключение "Uncaught TypeError: Cannot mix BigInt and other types, use explicit conversions". В операциях мы не можем смешивать типы BigInt и number`,
  },
  8: {
    id: "2b0efc4d-feac-422a-a1b6-f7694ddb12a1",
    grade: "Middle",
    theme: "Основные понятия и лексика",
    question: "Что будет выведено в консоль?",
    code: `let p1 = new Promise((res, rej)) => {
  setTimeout(() => {
    res(111);
  }, 3000);
}

let p2 = new Promise((res, rej)) => {
  setTimeout(() => {
    res(222);
  }, 1000);
}

Promise.race([p1, p2]).then(r => {
  console.log(r);
});`,
    correctAnswer: 3,
    variants: ["[222, 111]", "111", "222"],
    explanation: `Согласно спецификации JS, метод 'Promise.race()' возвращает промис с результатом, первого завершенного из переданных методу промисов. Иначе говоря, данный метод вернёт 'resolve' или 'reject', в зависимости от того, что случится первым. В данном примере гонку выиграет промис 'p2', значение, возвращаемое функцией 'resolve', которого и выводится в консоль.`,
  },
  9: {
    id: "f1e7ec19-6767-4763-8153-d8864bc16393",
    grade: "Middle",
    theme: "Основные понятия и лексика",
    question: "Для чего предназначен оператор ** ?",
    correctAnswer: 1,
    variants: [
      "Для возведения числа a в степень b",
      "Для умножения числа a на самого себя",
      "Данный оператор отсутствует в JS",
      "Помечает строку как комментарий",
    ],
    explanation: `Оператор возведения в степень ('**') возвращает результат первого операнда в степень. К слову, данный оператор право ассоциативен, то есть 'a ** b ** c' равно 'a ** (b ** c)'.`,
  },
  10: {
    id: "59c70ff6-e7de-4e44-87fa-20f13fc35113",
    grade: "Senior",
    theme: "Продвинутые концепции языка",
    question:
      "Что будет выведено в консоль в результате выполнения данного кода?",
    code: `const a = 10000000000000000;
const b = 1.1;
console.log(a + b);`,
    correctAnswer: 2,
    variants: [
      "10000000000000000.1",
      "10000000000000002",
      "10000000000000001.1",
      "-1",
    ],
    explanation: `В данном случае, причина кроектся в стандарте IEEE 754-2008 для двоихчных вычислений с плавающей запятой. При таких величинах выполняется округление до ближайшего чётного числа. Вряд ли вы столкнётесь с этим на практике, но это довольно частый вопрос на собеседованиях`,
  },
  11: {
    id: "16a5758e-1585-45d7-8d29-86523f236348",
    grade: "Senior",
    theme: "Продвинутые концепции языка",
    question: "Что будет выведено в консоль?",
    code: `console.log(new String('str') == 'str');
console.log(typeof new String('str'));`,
    correctAnswer: 4,
    variants: [
      "true затем string",
      "false затем object",
      "false затем string",
      "true затем object",
    ],
    explanation: `Перво-наперво определимся с тем, что вызов 'new String('str')' вернёт нам 'объект String'. Поэтому вызов 'typeof' с 'new String('str')' в качестве операнда всегда будет возвращать 'object'. В свою очередь, операция 'new String('str') == 'str' неявно (при помощи метода 'Object.prototype.toString()') приведёт левый операнд к строке. После чего операция '==' вернёт 'true'`,
  },
  12: {
    id: "b514f2c2-ce9a-4c5b-8008-45c86f6da9b0",
    grade: "Senior",
    theme: "Продвинутые концепции языка",
    question: "Что будет выведено в консоль?",
    code: `const a = 10000000000000000;
console.log(a + 1);`,
    correctAnswer: 4,
    variants: [
      "Infinity",
      "9999999999999999",
      "10000000000000001",
      "10000000000000000",
    ],
    explanation: `В данном случае, причина кроектся в стандарте IEEE 754-2008 для двоихчных вычислений с плавающей запятой. При таких величинах выполняется округление до ближайшего чётного числа. Вряд ли вы столкнётесь с этим на практике, но это довольно частый вопрос на собеседованиях`,
  },
};

export {
  questionsData,
  grades,
  themes,
  correctAnswerImages,
  wrongAnswerImages,
};
