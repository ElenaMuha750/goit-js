/*                                 FILTER
 * Array.prototype.filter()
 * Поэлементо перебирает оригинальный массив
 * Возвращает новый массив (с элементами или пустой)
 * Добавляет в возвращаемый массив элементы которые удовлетворяют условию коллбек-функции
 * - если коллбек вернул TRUE элемент добавляется в возвращаемы массив
 * - если коллбек вернул FALSE элемент НЕ добавляется в возвращаемы массив
 */

// const numbers = [5, 10, 15, 20, 25];

// const filteredNumbers = numbers.filter(number => number >= 15);
// console.log(filteredNumbers);
// console.log(numbers);

// -----------------------------------------------------------

// const players = [
//   { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
//   { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
//   { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
//   { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
//   { id: "player-5", name: "Chelsy", timePlayed: 280, points: 48, online: true },
// ];

// Получаем массив всех онлайн игроков----------------------

// const onlinePlayer = players.filter(player => player.online);

// Деструктуризация
// const onlinePlayer = players.filter(({ online }) => online);
// console.table(onlinePlayer);

// Получаем массив всех оффлайн игроков---------------------

// const offlinePlayer = players.filter(player => !player.online);
// console.table(offlinePlayer);

// Получаем список хардкорных игроков с временем больше 250 кол-во поинтов каждого игрока---------------------------------

// const hardcorePlayers = players.filter(player => player.timePlayed > 250);
// console.table(hardcorePlayers);

// ---------------------------------------------------------------------

/*                            FIND
 * Array.prototype.find()
 * Поэлементо перебирает оригинальный массив
 * Возвращает первый элемент удовлетворяющий условию или undefined (Один из коллекции)
 * Используется для поиска уникальных элементов в коллекции
 *
 * Если не находит, возвращает undefined
 */

const numbers = [5, 10, 15, 20, 25];

const number = numbers.find(number => number === 10);
// console.log(number);

const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
  { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
  { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
  { id: "player-5", name: "Chelsy", timePlayed: 280, points: 48, online: true },
];

// Ищем игрока по id

const playerIdToFind = "player-3";

// const playerWithId = players.find(player => player.id === playerIdToFind);

// деструктуризация
// const playerWithId = players.find(({ id }) => id === playerIdToFind);

// console.log(playerWithId);

// ФУНКЦИЯ ДЛЯ ПОИСКА ИГРОКА ПО Id

const findPlayerById = (allplayer, playerId) => {
  return allplayer.find(({ id }) => id === playerId);
};

// const findPlayerById = (allplayer, playerId) =>
//   allplayer.find(({ id }) => id === playerId);

console.log(findPlayerById(players, "player-1"));
console.log(findPlayerById(players, "player-4"));

// ----------------------------------------------

// Ищем игрока по имени

// const playerNameToFind = "Poly";

// const playerWithName = players.find(({ name }) => name === playerNameToFind);
// console.log(playerWithName);
