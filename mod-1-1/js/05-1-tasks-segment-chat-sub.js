//                        Task 1 Segment
/*
 * Напиши скрипт который проверяет вхождение числа
 * в отрезок обозначенный x1 и x2.
 *
 * - До x1
 * - После x2
 * - От x1 до x2
 * - До x1 или после x2
 */

const x1 = 10;
const x2 = 30;
const number = 45;

// console.log(`Число ${number} попадает в отрезок до ${x1}? `, number < x1);

// console.log(`Число ${number} попадает в отрезок после ${x2}? `, number > x2);

// const res1 = number > x1 && number < x2;

// number > x1 && number < x2
// 50 > 10 && 50 < 30
// true && false
// false

// 5 > 10 && 5 < 30
// false && true
// false

// 15 > 10 && 15 < 30
// true && true
// true

// console.log(`Число ${number} попадает в отрезок от ${x1} до ${x2}? `, res1);

const res2 = number < x1 || number > x2;

// 150 < 10 || 150 > 30
// false || true
// true

// 25 < 10 || 25 > 30
// false || false
// false
// console.log(
//   `Число ${number} попадает в отрезок до ${x1} или после ${x2}? `,
//   res2
// );

//-------------------------------------------------------
//                         Task 2 Chat
/*
 * Напиши скрипт который проверяет возможность открыть чат с пользователем.
 * Для этого пользователь должен быть:
 * - другом
 * - онлайн
 * - без режима не беспокоить
 */

// const isOnline = true;
// const isFriend = true;
// const isDnd = false;

// const canOpenChat = isOnline && isFriend && !isDnd;
// console.log('Можно открыть чат? ', canOpenChat);

//----------------------------------------------------------
//                   Task 3 subscription
/*
 * Напиши скрипт проверки подписки пользователя при доступе к контенту
 * - Есть три типа подписки: free, pro и vip.
 * - Получить доступ могут только пользователи pro и vip
 */

const sub = 'pro';

// // если пользователь pro или пользователь vip тогда есть доступ

const canAccessContent = sub === 'pro' || sub === 'vip';
// // true || false => true
// // false || true => true
// // false || false => false

// console.log('Есть доступ к контенту? ', canAccessContent);
