// const numbers = [5, 10, 15, 20, 25];

// // Классический for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Индекс ${i}, значение ${numbers[i]}`);
// }

// // Перебирающий forEach
// numbers.forEach(function (number, index) {
//   console.log(`Индекс ${index}, значение ${number}`);
// });

// numbers.forEach((number, index) =>
//   console.log(`Индекс ${index}, значение ${number}`)
// );

// ------------------------------------------------------------

// const fnA = function (message, callback) {
//   console.log(message);
//   console.log(callback);

//   callback(100);
// };

// const fnB = function (number) {
//   console.log("Это лог при вызове fnA", number);
// };

// fnA("qweqwe", fnB);

// -----------------------------------------------------------

// const doMath = (a, b, callback) => {
//   const result = callback(a, b);

//   console.log(result);
// };

// // const add = (x, y) => x + y;
// const sub = (x, y) => x - y;

// doMath(5, 3, (x, y) => x + y);
// doMath(400, 20, (x, y) => x + y);
// doMath(5, 3, sub);
// doMath(400, 20, sub);

// -----------------------------------------------------------

// Отложенный вызов: интервалы

// const callback = () => {
//   console.log("Через 2 секунды");
// };

// console.log("Перед таймаутом");

// setTimeout(callback, 2000);

// console.log("После таймаута");

// -------------------------------------------------------------

// Фильтр

// const filter = function (array, callback) {
//   const filteredArray = [];

//   for (const el of array) {
//     console.log(el);
//     const passed = callback(el);

//     if (passed) {
//       filteredArray.push(el);
//     }
//   }

//   return filteredArray;
// };

// const callback1 = function (value) {
//   return value >= 3;
// };

// const callback2 = value => value <= 4;

// const r1 = filter([1, 2, 3, 4, 5], callback1);
// console.log(r1);

// const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8, 9], callback2);
// console.log(r2);

// const fruits = [
//   { name: "apples", quantity: 200, isFresh: true },
//   { name: "grapes", quantity: 150, isFresh: false },
//   { name: "bananas", quantity: 100, isFresh: true },
// ];

// --------------------------------------------------------------

// Example 1 - Коллбек функции
// Напишите следующие функции:
// createProduct(obj, callback) -
// принимает объект товара без id, а также колбек.
// Функция создаёт обьект товара,
// добавляя ему уникальный идентификатор в свойство id и
// вызывает колбек передавая ему созданный обьект.

// logProduct(product) - коллбек принимающий обьект продукта
// и логирующий его в консоль
// logTotalPrice(product) - коллбек принимающий обьект продукта
// и логирующий общую стоимость товара в консоль

// function createProduct(obj, callback) {
//   const product = {
//     id: Math.random(),
//     ...obj,
//   };

//   callback(product);
// }

// function logProduct(product) {
//   console.log(product);
// }

// // function logTotalPrice(product) {
// //   console.log("Total price:", product.price * product.count);
// // }

// // Деструктуризация
// function logTotalPrice({ price, count }) {
//   console.log("Total price:", price * count);
// }

// const p = {
//   name: "iPhone",
//   price: 1000,
//   count: 10,
// };

// createProduct(p, logProduct);
// createProduct(p, logTotalPrice);

// ------------------------------------------------------------

// const doMath = function (a, b, callback) {
//   const result = callback(a, b);

//   console.log(result);
// };

// const sum = (x, y) => x + y;
// const mult = (x, y) => x * y;

// doMath(5, 3, sum);
// doMath(10, 2, mult);

// const doMath = function (a, b, callback) {
//   const result = callback(a, b);

//   console.log(result);
// };

// const sum = (x, y) => x + y;
// const sub = (x, y) => x - y;
// const mul = (x, y) => x * y;
// const div = (x, y) => x / y;

// doMath(7, 7, sum);
// doMath(5, 2, sub);
// doMath(15, 10, mul);
// doMath(140, 14, div);

// --------------------------------------------------------

// Example 2
// Напишите функцию аналог метода forEach
// Он должен принимать массив и callback функцию
// которая будет вызываться для каждого элемента массива

// const users = [{ name: "Muha" }, { name: "Sonya" }];

// function forEach(array, callback) {
//   for (let i = 0; i < array.length; i += 1) {
//     console.log(array[i]);

//     callback(array[i], i, array);
//   }
// }

// function forEachCallback(user, index, array) {
//   console.log("user", user);
//   console.log("index", index);
//   console.log("array", array);
// }

// forEach(users, forEachCallback);

// users.forEach(forEachCallback)

// -----------------------------------------------------------

// Example 3 - Коллбек функции
// Напишите функцию each(array, callback),
// которая первым параметром ожидает массив, а вторым - функцию,
// которая применится к каждому элементу массива.
// Функция each должна вернуть новый массив,
// элементами которого будут результаты вызова коллбека.

// const users = [
//   { name: "Muha", age: 20 },
//   { name: "Sonya", age: 22 },
//   { name: "Persik", age: 3 },
// ];

// function each(array, callback) {
//   const newArray = [];

//   for (let i = 0; i < array.length; i += 1) {
//     const callbackResult = callback(array[i], i, array);
//     newArray.push(callbackResult);
//   }

//   console.log(newArray);
//   return newArray;
// }

// const getName = user => user.name;

// const getAge = user => console.log(user.age);

// const getNameAndAge = user =>
//   console.log(`${user.name} is ${user.age} years old`);

// const modifyUser = function (user) {
//   return {
//     ...user,
//     isOld: user.age < 20 ? "young" : "adult",
//   };
// };

// each(users, getName);
// each(users, getAge);
// each(users, getNameAndAge);
// each(users, modifyUser);

// ---------------------------------------------------------

// Example 4 - Коллбек функции
// Добавьте объекту account методы
// withdraw(amount, onSuccess, onError) и
// deposit(amount, onSuccess, onError),
// где первый параметр это сумма операции, а второй и третий - колбеки.
// Метод withdraw вызывает onError если amount больше
// TRANSACTION_LIMIT или this.balance,
// и onSuccess в противном случае.
// Метод deposit вызывает onError если amount больше
// TRANSACTION_LIMIT или меньше либо равен нулю,
// и onSuccess в противном случае.
