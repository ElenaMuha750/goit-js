/*
 * Парс числа с Number.parseInt() и Number.parseFloat()
 */
// Number.parseInt() - работает с целыми числами

let elementWidth = '50px';
// elementWidth = Number.parseInt(elementWidth);
// console.log('elementWidth: ', elementWidth); // 50

// Number.parseFloat() - и с целыми числами и с плавающей точкой
let elementHeight = '200.74px';
// elementHeight = Number.parseFloat(elementHeight);
// console.log('elementHeight: ', elementHeight); // 200.74

//------------------------------------------------------
/*
 * - Метод число.toFixed(digits)
 * - Матрёшки на примере  console.log(Number(число.toFixed(digits)))
 */
// отсекает (НЕ округляет) колличество символов, оставляя столько, сколько указано в скобках

let salary = 1300.16472;
// salary = Number(salary.toFixed(2));
// console.log(salary);

//------------------------------------------------------
/*
 * - Приведение (преобразование) к числу с Number(value)
 * - Значение NaN (Not a Number) и метод Number.isNaN(value)
 */
let quantity = '30';
let value = 'Эту строку невозможно привести к числу';

// console.log(Number(quantity)); // 30 (число)
// console.log(Number(value)); // NaN

// console.log(Number(true)); // 1
// console.log(Number(false)); // 0
// console.log(Number('hhbihinj')); // NaN

//-------------------------------------------------------

/*
 * Обьект Math
 * - Возведение в степень
 * - Exponent operator (**)
 */

// const base = 2;
// const power = 5;

// const result = Math.pow(base, power);
// console.log(result); // 32
// console.log(base ** power); // 32

// const res = Math.pow(2, 3);
// console.log(res); // 8

// let res1 = 2 ** 0.5;
// res1 = Number(res1.toFixed(2));
// console.log(res1); // 1.41
// ** - оператор экспонент

//--------------------------------------------------------
//                       Задача 1
/*
 * Напиши скрипт который просит пользователя ввести число и степень,
 * возводит число в эту степень и выводит результат в консоль
 */

//  1. попросить ввести число и сохранить в переменную
// let base = prompt('Давай число');
// base = Number(base);
// console.log(base);

//  2. попросить ввести степень и сохранить в переменную

// let power = prompt('Давай степень');
// power = Number(power);
// console.log(power);

//  3. Возвести введенные данные в степень и вывести

// const result = base ** power;
// console.log(result);

//---------------------------------------------------------

//                      Задача 2
/*
 * Генерим псевдослучайные числа
 * - Math.random()
 * - Math.round() - округляет числа
 */
// Math.random() * (max - min) + min; // формула для задания диапазона для псевдослучайных чисел
// console.log(Math.random() * (50 - 30) + 30);

// const max = 80;
// const min = 10;

// const result = Math.round(Math.random() * (max - min) + min);

// console.log(result);

//---------------------------------------------------------

// const colors = ['tomato', 'teal', 'orange', 'deeppink', 'skyblue'];
// const max = colors.length - 1;
// const min = 0;

// const index = Math.round(Math.random() * (max - min) + min);

// const color = colors[index];

// console.log(color);

// document.body.style.backgroundColor = color;
