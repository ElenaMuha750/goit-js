/*
 * Array.prototype.reduce()
 * Поэлементо перебирает оригинальный массив
 * Возвращает что угодно 🤯
 * Заменяет всё на свете, но использовать нужно с умом
 *
 * Аргументы, которые передаются в коллбек (аккумулятор, поточный элемент, индекс, массив)
 */

// const numbers = [5, 10, 15, 20, 25];

// const total = numbers.reduce((acc, number) => {
//   console.log("number:", number);
//   console.log("acc:", acc);

//   return acc + number;
// }, 0);

// const total = numbers.reduce((acc, number) => acc + number, 0);
// console.log("total:", total);

// accumulator = 0 -> number = 5 -> return 0 + 5
// accumulator = 5 -> number = 10 -> return 5 + 10
// accumulator = 15 -> number = 15 -> return 15 + 15
// accumulator = 30 -> number = 20 -> return 30 + 20
// accumulator = 50 -> number = 25 -> return 50 + 25
// console.log(total);

// Считаем общую зарплату---------------------------

// const salary = {
//   mango: 100,
//   poly: 50,
//   ajax: 150,
// };

// const totalSalary = Object.values(salary).reduce(
//   (total, value) => total + value,
//   0
// );
// console.log(totalSalary);

// Считаем общее количество часов--------------------------------

// const players = [
//   { id: "player-1", name: "Mango", timePlayed: 310, online: false },
//   { id: "player-2", name: "Poly", timePlayed: 470, online: true },
//   { id: "player-3", name: "Kiwi", timePlayed: 230, online: true },
//   { id: "player-4", name: "Ajax", timePlayed: 150, online: false },
//   { id: "player-5", name: "Chelsey", timePlayed: 80, online: true },
// ];

// const totalTimePlayed = players.reduce(
//   (totalTime, player) => totalTime + player.timePlayed,
//   0
// );
// console.log(totalTimePlayed);

// -----------------------------------------------------

// Считаем общую сумму товаров корзины

// const cart = [
//   { label: "Apples", price: 100, quantity: 2 },
//   { label: "Bananas", price: 120, quantity: 3 },
//   { label: "Lemons", price: 70, quantity: 4 },
// ];

// const totalAmount = cart.reduce(
//   (total, { price, quantity }) => total + price * quantity,
//   0
// );
// console.log(totalAmount);

// --------------------------------------------------------

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// // Собираем все теги из твитов

// const allTags = tweets.reduce((acc, tweet) => [...acc, ...tweet.tags], []);
// console.log(allTags);

// Ведём статистику тегов

// Грязная версия, мутирует аргумент который придет в acc----------

// const tagsStats = allTags.reduce((acc, tag) => {
//   console.log(acc);

//   if (acc[tag]) {
//     acc[tag] += 1;

//     return acc;
//   }

//   acc[tag] = 1;

//   return acc;
// }, {});

// Чистая версия, каждый раз создает новый обьект-------------------

// const tagsStats = allTags.reduce((acc, tag) => {
//   console.log(acc);

//   if (acc[tag]) {
//     return {
//       ...acc,
//       [tag]: acc[tag] + 1,
//     };
//   }

//   return {
//     ...acc,
//     [tag]: 1,
//   };
// }, {});

// Тернарник-----------------------------------

// const tagsStats = allTags.reduce((acc, tag) => {
//   return {
//     ...acc,
//     [tag]: acc[tag] ? acc[tag] + 1 : 1,
//   };
// }, {});

// console.log(tagsStats);

// если свойство с ключом tag есть, увеличить его значение на 1
// если свойства нет с таким ключом, что в tag, сделать и записать 1

// ------------------------------------------------------------------

// const user = {
//   name: "Muha",
// };

// const key = "name";

// console.log(user[key]); // Muha

// ---------------------------------------------------------------

/*
 * Reduce своими руками
 */
// Array.prototype.reduce = function(callback, initialValue = this[0]) {
//   let accumulator = initialValue;

//   for (let i = 0; i < this.length; i += 1) {
//     accumulator = callback(accumulator, this[i], i, this);
//   }

//   return accumulator;
// };

//========================================================
// const numbers = [5, 10, 15, 20, 25];

// const total = numbers.reduce((acc, number) => acc + number, 0);

// console.log(total);
//---------------------------------------------------------

// const salary = {
//   mango: 100,
//   poly: 50,
//   ajax: 150,
// };

// const totalSalary = Object.values(salary).reduce(
//   (total, value) => total + value,
//   0
// );

// console.log(totalSalary);
//---------------------------------------------------------

//Считаем общее количество часов

// const players = [
//   { id: "player-1", name: "Mango", timePlayed: 310, online: false },
//   { id: "player-2", name: "Poly", timePlayed: 470, online: true },
//   { id: "player-3", name: "Kiwi", timePlayed: 230, online: true },
//   { id: "player-4", name: "Ajax", timePlayed: 150, online: false },
//   { id: "player-5", name: "Chelsey", timePlayed: 80, online: true },
// ];

// console.table(players);

// const totalTimePlayed = players.reduce(
//   (totalTime, player) => totalTime + player.timePlayed,
//   0
// );
// console.log(totalTimePlayed);

//----------------------------------------------------------

//Считаем общую сумму товаров корзины

// const cart = [
//   { label: "Apples", price: 100, quantity: 2 },
//   { label: "Bananas", price: 120, quantity: 3 },
//   { label: "Lemons", price: 70, quantity: 4 },
// ];

// const totalAmount = cart.reduce(
//   (total, { price, quantity }) => total + price * quantity,
//   0
// );
// console.log(totalAmount);
//---------------------------------------------------------

// Собираем все теги из твитов

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const allTags = tweets.reduce((acc, tweet) => [...acc, ...tweet.tags], []);

// как происходит распыление
// acc = [], tweet.tags = ['js', 'nodejs'] return [...[], ...['js', 'nodejs']]
// acc = ['js', 'nodejs'] tweet.tags ['html', 'css']
// return  [...['js', 'nodejs'], ...['html', 'css']]
//  ['js', 'nodejs', 'html', 'css']

// console.log(allTags);

// Ведем статистику тегов

// const tagsStats = allTags.reduce((acc, tag) => {
//   // console.log(tag);
//   console.log(acc[tag]);
//   return {};
// }, {});

// console.log(tagsStats);

// если свойство с ключом tag есть, увеличить его значение на 1
// если свойства нет с таким ключом что в tag, сделать и записать 1

// {
//   nodejs: 3,
//   js: 3,
//   react: 2,
// }

//=====================================================================

// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Change code below this line

// const totalPlayTime = playtimes.reduce((acc, playTime) => {
//   return acc + playTime;
// }, 0);

// console.log(totalPlayTime);

// // Change code above this line
// const averagePlayTime = totalPlayTime / playtimes.length;
//=====================================================================

// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = players.reduce((acc, player) => {
//   return player.playtime / player.gamesPlayed + acc;
// }, 0);

// console.log(totalAveragePlaytimePerGame);

//==================================================================
