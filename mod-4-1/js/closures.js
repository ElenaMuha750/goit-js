// Замыкания-----------------------------------------------

// const fnA = function (parameter) {
//   const innerVariable = "Значение внутренней переменной функции fnA";

//   const innerFunction = function () {
//     console.log(parameter);
//     console.log(innerVariable);
//     console.log("Это вызов innerFunction");
//   };

//   return innerFunction;
// };

// const fnB = fnA(555);

// fnB();

// console.log(fnB);

// Задача---------------------------------------------------

// function logPerson() {
//   console.log(`Person: ${this.name}, ${this.age}, ${this.job}`);
// }

// const person1 = { name: "Михаил", age: 22, job: "Frontend" };
// const person2 = { name: "Елена", age: 19, job: "SMM" };

// bind(person1, logPerson);
// bind(person2, logPerson);

// Задача 2 Поваренок -----------------------------------

// const makeDish = function (shefName, dish) {
//   console.log(`${shefName} готовит ${dish}`);
// };

// makeDish("Muha", "пирожок");
// makeDish("Muha", "омлет");
// makeDish("Muha", "чай");

// makeDish("Persik", "котлетки");
// makeDish("Persik", "супик");
// makeDish("Persik", "молочко");

// const makeSheff = function (name) {
//   const makeDish = function (dish) {
//     console.log(`${name} готовит ${dish}`);
//   };

//   return makeDish;
// };

// const muha = makeSheff("Muha");

// muha("пирожок");
// muha("омлет");
// muha("чай");

// const persik = makeSheff("Persik");

// persik("котлетки");
// persik("супик");
// persik("молочко");

// -----------------------------------------------------------

// let a = 3;
// function addTwo(x) {
//   let ret = x + 2;
//   return ret;
// }
// let b = addTwo(a);
// console.log(b);

let val1 = 2;
function multiplyThis(n) {
  let ret = n * val1;
  return ret;
}
let multiplied = multiplyThis(6);
console.log("example of scope:", multiplied);
