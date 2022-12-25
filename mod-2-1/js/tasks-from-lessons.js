// Модуль 2. Занятие 3. Массивы

// Example 1 - Базовые операции с массивом
// Создайте массив genres с элементами «Jazz» и «Blues».
// Добавьте «Рок-н-ролл» в конец.
// Выведите в консоль первый элемент массива.
// Выведите в консоль последний элемент массива. Код должен работать для массива произвольной длины.
// Удалите первый элемент и выведите его в консоль.
// Вставьте «Country» и «Reggy» в начало массива.
// const genres = ;

// Example 2 - Массивы и строки

// Напиши скрипт для вычисления площади прямоугольника со сторонами, значения которых хранятся в переменной values в виде строки. Значения гарантированно разделены пробелом.

// const values = '8 11';

// Example 3 - Перебор массива
// Напиши скрипт для перебора массива fruits циклом for. Для каждого элемента массива выведи в консоль строку в формате номер_элемента: значение_элемента. Нумерация элементов должна начинаться с 1.

// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];

// Example 4 - Массивы и циклы

// Напиши скрипт который выводит в консоль имя и телефонный номер пользователя. В переменных names и phones хранятся строки имен и телефонных номеров, разделенные запятыми. Порядковый номер имен и телефонов в строках указывают на соответствие. Количество имен и телефонов гарантированно одинаковое.

// const names = 'Jacob,William,Solomon,Artemis';
// const phones = '89001234567,89001112233,890055566377,890055566300';

// Example 5 - Массивы и строки

// Напиши скрипт который выводит в консоль все слова строки кроме первого и последнего. Результирующая строка не должна начинаться или заканчиваться пробельным символом. Скрипт должен работать для любой строки.

// const string = 'Welcome to the future';

// Example 6 - Массивы и строки
// Напиши скрипт который «разворачивает» строку (обратный порядок букв) и выводит ее в консоль.

// const string = 'Welcome to the future';

// Example 7 - Поиск элемента
// Напиши скрипт поиска самого маленького числа в массиве. Код должен работать для любого массива чисел. Используй цикл для решения задачи.

// const numbers = [2, 17, 94, 1, 23, 37];
// let min;
// console.log(min); // 1

//--------------------------------------------------------

// * Example 1
const genres = ['Jazz', 'Blues'];
genres.push('Рок-н-ролл');
// console.log(genres[0])
const lastElIndex = genres.length - 1;
// console.log(genres[lastElIndex])
const firstDeletedEl = genres.shift();
// console.log(firstDeletedEl)
genres.unshift('Country', 'Reggy');

// genres.splice(0, 1, "New 1", "New 2")
// console.log(genres)

// * Example 2
const values = '8 11';
const arrNums = values.split(' ');
const sq = Number(arrNums[0]) * Number(arrNums[1]);
// console.log(sq)

// * Example 3
const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];

// for (let i = 0; i < fruits.length; i += 1) {
//     // console.log(i + 1, ':', fruits[i])
//     console.log(`${i + 1} : ${fruits[i]}`)
// }

// * Example 4
const names = 'Jacob,William,Solomon,Artemis';
const phones = '89001234567,89001112233,890055566377,890055566300';

const namesArray = names.split(',');
const phonesArray = phones.split(',');

// for (let i = 0; i < namesArray.length; i += 1) {
//     const fullString = `${namesArray[i]}: ${phonesArray[i]}`
//     console.log(fullString)
// }

// * Example 5
const string = 'Welcome to the future';
const stringArray = string.split(' ');

// stringArray.shift()
// stringArray.pop()

// console.log(stringArray.slice(1, -1).join(' '))

// console.log(stringArray)
// console.log(stringArray.join(' '))

// * Example 6
let revercedString = '';
for (let i = string.length - 1; i >= 0; i -= 1) {
  revercedString += string[i];
}

// console.log(revercedString)

let secondVariant = string.split('').reverse().join('');

// * Example 7
// const numbers = [2, 17, 94, 1, 23, 37];
// let min = numbers[numbers.length - 1];

// for (let i = 0; i < numbers.length ; i += 1) {
//     if (numbers[i] < min) {
//         min = numbers[i]
//     }
// }

// console.log(min); // 1

const numbers = [51, 18, 13, 24, 7, 85, 19];
let smallestNumber = numbers[0];

// for (const number of numbers) {
//     console.log('number:', number, 'smallestNumber', smallestNumber)
//   if (number < smallestNumber) {
//     smallestNumber = number;
//   }
// }

// console.log('smallestNumber: ', smallestNumber);
// console.log(Math.min(...numbers))

// let oneElement
// let arr = []

// for (let i = 0; i < fruits.length; i += 1) {
//     oneElement = fruits[i]
//     console.log(fruits[i])
//     arr.push(fruits[i]  + ':)')
// }

// console.log(arr)

let sum = 0;

for (const number of numbers) {
  console.log('number:', number, 'smallestNumber', smallestNumber);
  sum += number;
}

console.log(sum);
