//                                   forEach

// Поэлементно перебирает массив.
// Вызызвает коллбек-функцию для каждого элемента массива.
// Ничего не возвращает.
// Заменяет классический for, если не нужно прерывать цикл
// Array.prototype.forEach(callback(currentValues, index, thisArg))

// у forEach есть 2 аргумента: 1 - callback, 2 - объект, в контексе которого будет вызываться этот callback

// const numbers = [5, 10, 15, 20, 25];

// numbers.forEach(
//   function (number, index, array) {
//     console.log("number", number);
//     // console.log(this);
//   },
//   { a: 5, b: 10 }
// );

// console.log(numbers);

// numbers.forEach(function (element, index, array) {
//   console.log(element);
//   console.log(index);
//   console.log(array);
// });

// ---------------------------------------------------------

//                        Метод map()

// - Поэлементно перебирает оригинальный массив.
// - Не изменяет оригинальный массив. (не деструктивный)
// - Результат работы коллбек-функции записывается в новый массив.
// - Возвращает новый массив такой же длины.

// Array.prototype.map()

// const numbers = [5, 10, 15, 20, 25];

// const doubledNums = numbers.map(function (number) {
//   console.log(number);

//   return number * 2;
// });

// console.log("numbers", numbers);
// console.log("doubledNums", doubledNums);

// -------------------

const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
  { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
  { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
  { id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true },
];

console.table(players);

// Получаем массив имен всех игроков

// const playerName = players.map(player => {
//   console.log(player);

//   return player.name;
// });
// console.log("playerName", playerName);
// console.log("players", players);

// const playerPoints = players.map(player => player.points);
// console.log("playerPoints", playerPoints);

// ------------------------

// const res = players.map(player => {
//   return {
//     name: player.name,
//     online: player.online,
//   };
// });
// console.log("res", res);

// деструктуризация

// const res = players.map(({ name, online }) => ({ name, online }));
// console.log("res", res);

// -----------------------------

// Увеличиваем кол-во поинтов каждого игрока на 10%

// const updatedPlayers = players.map(player => ({
//   ...player,
//   points: player.points * 1.1,
// }));

// console.table(updatedPlayers);
// console.log(updatedPlayers);

//----------------------------------

// Увеличиваем кол-во часов игрока по id

const playerIdToUpdate = "player-3";

const updatedPlayers = players.map(player => {
  console.log(player.id);
  if (playerIdToUpdate === player.id) {
    console.log("НАШЛИ!!!!!!!!!!!!!!!!!!");

    return {
      ...player,
      timePlayed: player.timePlayed + 100,
    };
  }
  return player;
});

// const updatedPlayers = players.map(player =>
//   playerIdToUpdate === player.id
//     ? { ...player, timePlayed: player.timePlayed + 100 }
//     : player
// );
console.table(updatedPlayers);

console.log(players.timePlayed === updatedPlayers.timePlayed);
