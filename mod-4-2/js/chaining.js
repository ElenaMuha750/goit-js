//                   Цепочки вызовов - chaining

const numbers = [1, 5, 2, 4, 3];

// 1. Отфильтровать те, которые > 2

// const greaterThenTwo = numbers.filter(num => num > 2);
// console.log(greaterThenTwo);

// 3. Полученные элементы утроить

// const multByThree = greaterThenTwo.map(num => num * 3);
// console.log(multByThree);

// 3. Отсортировать по возрастанию

// const sorted = multByThree.sort((a, b) => a - b);
// console.log(sorted); // [9, 12, 15]

// Цепочка предыдущих трех методов

// const sorted = numbers
//   .filter(num => num > 2)
//   .map(num => num * 3)
//   .sort((a, b) => a - b);

// console.log(sorted); // [9, 12, 15]

// ---------------------------------------------------

const players = [
  { id: "id-1", tag: "Mango", isOnline: true, rank: 800 },
  { id: "id-2", tag: "Poly", isOnline: false, rank: 600 },
  { id: "id-3", tag: "Ajax", isOnline: true, rank: 100 },
  { id: "id-4", tag: "Kiwi", isOnline: true, rank: 400 },
];

// const onlineAndSorted = players
//   .filter(player => player.isOnline)
//   .sort((a, b) => a.rank - b.rank);
// console.table(onlineAndSorted);

//------------------------------------------------------

//              Chaining в методах обтекта как jquery

const element = {
  class: "",
  hovered: false,
  changeClass(cls) {
    this.class = cls;

    return this;
  },
  toggleHovered() {
    this.hovered = !this.hovered;

    return this;
  },
};

// element.toggleHovered().changeClass("open");
element.changeClass("open");

console.log(element);
