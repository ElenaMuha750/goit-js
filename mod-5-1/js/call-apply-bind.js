//                   call и apply

//метод call позволяет взять произвольную функцию и принудительно вызвать в контексте какого-то объекта

// apply делает то же самое, только аргументы передаются как массив

// call & apply вызывают функцию здесь и сейчас

// const showThis = function (...args) {
//   console.log(args);
//   console.log("showThis -> this", this);
// };

// showThis();
// console.log(showThis);
// console.dir(showThis);

// const objA = {
//   a: 5,
//   b: 10,
// };

// showThis.call(objA, 5, 1, 1, 1);

// showThis.call(objA, 5, 1, [100, 200, 300]);
// showThis.apply(objA, [5, 1, [100, 200, 300]]);

// const objB = {
//   x: 788,
//   y: 25,
// };

// showThis.call(objB, 1, 1, 2);
// showThis.apply(objB, [1, 1, 2]);

// showThis();

// const changeColor = function (color) {
//   console.log("changeColor -> this", this);
//   this.color = color;
// };

// const hat = {
//   color: "black",
// };

// // changeColor.call(hat, 'orange');
// // console.log(hat);

// const sweater = {
//   color: "green",
// };

// changeColor.call(sweater, 'blue');
// console.log(sweater);

//-------------------------------------------------------

//                    bind

// метод bind позволяет сделать копию функции с навсегда привязанным контекстом. При этом оригинальная функция не меняется

// const changeHatColor = changeColor.bind(hat);
// const changeSweaterColor = changeColor.bind(sweater);

// changeHatColor('yellow');
// console.log(hat);

// changeSweaterColor('red');
// console.log(sweater);

// -----------------------------------------------------

/*
 * counter
 */

// const counter = {
//   value: 0,
//   increment(value) {
//     console.log("increment -> this", this);
//     this.value += value;
//   },
//   decrement(value) {
//     console.log("decrement -> this", this);
//     this.value -= value;
//   },
// };

// const updateCounter = function (value, operation) {
//   operation(value);
// };

// updateCounter(10, counter.increment.bind(counter));
// updateCounter(5, counter.decrement.bind(counter));

// console.log(counter);
