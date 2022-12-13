/*                      SORT
 * Array.prototype.sort(callback(currentEl, nextEl){})
 * - Сортирует и ИЗМЕНЯЕТ оригинальный массив
 * - По умолчанию:
 *   - сортирует по возрастанию
 *   - приводит элементы к строке и сортирует по [Unicode]
 */

// compareFunction - функция сравнения(callback)
// Элементы массива сортируются в соответствии с ее возвпащаемым значением
//   - если compareFunction(А, В) меньше 0, сортировка поставит А перед В
//   - если compareFunction(А, В) больше 0, сортировка поставит В перед А
//   - если compareFunction(А, В) вернет 0, сортировка оставит А и В неизменными по отношению друг к другу, но отсортирует их по отношению ко всем другим элементам

// const numbers = [1, 9, 6, 2, 3];
// numbers.sort();
// console.log(numbers);

const letters = ["b", "B", "a", "A"];
// letters.sort();
// console.log(letters);

// numbers.sort((curEl, nextEl) => {
//   return curEl - nextEl;
// });
// console.log(numbers); // [1, 2, 3, 6, 9] по возрастанию

// numbers.sort((curEl, nextEl) => {
//   return nextEl - curEl;
// });
// console.log(numbers); // [9, 6, 3, 2, 1] по убыванию

// ---------------------------------------------------------

// Как сделать копию массива чтобы не сортировать оригинальный

// - Array.prototype.slice()
// - Операция spread

// const copy = [...numbers];
// copy.sort();
// console.log("copy:", copy); // [1, 2, 3, 6, 9]
// console.log("numbers:", numbers); //  [1, 9, 6, 2, 3]
// console.log(copy === numbers); // false

const numbers = [1, 9, 6, 2, 3];

const descSortedNumbers = [...numbers].sort((a, b) => b - a);
const ascSortedNumbers = [...numbers].sort((a, b) => a - b);
console.log("descSortedNumbers", descSortedNumbers); // [9, 6, 3, 2, 1]
console.log("ascSortedNumbers", ascSortedNumbers); // [1, 2, 3, 6, 9]
console.log("numbers", numbers); // [1, 9, 6, 2, 3]

// -----------------------------------------------------------------

// Кастомная сортировка сложных типов

const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, online: false },
  { id: "player-2", name: "Poly", timePlayed: 470, online: true },
  { id: "player-3", name: "Kiwi", timePlayed: 230, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 150, online: false },
  { id: "player-5", name: "Chelsey", timePlayed: 80, online: true },
];

const sortedByBestPlayers = [...players].sort(
  (prevPlayer, nextPlayer) => nextPlayer.timePlayed - prevPlayer.timePlayed
);
// console.table(sortedByBestPlayers); // по убыванию timePlayed

//-----------------------------------------------

// Функция сортировки имен по первой букве

const byName = [...players].sort((a, b) => {
  const result = a.name[0] > b.name[0];

  if (result) {
    return 1;
  }

  if (!result) {
    return -1;
  }
});
console.table(byName);
