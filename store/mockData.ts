import { Grades, Image, Questions, Themes, ThemesMap } from "../model";

const themes: ThemesMap = {
  // Main
  BASICS: { name: "Основы JavaScript" },
  CODE_QUALITY: { name: "Качество кода" },
  OBJECTS: { name: "Объекты" },
  DATA_TYPES: { name: "Типы данных" },
  FUNCTIONS: { name: "Функции" },
  PROTOTYPES: { name: "Прототипы, наследование" },
  CLASSES: { name: "Классы" },
  ERRORS: { name: "Обработка ошибок" },
  ASYNC: { name: "Промисы, async/await" },
  GENERATORS_ITERATORS: {
    name: "Генераторы, продвинутая итерация",
  },
  MODULES: { name: "Модули" },

  // Extra
  TRICKS: { name: "Хитрости JavaScript" },
  TYPESCRIPT: { name: "Typescript" },
  ECMASCRIPT: { name: "Новые стандарты языка ECMAScript" },
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
    grade: Grades.Junior,
    theme: Themes.DATA_TYPES,
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
    grade: Grades.Middle,
    theme: Themes.FUNCTIONS,
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
    grade: Grades.Middle,
    theme: Themes.OBJECTS,
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
    grade: Grades.Junior,
    theme: Themes.DATA_TYPES,
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
    grade: Grades.Senior,
    theme: Themes.ASYNC,
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
    grade: Grades.Senior,
    theme: Themes.ASYNC,
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
    grade: Grades.Junior,
    theme: Themes.DATA_TYPES,
    question: "Что будет выведено в консоль?",
    code: `const summ = 13 + 7n;
		console.log(summ);`,
    correctAnswer: 3,
    variants: ["20", "137n", "Выбросится исключение", "undefined"],
    explanation: `Выбросится исключение "Uncaught TypeError: Cannot mix BigInt and other types, use explicit conversions". В операциях мы не можем смешивать типы BigInt и number`,
  },
  8: {
    id: "2b0efc4d-feac-422a-a1b6-f7694ddb12a1",
    grade: Grades.Middle,
    theme: Themes.ASYNC,
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
    grade: Grades.Middle,
    theme: Themes.BASICS,
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
    grade: Grades.Senior,
    theme: Themes.DATA_TYPES,
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
    grade: Grades.Senior,
    theme: Themes.DATA_TYPES,
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
    grade: Grades.Senior,
    theme: Themes.DATA_TYPES,
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

const criticalQuestionsData: Questions = {
  1: {
    grade: Grades.Middle,
    theme: Themes.BASICS,
    question: "Каким будет результат?",
    code: 'let person = { name: "Lydia" };\nconst members = [person];\nperson = null;\n\nconsole.log(members);',
    correctAnswer: 4,
    variants: ["`null`", "`[null]`", "`[{}]`", '`[{ name: "Lydia" }]`'],
    explanation:
      'Сначала мы объявляем переменную `person` со значением объекта, у которого есть свойство` name`.\n\n<img src="https://i.imgur.com/TML1MbS.png" width="200">\n\nЗатем мы объявляем переменную с именем `members`. Мы устанавливаем первый элемент этого массива равным значению переменной `person`. Объекты взаимодействуют посредством _ссылок_ при установке их равными друг другу. Когда вы назначаете ссылку из одной переменной в другую, вы создаете _копию_ этой ссылки. (обратите внимание, что у них _не одинаковые_ ссылки!)\n\n<img src="https://i.imgur.com/FSG5K3F.png" width="300">\n\nЗатем мы присваиваем переменной `person` значение `null`.\n\n<img src="https://i.imgur.com/sYjcsMT.png" width="300">\n\nМы изменили только значение переменной `person`, а не первый элемент в массиве, поскольку этот элемент имеет другую (скопированную) ссылку на объект. Первый элемент в `members` по-прежнему содержит ссылку на исходный объект. Когда мы выводим в консоль массив `members`, первый элемент по-прежнему содержит значение объекта, который выводится в консоль.',
    id: "46",
  },
  2: {
    grade: Grades.Middle,
    theme: Themes.BASICS,
    question: "Что будет на выходе?",
    code: "class Counter {\n  constructor() {\n    this.count = 0;\n  }\n\n  increment() {\n    this.count++;\n  }\n}\n\nconst counterOne = new Counter();\ncounterOne.increment();\ncounterOne.increment();\n\nconst counterTwo = counterOne;\ncounterTwo.increment();\n\nconsole.log(counterOne.count);",
    correctAnswer: 4,
    variants: ["`0`", "`1`", "`2`", "`3`"],
    explanation:
      '`counterOne` экземпляр класса `Counter`. Counter класс содержит метод `increment` и свойство `count` в конструкторе. Сперва, при помощи `counterOne.increment()`, мы дважды вызываем метод `increment`. `counterOne.count` становится `2`.\n\n<img src="https://i.imgur.com/KxLlTm9.png" width="400">\n\nЗатем, мы создаем новую переменную `counterTwo`, и присваиваем ей `counterOne`. Поскольку объекты передаются по ссылке, мы просто создаем новую ссылку на то же место в памяти, на которое указывает `counterOne`. Поскольку переменные ссылаются на то же место в памяти, любые изменения, внесенные в объект, на который ссылается `counterTwo`, также применяются к` counterOne`. Теперь `counterTwo.count` равно `2`.\n\nМы вызываем `counterTwo.increment()`, что устанавливает значение `count` равное `3`. Затем мы выводим в консоль значение переменной `counterOne`, которое равно `3`.\n\n<img src="https://i.imgur.com/BNBHXmc.png" width="400">',
    id: "132",
  },
  3: {
    grade: Grades.Middle,
    theme: Themes.BASICS,
    question: "Каким будет результат?",
    code: 'const foo = () => console.log("First");\nconst bar = () => setTimeout(() => console.log("Second"));\nconst baz = () => console.log("Third");\n\nbar();\nfoo();\nbaz();',
    correctAnswer: 2,
    variants: [
      "`First` `Second` `Third`",
      "`First` `Third` `Second`",
      "`Second` `First` `Third`",
      "`Second` `Third` `First`",
    ],
    explanation:
      'Мы вызываем функцию `setTimeout` первой. Тем не менее, она выводится в консоль последней\n\nЭто происходит из-за того, что в браузерах у нас есть не только рантайм движок, но и `WebAPI`. `WebAPI` предоставляет нам функцию `setTimeout` и много других возможностей. Например, DOM.\n\nПосле того как _коллбек_ отправлен в `WebAPI`, функция `setTimeout` (но не коллбек!) вынимается из стека.\n\n<img src="https://i.imgur.com/X5wsHOg.png" width="200">\n\nТеперь вызывается `foo`, и `"First"` выводится в консоль.\n\n<img src="https://i.imgur.com/Pvc0dGq.png" width="200">\n\n`foo` достается из стека, и вызывается `baz`. `"Third"` выводится в консоль.\n\n<img src="https://i.imgur.com/WhA2bCP.png" width="200">\n\nWebAPI не может добавлять содержимое в стек когда захочет. Вместо этого он отправляет коллбек-функцию в так называемую _очередь_.\n\n<img src="https://i.imgur.com/NSnDZmU.png" width="200">\n\nЗдесь на сцену выходит цикл событий (event loop). **Event loop** проверяет стек и очередь задач. Если стек пустой, то он берет первый элемент из очереди и отправляет его в стек.\n\n<img src="https://i.imgur.com/uyiScAI.png" width="200">\n\nВызывается `bar`, в консоль выводится `"Second"` и эта функция достается из стека.',
    id: "30",
  },
  4: {
    grade: Grades.Junior,
    theme: Themes.BASICS,
    question: "Назовите три фазы распространения событий",
    correctAnswer: 4,
    variants: [
      "Цель > Захват > Всплытие",
      "Всплытие > Цель > Захват",
      "Цель > Всплытие > Захват",
      "Захват > Цель > Всплытие",
    ],
    explanation:
      'Во время фазы **захвата** событие распространяется с элементов родителей до элемента цели. После достижения **цели** начинается фаза **всплытия**.\n\n<img src="https://i.imgur.com/N18oRgd.png" width="200">',
    id: "13",
  },
  5: {
    grade: Grades.Middle,
    theme: Themes.BASICS,
    question: "Что будет на выходе?",
    code: "const myPromise = Promise.resolve(Promise.resolve('Promise!'));\n\nfunction funcOne() {\n  myPromise.then(res => res).then(res => console.log(res));\n  setTimeout(() => console.log('Timeout!', 0));\n  console.log('Last line!');\n}\n\nasync function funcTwo() {\n  const res = await myPromise;\n  console.log(await res);\n  setTimeout(() => console.log('Timeout!', 0));\n  console.log('Last line!');\n}\n\nfuncOne();\nfuncTwo();",
    correctAnswer: 4,
    variants: [
      "`Promise! Last line! Promise! Last line! Last line! Promise!`",
      "`Last line! Timeout! Promise! Last line! Timeout! Promise!`",
      "`Promise! Last line! Last line! Promise! Timeout! Timeout!`",
      "`Last line! Promise! Promise! Last line! Timeout! Timeout!`",
    ],
    explanation:
      'Сначала мы вызываем функцию `funcOne`. В первой строке `funcOne` происходит вызов обещания `myPromise`, которое является _асинхронной_ операцией. Пока движок занят обработкой обещания, он продолжает выполнение функции `funcOne`. Следующая строка является _асинхронной_ функцией `setTimeout`, поэтому её обратный вызов будет отправлен в Web API. (см. мою статью о цикле событий [здесь](https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif).)\n\nОбещание, как и таймер, является асинхронной операцией, поэтому функция продолжит выполняться несмотря на обработку обещания и обратного вызова `setTimeout`. Выходит так, что `Last line!` попадет в консоль первой, т.к. не является асинхронной операцией. Далее, в следующей строке `funcOne`, обещание будет выполнено и `Promise!` выводится в консоль. Однако, т.к. далее мы вызываем `funcTwo()`, стэк вызывов не будет пустым, из-за чего обратный вызов функции `setTimeout` _пока_ не будет добавлен в стэк вызовов.\n\nВ первой строке `funcTwo` мы _ожидаем_ выполнения обещания myPromise. С помощью ключевого слова `await` мы приостанавливаем выполнение функции пока обещание не будет выполнено (или отклонено). Затем выводим в консоль _ожидаемое_ значение `res` (т.к. предыдущее обещание вернуло обещание). После чего в консоль попадает `Promise!`.\n\nСледующая строка является _асинхронной_ функцией `setTimeout`, которая отправляет обратный вызов в Web API.\n\nМы перешли к следующей строке функции `funcTwo` которая выводит в консоль `Last line!`. Теперь, когда стэк вызовов извлечен из `funcTwo`, он становится пустым. Обратные вызовы, которые ожидали очереди (`() => console.log("Timeout!")` из `funcOne`, и `() => console.log("Timeout!")` из `funcTwo`) добавлены в стэк вызовов один за другим. Первый вызов выведет в консоль `Timeout!` и будет извлечен из стэка. Следующий вызов также выведет `Timeout!` и тоже будет извлечен из стэка вызовов. Лог будет равен `Last line! Promise! Promise! Last line! Timeout! Timeout!`',
    id: "133",
  },
};

export {
  criticalQuestionsData as questionsData,
  themes,
  correctAnswerImages,
  wrongAnswerImages,
};
