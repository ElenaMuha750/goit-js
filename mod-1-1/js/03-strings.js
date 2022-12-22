/*
 * Длина строки, свойство length
 */
const message = 'В этой строке 26 символов.';
// console.log(message.length);

//---------------------------------------------------------
/*
 * Конкатенация строк
 */
const firstName = 'Chelsy';
const lastName = 'Emerald';
const fullName = firstName + ' ' + lastName;

// console.log(fullName);

// console.log('abc ' + 'fcd ' + 'der');

//----------------------------------------------------------

/*
 * Напиши скрипт который выведет строку в формате:
 * «Гость x y поселяется в z номер q»,
 * подставив вместо x y z q значения переменных
 */

const room = 716;
const type = 'VIP';

// const welcomeMsg =
//   'Гость ' +
//   firstName +
//   ' ' +
//   lastName +
//   ' поселяется в ' +
//   type +
//   ' номер ' +
//   room;

const welcomeMsg = `Гость ${firstName} ${lastName} поселяется в ${type} номер ${room}`;
// console.log(welcomeMsg); // Гость Chelsy Emerald поселяется в VIP номер 716

// console.log(`Результат: ${5 + 5}`); // Результат: 10

/*
 * Шаблонные строки (template strings)
 * Возвращаемся к составлению строки поселения в отель
 */

const quantity = 15;
const orderMsg = `Вы заказываете ${quantity} холодильников.`;

// console.log(orderMsg); // Вы заказываете 15 холодильников.

//------------------------------------------------------------

/*
 * Нормализация с методом toLowerCase()
 */
// НЕ деструктивный метод - создает новую строку

// let brand = 'SamSUng';
// const normalizedBrand = brand.toLowerCase();
// console.log(normalizedBrand); // samsung

// let brand = prompt('Давай бренд');
// brand = brand.toLowerCase();
// console.log(brand);

// let brand = 'SamSUnG';
// console.log(brand[4]);
// console.log(brand.slice(1).toLowerCase());

// brand = brand[0] + brand.slice(1).toLowerCase();
// console.log(brand); // Samsung

//------------------------------------------------------------

/*
 * Поиск в строке с методом includes()
 */
const blacklistedWord1 = 'спам';
const blacklistedWord2 = 'распродажа';

const string1 = 'Привет, я принц Абдул, это не спам, предлагаю тебе миллион!';
const string2 = 'Самая большая РАСПРОДАЖА этой недели, не пропустите!';
const string3 = 'Рекламная кампания #fatlivesmatter';

console.log(string1.includes(blacklistedWord1)); // true
console.log(string1.includes(blacklistedWord2)); // false

console.log(string2.includes(blacklistedWord1)); // false
const normalizedString2 = string2.toLowerCase();
console.log(normalizedString2.includes(blacklistedWord2)); // true

console.log(string3.includes(blacklistedWord1)); // false
console.log(string3.includes(blacklistedWord2)); // false
