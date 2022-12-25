// Задача 1 Общая сумма чисел в массиве

// const cart = [54, 20, 105, 78, 92, 17, 129, 100];
// let total = 0;

// // for (let i = 0; i < cart.length; i += 1) {
// //   console.log(cart[i]);

// //   total += cart[i];
// // }

// for (const value of cart) {
//   total += value;
// }

// console.log("Total:", total);

//-----------------------------------------------------

// Задача 2 Сумма четных чисел в массиве

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 38, 18, 11];
// let total = 0;

// // for (let i = 0; i < numbers.length; i += 1) {
// //   const number = numbers[i];
// //   console.log(number);

// //   if (number % 2 === 0) {
// //     console.log("Четное!!!");

// //     total += number;
// //   }
// // }

// for (const number of numbers) {
//   console.log(number);
//   if (number % 2 === 0) total += number;
// }

// console.log("Total:", total);

//---------------------------------------------------------

// Задача 3 Скрипт поиска логина

// Вариант 1--------------------

// const logins = ["hhjjkk", "ffrrddss", "eeertyyy", "nnnbbbvv"];
// const loginToFind = "ffrrddss";
// let message = "";

// for (let i = 0; i < logins.length; i += 1) {
//   const login = logins[i];

//   console.log("Login:", login);

//   if (login === loginToFind) {
//     message = `Пользователь ${loginToFind} найден.`;
//     break;
//   }

//   message = `Пользователь ${loginToFind} не найден.`;
// }

// console.log(message);

// Вариант 2-------------------------------

// const logins = ["hhjjkk", "ffrrddss", "eeertyyy", "nnnbbbvv"];
// const loginToFind = "eeertyyy";
// let message = `Пользователь ${loginToFind} не найден.`;

// for (let i = 0; i < logins.length; i += 1) {
//   const login = logins[i];

//   console.log("Login:", login);

//   if (login === loginToFind) {
//     message = `Пользователь ${loginToFind} найден.`;
//     break;
//   }
// }

// console.log(message);

// // Вариант 3-----------------------------------

// const logins = ["hhjjkk", "ffrrddss", "eeertyyy", "nnnbbbvv"];
// const loginToFind = "eeertyyy";
// let message = `Пользователь ${loginToFind} не найден.`;

// for (const login of logins) {
//   console.log("Login:", login);

//   if (login === loginToFind) {
//     message = `Пользователь ${loginToFind} найден.`;
//     break;
//   }
// }

// console.log(message);

// Вариант 4 The Best---------------------------------

// const logins = ["hhjjkk", "ffrrddss", "eeertyyy", "nnnbbbvv"];
// const loginToFind = "eeertyyy";

// const message = logins.includes(loginToFind)
//   ? `Пользователь ${loginToFind} найден.`
//   : `Пользователь ${loginToFind} не найден.`;

// console.log(message);

//--------------------------------------------------------

// Задача 4 Поиск наименьшего числа в массиве

// const numbers = [51, 18, 13, 24, 1, 7, 84, 19, 2, 48];
// let smallestNumber = numbers[0];

// for (const number of numbers) {
//   console.log(number);

//   if (number < smallestNumber) {
//     smallestNumber = number;
//   }
// }

// console.log("SmallestNumber:", smallestNumber);

// Поиск наибольшего числа в массиве----------------------

// const numbers = [51, 18, 13, 24, 7, 85, 19, 83, 76, 4];
// let biggestNumber = numbers[0];

// for (const number of numbers) {
//   console.log(number);

//   if (number > biggestNumber) {
//     biggestNumber = number;
//   }
// }

// console.log("BiggestNumber:", biggestNumber);

//--------------------------------------------------------

// Задача 5 Скрипт, который объединяет все элементы массива в одно строковое значение

// const friends = ["Lena", "Vera", "Julia", "Muha"];
// let string = "";

// for (const friend of friends) {
//   string += friend + ", ";
// }

// string = string.slice(0, string.length - 2);

// console.log(string);

// const string = friends.join(", ");
// console.log(string);

//---------------------------------------------------------

// Задача 6 Скрипт, который заменяет регистр каждого символа в строке на противоположный

// const string = "JavaScript";
// const letters = string.split("");
// let invertedString = "";

// console.log(letters);

// for (const letter of letters) {
//   console.log(letter);

//   // Вар 1-----------------------

//   // if (letter === letter.toLowerCase()) {
//   //   console.log("Эта буква в нижнем регистре! -", letter);

//   //   invertedString += letter.toUpperCase();
//   // } else {
//   //   console.log("Эта буква в верхнем регистре! -", letter);
//   //   invertedString += letter.toLowerCase();
//   // }

//   // Вар 2-----------------------

//   const isEqual = letter === letter.toLowerCase();
//   invertedString += isEqual ? letter.toUpperCase() : letter.toLowerCase();
// }

// console.log("invertedString:", invertedString);

//-------------------------------------------------------------

// Задача 7 Делаем slug в URL из названия статьи

// const title = "Top 10 benefits of React framework";

// const normalizedTitel = title.toLowerCase();
// console.log(normalizedTitel);

// const words = normalizedTitel.split(" ");
// console.log(words);

// const slugTitle = words.join("-");
// console.log(slugTitle);

// const slug = title.toLowerCase().split(" ").join("-");
// console.log(slug);

//------------------------------------------------------------

// Задача 8 Сумма элементов двух массивов

// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// let total = 0;

// const numbers = array1.concat(array2);

// console.log(numbers);

// for (const number of numbers) {
//   console.log(number);
//   total += number;
// }

// console.log("Total:", total);

// Задача 9 Работа с коллекцией карточек trello
// Метод splice()
// Удалить
// Добавить
// Обновить

const cards = [
  'Карточка-1',
  'Карточка-2',
  'Карточка-3',
  'Карточка-4',
  'Карточка-5',
];

// Удаление (по индексу), метод indexOf()

const cardToRemove = 'Карточка-3';

// Добавление (по индексу)

// Обновление (по индексу)
