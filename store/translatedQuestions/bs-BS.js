import { Grades, Themes } from "../../model";

const questions = [
  {
    grade: Grades.Junior,
    theme: Themes.DATA_TYPES,
    question: "Što je izlaz?",
    code: 'function sayHi() {\n  console.log(name);\n  console.log(age);\n  var name = "Lydia";\n  let age = 21;\n}\n\nsayHi();',
    correctAnswer: 4,
    variants: [
      '"Lydia" i "undefined"',
      '"Lydia" i "ReferenceError"',
      '"ReferenceError" i "21"',
      "`undefined` i` ReferenceError`",
    ],
    explanation:
      'Unutar funkcije, najprije deklarišemo varijablu `name` s` var`\nključne riječi. To znači da se varijabla podiže (memorijski prostor je postavljen\ntijekom faze izrade) sa zadanom vrijednošću `undefined`,\ndok zapravo ne dođemo do linije gdje definiramo varijablu. Mi\njoš nismo definirali varijablu na liniji gdje pokušavamo prijaviti\nvarijabla `name`, tako da još uvijek sadrži vrijednost` undefined`.\n\nVarijable s ključnom riječi `let` (i` const`) su podignute, ali za razliku od njih\n`var`, ne bivaju _ inicijalizirane _. Nisu dostupni prije\nlinije na kojo ih proglašavamo (inicijaliziramo). To se naziva "temporal dead zone".\nKada pokušamo pristupiti varijablama prije nego što budu deklarirane,\nJavaScript iz bacuje `ReferenceError`.',
    id: 1,
  },
  {
    grade: Grades.Middle,
    theme: Themes.ASYNC,
    question: "Što je izlaz?",
    code: "for (var i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 1);\n}\n\nfor (let i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 1);\n}",
    correctAnswer: 3,
    variants: ["`0 1 2` i` 0 1 2`", '"0 1 2" i "3 3 3"', '"3 3 3" i "0 1 2"'],
    explanation:
      "Zbog reda događaja u JavaScriptu, povratni poziv `setTimeout`\nfunction se zove * nakon što je izvršena petlja. Od\nvarijabla `i` u prvoj petlji je deklarirana pomoću ključne riječi` var`,\nta je vrijednost bila globalna. Tijekom petlje povećavamo vrijednost `i`\nsvaki put '1', koristeći unarni operator `++`. Do vremena\nPozvana je function povratnog poziva `setTimeout`,` i` je bila jednaka `3` u\nu prvom primjeru.\n\nU drugoj petlji, varijabla `i` je deklarirana pomoću` let`\nključna riječ: varijable deklarirane s ključnom riječi `let` (i` const`) su\nblock-scoped (blok je sve između `{}`). Tijekom svake iteracije,\n`i` će imati novu vrijednost, a svaka vrijednost će biti obuhvaćena unutar petlje.",
    id: 2,
  },
  {
    grade: Grades.Junior,
    theme: Themes.OBJECTS,
    question: "Što je izlaz?",
    code: "const shape = {\n  radius: 10,\n  diameter() {\n    return this.radius * 2;\n  },\n  perimeter: () => 2 * Math.PI * this.radius\n};\n\nshape.diameter();\nshape.perimeter();",
    correctAnswer: 2,
    variants: [
      '"20" i "62.83185307179586"',
      '"20" i "NaN"',
      '"20" i "63"',
      '"NaN" i "63"',
    ],
    explanation:
      'Imajte na umu da je vrijednost "promjera" uobičajena function, dok je vrijednost promjera\nvrijednost "perimetra" je function strelice.\n\nSa functionma strelica, ključna riječ "this" odnosi se na njegovo trenutno\nokolno područje, za razliku od uobičajenih function! To znači kada\nnazovemo \'perimetar\', ne odnosi se na objekt oblika, već na njegov\nokruženje (primjerice, prozor).\n\nNa tom objektu nema vrijednosti `radius` koja vraća` undefined`.',
    id: 3,
  },
  {
    grade: Grades.Middle,
    theme: Themes.DATA_TYPES,
    question: "Što je izlaz?",
    code: '+true;\n!"Lydia";',
    correctAnswer: 1,
    variants: ['"1" i "false"', '"false" i "NaN"', '"false" i "false"'],
    explanation:
      'Unary plus pokušava pretvoriti operand u broj. "true" je "1",\ni "false" je "0".\n\nNiz \'\' Lydia \'\' je istinita vrijednost. Ono što zapravo tražimo jest\n"je li ta istinita vrijednost lažna?". Ovo vraća "false".',
    id: 4,
  },
  {
    grade: Grades.Junior,
    theme: Themes.OBJECTS,
    question: "Koja je istina?",
    code: 'const bird = {\n  size: "small"\n};\n\nconst mouse = {\n  name: "Mickey",\n  small: true\n};',
    correctAnswer: 1,
    variants: [
      "`mouse.bird.size 'nije valjan",
      "`mouse [bird.size]` nije važeća",
      '`miš [bird [" veličina "]]` nije važeća',
      "Svi su valjani",
    ],
    explanation:
      'U JavaScriptu su svi key-evi objekta stringovi (osim ako to nije simbol). Čak\niako ih možda ne * upisujemo kao * nizove, oni se uvijek pretvaraju\nu String ispod "haube".\n\nJavaScript tumači (ili odlaže) izjave. Kada koristimo zagradu\nnotacija, on vidi prvu otvarnu zagradu ```i nastavlja dalje do nje\npronalazi završnu zagradu `]`. Tek tada će procijeniti\nizjava.\n\n`mouse [bird.size]`: Prvo procjenjuje `bird.size`, što je` `small``.\n`mouse [" small "]` vraća "true"\n\nMeđutim, s točkastom notacijom, to se ne događa. `miša \'nema a\nkey naziva se \'bird\', što znači da je `mouse.bird`` undefined`. Zatim,\ntražimo "veličinu" koristeći točkovni zapis: `mouse.bird.size \'. Od\n`mouse.bird` je` undefined`, zapravo pitamo `undefined.size`.\nTo nije valjano, a bit će u pitanju pogreška slična onoj\n`Cannot read property "size" of undefined`.',
    id: 5,
  },
  {
    grade: Grades.Junior,
    theme: Themes.OBJECTS,
    question: "Što je izlaz?",
    code: 'let c = { greeting: "Hey!" };\nlet d;\n\nd = c;\nc.greeting = "Hello";\nconsole.log(d.greeting);',
    correctAnswer: 1,
    variants: [
      '"Zdravo"',
      "'Hej'",
      "`undefined`",
      '"ReferenceError"',
      "`TypeError`",
    ],
    explanation:
      'U JavaScriptu, svi objekti međusobno djeluju * referencom * kada ih postavljaju\njednaki.\n\nPrvo, varijabla `c` sadrži vrijednost objekta. Kasnije dodijelimo `d`\ns istom referencom koju `c \'ima na objekt.\n\n<img src = "https://i.imgur.com/ko5k0fs.png" width = "200">\n\nKada promijenite jedan objekt, mijenjate ih sve.',
    id: 6,
  },
  {
    grade: Grades.Middle,
    theme: Themes.DATA_TYPES,
    question: "Što je izlaz?",
    code: "let a = 3;\nlet b = new Number(3);\nlet c = 3;\n\nconsole.log(a == b);\nconsole.log(a === b);\nconsole.log(b === c);",
    correctAnswer: 3,
    variants: [
      "`true`` false` `true`",
      "`false`` false` `true`",
      "`true`` false` `false`",
      "`false`` true` `true`",
    ],
    explanation:
      "`new Number ()` je ugrađeni konstruktor function. Iako izgleda\nkao broj, to zapravo nije broj: ima gomilu ekstra dodataka\npa je zbog toga objekt.\n\nKada koristimo `==` operatora, on samo provjerava ima li isti\n*vrijednost*. Obje imaju vrijednost `3`, pa se vraća 'true'.\n\nMeđutim, kada koristimo `===` operator, obje vrijednosti * i * trebaju biti\nisto. To nije: `new Number ()` nije broj, to je ** objekt **.\nOba vraćaju \"false\"",
    id: 7,
  },
  {
    grade: Grades.Middle,
    theme: Themes.CLASSES,
    question: "Što je izlaz?",
    code: 'class Chameleon {\n  static colorChange(newColor) {\n    this.newColor = newColor;\n    return this.newColor;\n  }\n\n  constructor({ newColor = "green" } = {}) {\n    this.newColor = newColor;\n  }\n}\n\nconst freddie = new Chameleon({ newColor: "purple" });\nfreddie.colorChange("orange");',
    correctAnswer: 4,
    variants: ["'narančasta'", '"ljubičasta"', '"zelena"', "`TypeError`"],
    explanation:
      "function `colorChange` je statična. Namijenjene su statičkim metodama\nžive samo na konstruktoru u kojem su stvoreni i ne mogu biti proslijeđeni \nbilo kojem childu. Budući da je `freddie` child, function je\nnije proslijeđena, i nije dostupan na `freddie` instanci: a\nIzbačen je `TypeError`.",
    id: 8,
  },
  {
    grade: Grades.Junior,
    theme: Themes.OBJECTS,
    question: "Što je izlaz?",
    code: "let greeting;\ngreetign = {}; // Typo!\nconsole.log(greetign);",
    correctAnswer: 1,
    variants: [
      "`{}`",
      "`ReferenceError: greetign nije definiran '",
      "`undefined`",
    ],
    explanation:
      "Zapisuje objekt, jer smo upravo stvorili prazan objekt na\nglobalni objekt! Kada smo pogrešno ukucali `pozdrav` kao` greeting`, JS\ninterpreter je zapravo to vidio kao `global.greeting = {}` (ili\n`window.greeting = {}` u pregledniku).\n\nKako bismo to izbjegli, možemo koristiti `` use strict ''. To osigurava to\nda ste deklarirali varijablu prije nego je postavite na bilo što.",
    id: 9,
  },
  {
    grade: Grades.Junior,
    theme: Themes.FUNCTIONS,
    question: "Što se događa kada to učinimo?",
    code: 'function bark() {\n  console.log("Woof!");\n}\n\nbark.animal = "dog";',
    correctAnswer: 1,
    variants: [
      "Ništa, ovo je u redu!",
      "`SyntaxError`. Na ovaj način ne možete dodavati svojstva funkciji.",
      "`undefined`",
      '"ReferenceError"',
    ],
    explanation:
      "To je moguće u JavaScriptu, jer su funkcije objekti!\n(Sve osim primitivnih tipova su objekti)\n\nfunction je posebna vrsta objekta. Kod koji sami napišete\nnije stvarna function. function je objekt sa svojstvima.\nOva nekretnina je nepovratna.",
    id: 10,
  },
  {
    grade: Grades.Junior,
    theme: Themes.CLASSES,
    question: "Kakav je rezultat?",
    code: 'function Person(firstName, lastName) {\n  this.firstName = firstName;\n  this.lastName = lastName;\n}\n\nconst member = new Person("Lydia", "Hallie");\nPerson.getFullName = function() {\n  return `${this.firstName} ${this.lastName}`;\n};\n\nconsole.log(member.getFullName());',
    correctAnswer: 1,
    variants: [
      "`TypeError`",
      "`SyntaxError`",
      '"Lydia Hallie"',
      "`undefined`` undefined`",
    ],
    explanation:
      'Ne možete dodati svojstva konstruktoru kao što možete s uobičajenim\nobjekti. Ako želite dodati značajku svim objektima odjednom, imate\numjesto toga koristiti prototip. Dakle, u ovom slučaju,\n\n```{.js}\nPerson.prototype.getFullName = function () {\n  return `$ {this.ime} $ {this.prezime}`;\n};\n```\n\nbi učinio `member.getFullName ()`. Zašto je to korisno? Reći će mo\nda smo tu metodu dodali samom konstruktoru. Možda ne svaki\nPrimjer "Person" trebao je ovu metodu. To bi trošilo puno memorije\nscopa (prostora), jer bi oni još uvijek imali tu svojinu, koja uzima memoriju\nscopa za svaku instancu. Umjesto toga, ako ga samo dodamo prototipu, mi\nće mo je imati na jednom mjestu u memoriji, ali svi imaju pristup!',
    id: 11,
  },
  {
    grade: Grades.Junior,
    theme: Themes.CLASSES,
    question: "Što je izlaz?",
    code: 'function Person(firstName, lastName) {\n  this.firstName = firstName;\n  this.lastName = lastName;\n}\n\nconst lydia = new Person("Lydia", "Hallie");\nconst sarah = Person("Sarah", "Smith");\n\nconsole.log(lydia);\nconsole.log(sarah);',
    correctAnswer: 1,
    variants: [
      '`Person {ime:" Lydia ", prezime:" Hallie "} i` undefined`',
      '`Person {ime:" Lydia ", prezime:" Hallie "} i',
      '`Person {ime:" Lydia ", prezime:" Hallie "}` i `{}`',
      '`Person {ime:" Lydia ", prezime:" Hallie "} i',
    ],
    explanation:
      'Za `sarah` nismo koristili ključnu riječ` new`. Kada koristite "new", to\nodnosi se na new prazni objekt koji stvaramo. Međutim, ako ne dodate\n`new` se odnosi na ** globalni objekt **!\n\nRekli smo da je "this.ime" jednako "Sarah" i `this.prezime`\njednak je "Smithu". Ono što smo zapravo učinili jest definiranje\n`global.ime = \'Sarah\'` i` global.prezime =\' Smith\'`. `sarah`\nsam je ostavljen \'undefined\'.',
    id: 12,
  },
  {
    grade: Grades.Junior,
    theme: Themes.EVENTS,
    question: "Koje su tri faze propagiranja događaja?",
    code: null,
    correctAnswer: 4,
    variants: [
      "Target > Capturing > Bubbling",
      "Bubbling > Target > Capturing",
      "Target > Bubbling > Capturing",
      "Capturing > Target > Bubbling",
    ],
    explanation:
      'Tijekom ** capturing ** događaj prolazi kroz pretka\nelemente do ciljnog elementa. Zatim doseže ** target **\ni ** bubbling **.\n\n<img src = "https://i.imgur.com/N18oRgd.png" width = "200">',
    id: 13,
  },
  {
    grade: Grades.Junior,
    theme: Themes.CLASSES,
    question: "Svi objekti imaju prototipove.",
    code: null,
    correctAnswer: 2,
    variants: ["lažno"],
    explanation:
      "Svi objekti imaju prototipove, osim ** osnovnog objekta **. Uporište\nobjekt ima pristup nekim metodama i svojstvima, kao što je `.toString`.\nTo je razlog zašto možete koristiti ugrađene JavaScript metode! Sve od\ntakve su metode dostupne na prototipu. Iako JavaScript ne može\npronaći ga izravno na vašem objektu, ide niz lanac prototipa i\nnalazi ga tamo, što ga čini dostupnim.",
    id: 14,
  },
  {
    grade: Grades.Junior,
    theme: Themes.DATA_TYPES,
    question: "Što je izlaz?",
    code: 'function sum(a, b) {\n  return a + b;\n}\n\nsum(1, "2");',
    correctAnswer: 3,
    variants: ['"NaN"', "`TypeError`", '"12"', "`3`"],
    explanation:
      'JavaScript je ** dinamički upisani jezik **: ne navodimo što\nvrste su određene varijable. Vrijednosti se mogu automatski pretvoriti u\ndrugi tip bez vašeg znanja, koji se zove * implicitni tip\nprisila *. ** Prisila ** pretvara iz jednog tipa u drugi.\n\nU ovom primjeru JavaScript pretvara broj `1` u niz, u\nkako bi function imala smisla i vratila vrijednost. Tijekom\ndodavanje numeričkog tipa (`1`) i tipa niza (` \'2\'`), broja\nse tretira kao niz. Možemo slično spojiti\n"" Zdravo "+" Svijet "`, tako da se ovdje događa ``````````````````\nvraća `" 12 "`.',
    id: 15,
  },
  {
    grade: Grades.Junior,
    theme: Themes.BASICS,
    question: "Što je izlaz?",
    code: "let number = 0;\nconsole.log(number++);\nconsole.log(++number);\nconsole.log(number);",
    correctAnswer: 3,
    variants: ["`1`` 1` `2`", "`1`` 2` `2`", "`0`` 2` `2`", "`0`` 1` `2`"],
    explanation:
      "** postfix ** unarni operator `++`:\n\n1. Vraća vrijednost (ovo vraća `0`)\n2. Povećava vrijednost (broj je sada `1`)\n\n** prefiks ** unary operator `++`:\n\n1. Povećava vrijednost (broj je sada `2`)\n2. Vraća vrijednost (ovo vraća `2`)\n\nOvo vraća `0 2 2`.",
    id: 16,
  },
  {
    grade: Grades.Junior,
    theme: Themes.FUNCTIONS,
    question: "Što je izlaz?",
    code: 'function getPersonInfo(one, two, three) {\n  console.log(one);\n  console.log(two);\n  console.log(three);\n}\n\nconst person = "Lydia";\nconst age = 21;\n\ngetPersonInfo`${person} is ${age} years old`;',
    correctAnswer: 2,
    variants: [
      "`` Lydia` ``````````````````````````````````````",
      "```````````````````````````````````````````````````````````````````````````",
      "`` Lydia` ``````````````````````````````````````````````````````````",
    ],
    explanation:
      "Ako koristite literale s oznakom predložaka, vrijednost prvog argumenta je\nuvijek niz vrijednosti vrijednosti niza. Preostali argumenti dobivaju\nvrijednosti prošlih izraza!",
    id: 17,
  },
  {
    grade: Grades.Junior,
    theme: Themes.OBJECTS,
    question: "Što je izlaz?",
    code: 'function checkAge(data) {\n  if (data === { age: 18 }) {\n    console.log("You are an adult!");\n  } else if (data == { age: 18 }) {\n    console.log("You are still an adult.");\n  } else {\n    console.log(`Hmm.. You don\'t have an age I guess`);\n  }\n}\n\ncheckAge({ age: 18 });',
    correctAnswer: 3,
    variants: [
      '"Vi ste odrasla osoba!"',
      '"Vi ste još uvijek odrasla osoba."',
      "'Hmm .. Nemam godina za koju pretpostavljam'",
    ],
    explanation:
      "Prilikom ispitivanja jednakosti, primitivi se uspoređuju prema njihovoj * vrijednosti *, dok\nobjekti se uspoređuju prema njihovoj * referenci *. JavaScript provjerava ako\nobjekti imaju referencu na isto mjesto u memoriji.\n\nDva predmeta koje uspoređujemo nemaju: objekt mi\nproslijeđeno kao parametar odnosi se na drugo mjesto u memoriji od\nobjekt koji smo koristili kako bismo provjerili jednakost.\n\nZato i `{age: 18} === {age: 18}` i\n`{age: 18} == {age: 18}` return `false '.",
    id: 18,
  },
  {
    grade: Grades.Junior,
    theme: Themes.FUNCTIONS,
    question: "Što je izlaz?",
    code: "function getAge(...args) {\n  console.log(typeof args);\n}\n\ngetAge(21);",
    correctAnswer: 3,
    variants: ['`" broj "', "`` niz ''", "`` objekt ''", '"NaN"'],
    explanation:
      "Operator spread (`... args`.) Vraća niz s argumentima.\narray je objekt, pa `typeof args` vraća` `objekt '`",
    id: 19,
  },
  {
    grade: Grades.Junior,
    theme: Themes.BASICS,
    question: "Što je izlaz?",
    code: 'function getAge() {\n  "use strict";\n  age = 21;\n  console.log(age);\n}\n\ngetAge();',
    correctAnswer: 3,
    variants: ["`21`", "`undefined`", '"ReferenceError"', "`TypeError`"],
    explanation:
      'Sa `` use strict \'\', možete se uvjeriti da nije slučajno\ndeklarisana globalna varijabla. Nikada nismo objavili varijablu "age" i\nbudući da koristimo `` use strict \'\', ona će načiniti referentnu pogrešku. Ako mi\nnije koristio "" strict ", to bi išlo od vlasništva\n`age` bi se dodao u globalni objekt.',
    id: 20,
  },
  {
    grade: Grades.Junior,
    theme: Themes.BASICS,
    question: "Što je vrijednost `suma '?",
    code: 'const sum = eval("10*10+5");',
    correctAnswer: 1,
    variants: ['"105"', '`" 105 "`', "`TypeError`", '`" 10 * 10 + 5 "`'],
    explanation:
      '`eval` procjenjuje kodove koji su prošli kao niz. Ako je to izraz,\nkao u ovom slučaju, on ocjenjuje izraz. Izraz je\n`10 * 10 + 5`. Ovo vraća broj "105".',
    id: 21,
  },
  {
    grade: Grades.Junior,
    theme: Themes.STORAGE,
    question: "Koliko dugo je cool \\ _secret dostupan?",
    code: 'sessionStorage.setItem("cool_secret", 123);',
    correctAnswer: 2,
    variants: [
      "Kada korisnik zatvori karticu.",
      "Kada korisnik zatvori cijeli preglednik, ne samo karticu.",
      "Kada korisnik isključi svoje računalo.",
    ],
    explanation:
      "Podaci spremljeni u `sessionStorage` se uklanjaju nakon zatvaranja * tab *.\n\nAko ste koristili `localStorage`, podaci bi bili tamo zauvijek, osim ako\nna primjer, `localStorage.clear ()` je pozvan.",
    id: 22,
  },
  {
    grade: Grades.Junior,
    theme: Themes.BASICS,
    question: "Što je izlaz?",
    code: "var num = 8;\nvar num = 10;\n\nconsole.log(num);",
    correctAnswer: 2,
    variants: ["`8`", '"10"', "`SyntaxError`", '"ReferenceError"'],
    explanation:
      "Pomoću ključne riječi `var` možete deklarirati više varijabli s istom\nIme. Varijabla će tada sadržavati zadnju vrijednost.\n\nTo ne možete učiniti s `let` ili` const` jer su blokirani.",
    id: 23,
  },
  {
    grade: Grades.Junior,
    theme: Themes.DATA_TYPES,
    question: "Što je izlaz?",
    code: 'const obj = { 1: "a", 2: "b", 3: "c" };\nconst set = new Set([1, 2, 3, 4, 5]);\n\nobj.hasOwnProperty("1");\nobj.hasOwnProperty(1);\nset.has("1");\nset.has(1);',
    correctAnswer: 3,
    variants: [
      "`false`` true` `false`` true`",
      "`false`` true` `true`` true`",
      "`true`` true` `false`` true`",
      "`true`` true` `true`` true`",
    ],
    explanation:
      "Sve tipke objekta (osim simbola) su žice ispod haube, čak i ako\nne upisujete sami kao niz znakova. To je razlog zašto\n`obj.hasOwnProperty ('1')` također vraća true.\n\nTo ne radi tako za skup. U našem setu ne postoji \"1\":\n`set.has ('1')` vraća `false`. Ima numerički tip \"1\",\n`set.has (1)` vraća `true`.",
    id: 24,
  },
  {
    grade: Grades.Junior,
    theme: Themes.OBJECTS,
    question: "Što je izlaz?",
    code: 'const obj = { a: "one", b: "two", a: "three" };\nconsole.log(obj);',
    correctAnswer: 3,
    variants: [
      '`{a:" jedan ", b:" dva "}`',
      '`{b:" dva ", a:" tri "}`',
      '`{a:" tri ", b:" dva "}`',
      "`SyntaxError`",
    ],
    explanation:
      "Ako imate dva ključa s istim imenom, ključ će biti zamijenjen. To\ni dalje će biti na prvom mjestu, ali s posljednjom navedenom vrijednošću.",
    id: 25,
  },
  {
    grade: Grades.Junior,
    theme: Themes.OBJECTS,
    question:
      'Globalni kontekst izvođenja JavaScripta za vas stvara dvije stvari: globalni objekt i "ovu" ključnu riječ.',
    code: null,
    correctAnswer: 1,
    variants: ["lažno", "to ovisi"],
    explanation:
      "Kontekst izvršenja baze je kontekst globalnog izvršavanja: to je ono što je\ndostupno svugdje u vašem kodu.",
    id: 26,
  },
  {
    grade: Grades.Junior,
    theme: Themes.BASICS,
    question: "Što je izlaz?",
    code: "for (let i = 1; i < 5; i++) {\n  if (i === 3) continue;\n  console.log(i);\n}",
    correctAnswer: 3,
    variants: ["`1`` 2`", "`1`` 2` `3`", "`1`` 2` `4`", "`1`` 3` `4`"],
    explanation:
      'Izjava `continue` preskače iteraciju ako je određeno stanje\nvraća "true".',
    id: 27,
  },
  {
    grade: Grades.Junior,
    theme: Themes.CLASSES,
    question: "Što je izlaz?",
    code: 'String.prototype.giveLydiaPizza = () => {\n  return "Just give Lydia pizza already!";\n};\n\nconst name = "Lydia";\n\nconsole.log(name.giveLydiaPizza())',
    correctAnswer: 1,
    variants: [
      "`` Već daj Lizijinu pizzu! ``",
      "`TypeError: nije function`",
      "`SyntaxError`",
      "`undefined`",
    ],
    explanation:
      "`String 'je ugrađeni konstruktor, kojem možemo dodati svojstva. ja\nsamo je dodao metodu u svoj prototip. Primitivni nizovi su\nautomatski se pretvara u string objekt, generiran stringom\nprototipna function. Dakle, svi nizovi (objekti stringova) imaju pristup tome\nnačin!",
    id: 28,
  },
  {
    grade: Grades.Middle,
    theme: Themes.DATA_TYPES,
    question: "Što je izlaz?",
    code: 'const a = {};\nconst b = { key: "b" };\nconst c = { key: "c" };\n\na[b] = 123;\na[c] = 456;\n\nconsole.log(a[b]);',
    correctAnswer: 2,
    variants: ["'123'", '"456"', "`undefined`", '"ReferenceError"'],
    explanation:
      'Tipke objekta automatski se pretvaraju u nizove. Pokušavamo\npostavite objekt kao ključ za objekt "a", s vrijednošću "123".\n\nMeđutim, kada stringificiramo objekt, on postaje `` [Objekt objekt] \'`. Tako\nono što ovdje govorimo je da je `a [" Objekt objekt "] = 123`. Onda, mi\nmože ponovno pokušati učiniti isto. "c" je još jedan objekt koji jesmo\nimplicitno ograničavaju. Dakle, `a [" Objekt objekt "] = 456`.\n\nZatim zapisujemo `a [b]`, što je zapravo `a [" Objekt objekt "]`. Upravo smo postavili\nda na `456`, tako da se vraća` 456`.',
    id: 29,
  },
  {
    grade: Grades.Junior,
    theme: Themes.ASYNC,
    question: "Što je izlaz?",
    code: 'const foo = () => console.log("First");\nconst bar = () => setTimeout(() => console.log("Second"));\nconst baz = () => console.log("Third");\n\nbar();\nfoo();\nbaz();',
    correctAnswer: 2,
    variants: [
      "`Prvi`` Drugi` `Treći`",
      "`Prvi`` Treći` `Drugi`",
      "`Drugi`` Prvi` `Treći`",
      "`Drugi`` Treći` `Prvi`",
    ],
    explanation:
      'Imamo funkciju "setTimeout" i prvo je pozvali. Ipak, bio je prijavljen\nposljednji.\n\nTo je zato što u preglednicima nemamo samo runtime engine, mi\ntakođer imaju nešto što se zove "WebAPI". "WebAPI" nam daje\n`setTimeout` function za početak, i na primjer DOM.\n\nNakon što je * callback * preusmjeren na WebAPI, function `setTimeout`\nsam (ali ne i povratni poziv!) iskače iz stog.\n\n<img src = "https://i.imgur.com/X5wsHOg.png" width = "200">\n\nSada se `foo` poziva i` `Prvo`` se bilježi.\n\n<img src = "https://i.imgur.com/Pvc0dGq.png" width = "200">\n\n`foo` je iskačen iz stog, i` baz` se poziva. "Treći" dobiva\nprijavljeni.\n\n<img src = "https://i.imgur.com/WhA2bCP.png" width = "200">\n\nWebAPI ne može jednostavno dodati stvari u stog kad god je spreman.\nUmjesto toga, on povlači funkciju povratnog poziva u nešto što se zove\n*red*.\n\n<img src = "https://i.imgur.com/NSnDZmU.png" width = "200">\n\nOvo je mjesto gdje petlja događaja počinje raditi. ** ** krug događaja ** gleda\nred i red za zadatke. Ako je stog prazan, uzima prvi\nstvar u redu i gura je u stog.\n\n<img src = "https://i.imgur.com/uyiScAI.png" width = "200">\n\n`bar` se priziva,` `Second`` se bilježi, i on se pojavio\nstog.',
    id: 30,
  },
  {
    grade: Grades.Junior,
    theme: Themes.EVENTS,
    question: "Što je event.target kada kliknete na gumb?",
    code: null,
    correctAnswer: 3,
    variants: [
      "Vanjski 'div'",
      "Unutarnji 'div'",
      "`gumb '",
      "Niz svih ugniježđenih elemenata.",
    ],
    explanation:
      "Najdublji ugniježđeni element koji je uzrokovao događaj je cilj\ndogađaj. Možete zaustaviti mjehuriće 'event.stopPropagation'",
    id: 31,
  },
  {
    grade: Grades.Junior,
    theme: Themes.EVENTS,
    question: "Kada kliknete na paragraf, što je zapisani izlaz?",
    code: null,
    correctAnswer: 1,
    variants: ["`p`` div`", "`div`` p`", "p", '"div"'],
    explanation:
      "Ako kliknemo `p`, vidimo dva zapisa:` p` i `div`. Tijekom događaja\nrazmnožavanje, postoje 3 faze: hvatanje, ciljanje i mjehuriće. Po\nzadani, rukovatelji događaja izvršavaju se u fazi mjehurića (osim ako vi\npostavite `useCapture` na` true`). Ide od najdubljih ugniježđenih elemenata\nvan.",
    id: 32,
  },
  {
    grade: Grades.Junior,
    theme: Themes.FUNCTIONS,
    question: "Što je izlaz?",
    code: 'const person = { name: "Lydia" };\n\nfunction sayHi(age) {\n  console.log(`${this.name} is ${age}`);\n}\n\nsayHi.call(person, 21);\nsayHi.bind(person, 21);',
    correctAnswer: 4,
    variants: [
      "`undefined is 21`` Lydia je 21`",
      "function funkcije",
      "`Lydia je 21`` Lydia je 21`",
      "`Lydia je 21`` function`",
    ],
    explanation:
      'S oba, možemo proslijediti objekt kojem želimo ključnu riječ "this"\nodnosi se na. Međutim, `.call` se također * izvršava odmah *!\n\n`.bind.` vraća * copy * funkcije, ali s vezanim kontekstom! To\nse ne izvršava odmah.',
    id: 33,
  },
  {
    grade: Grades.Junior,
    theme: Themes.FUNCTIONS,
    question: "Što je izlaz?",
    code: "function sayHi() {\n  return (() => 0)();\n}\n\ntypeof sayHi();",
    correctAnswer: 2,
    variants: ['`" objekt "`', '`" broj "', 'function ""', '`" undefined "`'],
    explanation:
      'function `sayHi` vraća vraćenu vrijednost odmah\npozvana function (IIFE). Ova function vratila je `0`, što je tip\n` "Broj"`.\n\nFYI: postoji samo 7 ugrađenih tipova: `null`,` undefined`, `boolean`,\n"broj", "niz", "objekt" i "simbol". `` function \'\' nije tip,\nbudući da su funkcije objekti, to je tipa `` objekta \'`.',
    id: 34,
  },
  {
    grade: Grades.Middle,
    theme: Themes.BASICS,
    question: "Koja od ovih vrijednosti su neistinite?",
    code: '0;\nnew Number(0);\n("");\n(" ");\nnew Boolean(false);\nundefined;',
    correctAnswer: 1,
    variants: [
      "`0`,` ```,` undefined`",
      "`0`,` new Number (0) `,` '' `,` new Boolean (false) `,` undefined '",
      "`0`,` '' `,` new Boolean (false) `,` undefined`",
      "Svi su oni lažni",
    ],
    explanation:
      "Postoji samo šest krivotvorenih vrijednosti:\n\n- `undefined`\n- \"null\"\n- \"NaN\"\n- `0`\n- `''` (prazan niz)\n- \"false\"\n\nKonstruktori function, kao što su 'new Number' i 'new Boolean' su istiniti.",
    id: 35,
  },
  {
    grade: Grades.Junior,
    theme: Themes.DATA_TYPES,
    question: "Što je izlaz?",
    code: "console.log(typeof typeof 1);",
    correctAnswer: 2,
    variants: ['`" broj "', 'niz ""', "`` objekt ''", '`" undefined "`'],
    explanation:
      '`typeof 1` vraća` `broj \'\'. `typeof" number "` return `` string "`',
    id: 36,
  },
  {
    grade: Grades.Junior,
    theme: Themes.BASICS,
    question: "Što je izlaz?",
    code: "const numbers = [1, 2, 3];\nnumbers[10] = 11;\nconsole.log(numbers);",
    correctAnswer: 3,
    variants: [
      "`[1, 2, 3, 7 x null, 11]`",
      "`[1, 2, 3, 11]`",
      "`[1, 2, 3, 7 x prazno, 11]`",
      "`SyntaxError`",
    ],
    explanation:
      'Kada postavite vrijednost na element u nizu koji premašuje duljinu\niz niza, JavaScript stvara nešto što se naziva "prazni utori". To\nzapravo imaju vrijednost `undefined`, ali vidjet ćete nešto poput:\n\n`[1, 2, 3, 7 x prazno, 11]`\n\novisno o tome gdje ga pokrećete (razlikuje se za svaki preglednik, čvor,\nitd)',
    id: 37,
  },
  {
    grade: Grades.Middle,
    theme: Themes.FUNCTIONS,
    question: "Što je izlaz?",
    code: "(() => {\n  let x, y;\n  try {\n    throw new Error();\n  } catch (x) {\n    (x = 1), (y = 2);\n    console.log(x);\n  }\n  console.log(x);\n  console.log(y);\n})();",
    correctAnswer: 1,
    variants: [
      "`1`` undefined `` 2`",
      "`undefined`` undefined` `undefined`",
      "`1`` 1` `2`",
      "`1`` undefined` `undefined`",
    ],
    explanation:
      "Blok `catch` prima argument` x`. To nije isti `x` kao\nvarijablu kada proslijedimo argumente. Ova varijabla `x` je blokirana.\n\nKasnije smo postavili ovu varijablu bloka koja je jednaka `1` i postavili vrijednost\nvarijable `y '. Sada, zapisujemo blok-scoped varijablu `x`, koja je\njednako \"1\".\n\nIzvan 'catch' bloka, `x 'je i dalje` undefined`, a `y` je` 2`.\nKada želimo `console.log (x)` izvan `catch` bloka, to\nvraća `undefined` i` y` vraća `2`.",
    id: 38,
  },
  {
    grade: Grades.Junior,
    theme: Themes.DATA_TYPES,
    question: "Sve u JavaScriptu je ili ...",
    code: null,
    correctAnswer: 1,
    variants: [
      "primitivni ili objektni",
      "function ili objekt",
      "trik pitanje! samo objekti",
      "broj ili objekt",
    ],
    explanation:
      'JavaScript ima samo primitivne tipove i objekte.\n\nPrimitivni tipovi su "boolean", "null", "undefined", "bigint", "number",\n\'string\' i \'simbol\'.\n\nOno što razlikuje primitiv od objekta je to što primitivci to ne čine\nimaju bilo kakva svojstva ili metode; međutim, to ćete primijetiti\n`\'foo\'.toUpperCase ()` vrednuje za\' \'FOO\'` i ne rezultira a\n`TypeError`. To je zato što kada pokušate pristupiti svojstvu ili metodi\nna primitivnom poput stringa, JavaScript će implicitet omotati objekt\nkoristeći jednu od klasa omotača, tj. `String \', a zatim odmah\nodbacite omotač nakon što se izraz procijeni. Svi primitivci\nosim "null" i "undefined" pokazuju ovo ponašanje.',
    id: 39,
  },
  {
    grade: Grades.Junior,
    theme: Themes.BASICS,
    question: "Što je izlaz?",
    code: "[[0, 1], [2, 3]].reduce(\n  (acc, cur) => {\n    return acc.concat(cur);\n  },\n  [1, 2]\n);",
    correctAnswer: 3,
    variants: [
      "`[0, 1, 2, 3, 1, 2]`",
      "`[6, 1, 2]`",
      '"[1, 2, 0, 1, 2, 3]"',
      "`[1, 2, 6]`",
    ],
    explanation:
      '"[1, 2]" je naša početna vrijednost. To je vrijednost s kojom počinjemo i\nvrijednost prvog `acc`. Tijekom prvog kruga, "acc" je "[1,2]",\ni `cur` je` [0, 1] `. Spojimo ih, što rezultira\n`[1, 2, 0, 1]`.\n\nTada je `[1, 2, 0, 1]` `acc` i` [2, 3] `````. Ulančavamo se\ni dobiti `[1, 2, 0, 1, 2, 3]`',
    id: 40,
  },
  {
    grade: Grades.Junior,
    theme: Themes.BASICS,
    question: "Što je izlaz?",
    code: '!!null;\n!!"";\n!!1;',
    correctAnswer: 2,
    variants: [
      "`false`` true` `false`",
      "`false`` false` `true`",
      "`false`` true` `true`",
      "`true`` true` `false`",
    ],
    explanation:
      "`null` je lažan. `! null` vraća 'true'. `! true 'vraća\" false \".\n\n```` je neistinit. `!\" `` vraća `true '. `! true 'vraća\" false \".\n\n\"1\" je istina. `! 1` vraća 'false'. `! false 'vraća' true '.",
    id: 41,
  },
  {
    grade: Grades.Junior,
    theme: Themes.FUNCTIONS,
    question: "Što se vraća metoda `setInterval`?",
    code: 'setInterval(() => console.log("Hi"), 1000);',
    correctAnswer: 1,
    variants: [
      "jedinstveni ID",
      "određena količina milisekundi",
      "prošla function",
      "`undefined`",
    ],
    explanation:
      "Vraća jedinstveni ID. Taj se ID može koristiti za brisanje tog intervala\n`clearInterval ()` function.",
    id: 42,
  },
  {
    grade: Grades.Junior,
    theme: Themes.DATA_TYPES,
    question: "Što se to vraća?",
    code: '[..."Lydia"];',
    correctAnswer: 1,
    variants: [
      '`[" L "," y "," d "," i "," a "]`',
      '`[" Lydia "]`',
      '`[[]," Lydia "]`',
      '`[[" L "," y "," d "," i "," a "]]`',
    ],
    explanation:
      "Niz je iterabilan. Operator širenja mapira svaki znak\niterabilan na jedan element.",
    id: 43,
  },
];
export default questions;
