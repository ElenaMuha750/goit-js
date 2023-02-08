/*
 * Прототип объекта
 *
 * - https://miro.com/app/board/o9J_ku0WE0g=/
 * - Object.create()
 * - [[Prototype]] и __proto__
 * - Object.getPrototypeOf()
 * - Собственные свойства и Object.prototype.hasOwnProperty()
 * - Цепочка прототипов
 */

// const objC = {
//   z: 5,
// };
// console.log('objC', objC); // {z: 5}

// const objB = Object.create(objC);
// objB.y = 2;

// // console.log('objB', objB); // {y: 2}

// // console.log(objB.y); // 2
// // console.log(objB.z); // 5

// const objA = Object.create(objB);
// objA.x = 1;

// objA.z = 1000;
// console.log('objA', objA); // {x: 1, z: 1000}

// console.log(objA.hasOwnProperty('x')); // true
// console.log(objA.hasOwnProperty('y')); // false

// ------------------------------------------------------

// const dummyObj = Object.create({ message: 'Это свойство объекта прототипа' });
// dummyObj.message = 'Это собственное свойство объекта';
// console.log('dummyObj', dummyObj);

// console.log(dummyObj.message);

//  'Это собственное свойство объекта'
//  'Это свойство на объекте-прототипе'

/*
 * Алгоритм поиска свойства в цепочке прототипов:
 * 1. Поиск начинается в собственных свойствах
 * 2. Если свойства нет в сообственных, поиск переходит к цепочке прототипов
 * 3. Поиск прекращается при первом совпадении (есть такое свойство)
 * 4. Возвращается значение свойства
 */

// const objA = Object.create({ z: 5 });
// objA.y = 100;
// console.log('objA', objA); // {y: 100}

// console.log(objA.x); // undefined
