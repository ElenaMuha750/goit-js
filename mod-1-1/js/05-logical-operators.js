/*
 * Приведение к булю на примере Boolean(value)
 */

// console.log(Boolean(5)); // true
// console.log(Boolean('qwe')); // true
// console.log(Boolean(-5)); // true
// console.log(Boolean(true)); // true
// console.log(Boolean('0')); // true

// console.log(Boolean('')); // false
// console.log(Boolean(0)); // false
// console.log(Boolean(NaN)); // false
// console.log(Boolean(null)); // false
// console.log(Boolean(undefined)); // false
// console.log(Boolean(false)); // false

//-------------------------------------------------------------
/*
 * Логическое И (оператор &&)
 * - Запинается на лжи (на false)
 * - Возвращает то, на чём запнулось или последний операнд
 */

// console.log(5 && 6); // 6

// console.log(0 && 5); // 0

// console.log(5 && 4 && 7 && 'mango'); // 'mango'

// console.log(5 && 4 && 0 && 'mango'); // 0

//-------------------------------------------------------------

/*
 * Логическое ИЛИ (оператор ||)
 * - Запинается на правде
 * - Возвращает то, на чём запнулось или последний операнд
 */

// console.log(5 || 7 || 8 || 10); // 5

// console.log(false || 7 || null || 0); // 7

// console.log(false || 0 || 8 || 0); // 8

// console.log(false || NaN || null || 0); // 0

//--------------------------------------------------------------

/*
 * Логическое НЕ (оператор !)
 * Делает инверсию правда > ложь и ложь > правда
 */

// console.log(!false); // true

// console.log(!0); // true

// console.log(!5); // false
