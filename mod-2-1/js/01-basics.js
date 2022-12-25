/*
 * Знакомство  с массивами
 * - Объявление
 * - Индексация
 * - Длина
 * - Индекс последнего элемента
 * - Переопределение
 *
 * 'Mango', 'Kiwi', 'Poly', 'Ajax'
 */

// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// console.table(friends);

// // Переопределение значения в массиве

// friends[1] = 'qwerqrwr';
// friends[3] = 123123;

// console.table(friends);

// const lastIndex = friends.length - 1;
// console.log(lastIndex);

//----------------------------------------------------------
/*
 * Передача по ссылке (by reference) и по значению (by value)
 * - Примитивы и сложные типы
 * - Ссылочное равенство (referential equality)
 */

// Сложные типыю Передача по ссылке (by reference)
// const a = [1, 2, 3];
// const b = a;

// console.log('a', a); // [1, 2, 3]
// console.log('b', b); // [1, 2, 3]

// a[0] = 500;

// console.log('a', a); // [500, 2, 3];
// console.log('b', b); // [500, 2, 3];

// console.log(a === b); // true

// console.log([1, 2, 3] === [1, 2, 3]); // false
//------------------------

// Примитивы. Передача по значению (by value)

// let a = 5;
// // Присвоение по значению, в памяти будет создана еще
// // одна ячейка в которую будет скопировано значение 5
// let b = a;
// console.log(a); // 5
// console.log(b); // 5

// // Изменим значение a
// a = 10;
// console.log(a); // 10
// // Значение b не изменилось так как это отдельная копия
// console.log(b); // 5

// console.log(a === b); // false

//---------------------------------------------------------

/*
 * Перебор (итерация) массива
 * - for - если нужен индекс или нужно изменить элемент массива
 * - for...of - если индекс не нужен и в массиве ничего менять не нужно
 */

// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// console.table(friends);
// const lastIndex = friends.length - 1;

// for (let i = 0; i <= lastIndex; i += 1) {
//   console.log(friends[i]);
//   // friends[i] += `-${i}`;
//   friends[i] += '-1';
// }

// for (let friend of friends) {
//   console.log(friend);
// }

// console.table(friends);

//----------------------------------

// const friends = ['Lena', 'Vera', 'Julia', 'Muha'];

// console.table(friends);

// for (let i = 0; i < friends.length; i += 1) {
//   friends[i] += `-${i + 1}`;
// }

// console.table(friends);
