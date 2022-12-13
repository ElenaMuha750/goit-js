/*                               EVERY()
 * Array.prototype.every()
 * Поэлементо перебирает оригинальный массив
 * Возвращает true если все элементы массива удовлетворяют условию
 * Возвращает FALSE, если хотя бы один по условию будет FALSE
 */

const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
  { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
  { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
  { id: "player-5", name: "Chelsy", timePlayed: 280, points: 48, online: true },
];

// const isAllOnline = players.every(player => player.online);
// console.log("isAllOnline:", isAllOnline);

// const averagedInPlayTime = players.every(({ timePlayed }) => timePlayed > 100);
// console.log(averagedInPlayTime);

// -------------------------------------------------------------------

//                               SOME

/*
 * Array.prototype.some()
 * Поэлементо перебирает оригинальный массив
 * Возвращает true если хотя бы один элемент массива удовлетворяет условию
 * Возвращает FALSE, если все по условию будет FALSE
 */

const isAnyOnline = players.some(player => player.online);
console.log("isAnyOnline:", isAnyOnline);

const anyHardcorePlayers = players.some(({ timePlayed }) => timePlayed > 400);
console.log("anyHardcorePlayers:", anyHardcorePlayers);
