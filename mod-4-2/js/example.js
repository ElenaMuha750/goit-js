"use strict";

// const cars = [
//   {
//     make: "Honda",
//     model: "CR-V",
//     type: "suv",
//     amount: 14,
//     price: 24045,
//     onSale: true,
//   },
//   {
//     make: "Honda",
//     model: "Accord",
//     type: "sedan",
//     amount: 2,
//     price: 22455,
//     onSale: true,
//   },
//   {
//     make: "Mazda",
//     model: "Mazda 6",
//     type: "sedan",
//     amount: 8,
//     price: 24195,
//     onSale: false,
//   },
//   {
//     make: "Mazda",
//     model: "CX-9",
//     type: "suv",
//     amount: 7,
//     price: 31520,
//     onSale: true,
//   },
//   {
//     make: "Toyota",
//     model: "4Runner",
//     type: "suv",
//     amount: 19,
//     price: 34210,
//     onSale: false,
//   },
//   {
//     make: "Toyota",
//     model: "Sequoia",
//     type: "suv",
//     amount: 16,
//     price: 45560,
//     onSale: false,
//   },
//   {
//     make: "Toyota",
//     model: "Tacoma",
//     type: "truck",
//     amount: 4,
//     price: 24320,
//     onSale: true,
//   },
//   {
//     make: "Ford",
//     model: "F-150",
//     type: "truck",
//     amount: 11,
//     price: 27110,
//     onSale: true,
//   },
//   {
//     make: "Ford",
//     model: "Fusion",
//     type: "sedan",
//     amount: 13,
//     price: 22120,
//     onSale: true,
//   },
//   {
//     make: "Ford",
//     model: "Explorer",
//     type: "suv",
//     amount: 6,
//     price: 31660,
//     onSale: false,
//   },
// ];

// console.table(cars);

//--------------------------------------------------

// Example 1 - Метод map

// Пусть функция getModels возвращает массив моделей (поле model) всех автомобилей.

// const getModels = cars => {
//   const models = cars.map(car => car.model)
//   return models
// };

// const getModels = cars => cars.map(car => car.model);
// const getModels = cars => cars.map(({ model }) => model);
// console.table(getModels(cars));

// const models = cars.map(({ model }) => model);
// console.log(models);

//-------------------------------------------------

// Example 2 - Метод map
// Пусть функция makeCarsWithDiscount возвращает новый массив объектов с измененным значением свойства price в зависимости от переданной скидки.

// const makeCarsWithDiscount = (cars, discount) => {
//   return cars.map(car => {
//     const carCopy = { ...car };
//     const newPrice = carCopy.price - carCopy.price * discount;
//     carCopy.price = newPrice;
//     return carCopy;
//   });
// };

// const makeCarsWithDiscount = (cars, discount) => {
//   return cars.map(car => {
//     const { price } = car;
//     return {
//       ...car,
//       price: price - price * discount,
//     };
//   });
// };

// const makeCarsWithDiscount = (cars, discount) => {
//   return cars.map(({ price, ...car }) => ({
//     ...car,
//     price: price - price * discount,
//   }));
// };

// const makeCarsWithDiscount = (cars, discount) =>
//   cars.map(({ price, ...car }) => ({
//     ...car,
//     price: price - price * discount,
//   }));

// const carsWithDiscount = makeCarsWithDiscount(cars, 0.2);
// console.log(carsWithDiscount[0] === cars[0]);

// console.table(makeCarsWithDiscount(cars, 0.2));
// console.table(makeCarsWithDiscount(cars, 0.4));

// const carsWithDiscount = makeCarsWithDiscount(cars, 0.2)
// console.log(carsWithDiscount)

// function foo({ price, ...other }) {
//   console.log(price);
//   console.log(other);
// }

// foo({ price: 1000, coun: 2, name: "Some name" });

//---------------------------------------------------------------

// Example 3 - Метод filter

// Пусть функция filterByPrice возвращает массив автомобилей цена которых меньше чем значение параметра threshold.

// const filterByPrice = (cars, threshold) => {
//   const filteredCars = cars.filter(car => car.price < threshold);
//   return filteredCars;
// };

// const filterByPrice = (cars, threshold) =>
//   cars.filter(({ price }) => price < threshold);

// console.table(filterByPrice(cars, 30000));
// console.table(filterByPrice(cars, 25000));

//-------------------------------------------------------------

// Example 4 - Метод filter

// Пусть функция getCarsWithDiscount возвращает массив автомобилей свойство onSale которых true.

// const getCarsWithDiscount = cars => cars.filter(({ onSale }) => onSale);

// console.table(getCarsWithDiscount(cars));

//------------------------------------------------------------

// Example 5 - Метод filter

// Пусть функция getCarsWithType возвращает массив автомобилей тип которых совпадает со значением параметра type.

// const getCarsWithType = (cars, type) => {
//   const carsByType = cars.filter(car => car.type === type);
//   return carsByType;
// };

// const getCarsWithType = (cars, type) => cars.filter(car => car.type === type);

// console.table(getCarsWithType(cars, "suv"));
// console.table(getCarsWithType(cars, "sedan"));

//--------------------------------------------------------

// Example 6 - Метод find

// const getCarByModel = (cars, searchModel) =>
//   cars.find(({ model }) => model === searchModel);

// console.log(getCarByModel(cars, "F-150"));
// console.log(getCarByModel(cars, "CX-9"));

//--------------------------------------------------------

// Example 7 - Метод sort

// Пусть функция sortByAscendingAmount возвращает новый массив автомобилей отсортированный по возврастанию значения свойства amount.

// const sortByAscendingAmount = cars => {
//   const ascAmount = [...cars].sort(
//     (prevCar, nextCar) => prevCar.amount - nextCar.amount
//   );
//   return ascAmount;
// };

// const sortByAscendingAmount = cars =>
//   [...cars].sort((prevCar, nextCar) => prevCar.amount - nextCar.amount);

// console.table(sortByAscendingAmount(cars));

//---------------------------------------------------------

// Example 8 - Метод sort

// Пусть функция sortByDescendingPrice возвращает новый массив автомобилей отсортированный по убыванию значения свойства price.

// const sortByDescendingPrice = cars =>
//   [...cars].sort((prevCar, nextCar) => nextCar.price - prevCar.price);

// console.table(sortByDescendingPrice(cars));

//---------------------------------------------------------------

// Example 9 - Метод sort

// Пусть функция sortByModel возвращает новый массив автомобилей отсортированный по названию модели в алфавитном и обратном алфавитном порядке, в засисимости от значения параметра order.

// const sortByModel = (cars, order) =>
//   [...cars].sort((prev, next) =>
//     order === "asc"
//       ? prev.model.localeCompare(next.model)
//       : next.model.localeCompare(prev.model)
//   );

// const sortByModel = (cars, order) =>
//   [...cars].sort((prev, next) => {
//     if (order === "asc") return prev.model.localeCompare(next.model);
//     if (order === "desc") return next.model.localeCompare(prev.model);
//     return 0;
//   });

// console.table(sortByModel(cars, "asc"));
// console.table(sortByModel(cars, "desc"));

//-------------------------------------------------------------

// Example 10 - Метод reduce

// Пусть функция getTotalAmount возвращает общее количество автомобилей(значение свойств amount).

// const getTotalAmount = cars => {
//   const totalAmountCars = cars.reduce((acc, car) => acc + car.amount, 0);
//   return totalAmountCars;
// };

// const getTotalAmount = cars => cars.reduce((acc, car) => acc + car.amount, 0);

// console.log(getTotalAmount(cars));

//------------------------------------------------------------------

// const cars = [
//   {
//     id: 1,
//     make: "Honda",
//     model: "CR-V",
//     type: "suv",
//     amount: 14,
//     price: 24045,
//     onSale: true,
//   },
//   {
//     id: 2,
//     make: "Honda",
//     model: "Accord",
//     type: "sedan",
//     amount: 2,
//     price: 22455,
//     onSale: true,
//   },
//   {
//     id: 3,
//     make: "Mazda",
//     model: "Mazda 6",
//     type: "sedan",
//     amount: 8,
//     price: 24195,
//     onSale: false,
//   },
//   {
//     id: 4,
//     make: "Mazda",
//     model: "CX-9",
//     type: "suv",
//     amount: 7,
//     price: 31520,
//     onSale: true,
//   },
//   {
//     id: 5,
//     make: "Toyota",
//     model: "4Runner",
//     type: "suv",
//     amount: 19,
//     price: 34210,
//     onSale: false,
//   },
//   {
//     id: 6,
//     make: "Toyota",
//     model: "Sequoia",
//     type: "suv",
//     amount: 16,
//     price: 45560,
//     onSale: false,
//   },
//   {
//     id: 7,
//     make: "Toyota",
//     model: "Tacoma",
//     type: "truck",
//     amount: 4,
//     price: 24320,
//     onSale: true,
//   },
//   {
//     id: 8,
//     make: "Ford",
//     model: "F-150",
//     type: "truck",
//     amount: 11,
//     price: 27110,
//     onSale: true,
//   },
//   {
//     id: 9,
//     make: "Ford",
//     model: "Fusion",
//     type: "sedan",
//     amount: 13,
//     price: 22120,
//     onSale: true,
//   },
//   {
//     id: 10,
//     make: "Ford",
//     model: "Explorer",
//     type: "suv",
//     amount: 6,
//     price: 31660,
//     onSale: false,
//   },
// ];

// const carsObj = {
//   1: { id: 1, make: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true },
//   2: { id: 2, make: 'Honda', model: 'Accord', type: 'sedan', amount: 2, price: 22455, onSale: true },
//  //...
// }

// const carsObj = {};

// for (let car of cars) {
//   const { id } = car;
//   carsObj[id] = { ...car }; // cars.Obj[1] = car
// }

// for (let car of cars) {
//   const { id, model, ...otherProps } = car;
//   carsObj[model] = otherProps;
// }

// const carsObj = cars.reduce((acc, car) => {
//   acc[car.id] = car;
//   return acc;
// }, {});

// const carsObj = cars.reduce((acc, car) => {
//   return { ...acc, [car.id]: { ...car } };
// }, {});

// const carsObj = cars.reduce((acc, car) => ({ ...acc, [car.id]: { ...car } }), {});

// console.log(carsObj);

//====================================================================

// const cars = [
//   {
//     id: 1,
//     make: "Honda",
//     model: "CR-V",
//     type: "suv",
//     amount: 14,
//     price: 24045,
//     onSale: true,
//   },
//   {
//     id: 2,
//     make: "Honda",
//     model: "Accord",
//     type: "sedan",
//     amount: 2,
//     price: 22455,
//     onSale: true,
//   },
//   {
//     id: 3,
//     make: "Mazda",
//     model: "Mazda 6",
//     type: "sedan",
//     amount: 8,
//     price: 24195,
//     onSale: false,
//   },
//   {
//     id: 4,
//     make: "Mazda",
//     model: "CX-9",
//     type: "suv",
//     amount: 7,
//     price: 31520,
//     onSale: true,
//   },
//   {
//     id: 5,
//     make: "Toyota",
//     model: "4Runner",
//     type: "suv",
//     amount: 19,
//     price: 34210,
//     onSale: false,
//   },
//   {
//     id: 6,
//     make: "Toyota",
//     model: "Sequoia",
//     type: "suv",
//     amount: 16,
//     price: 45560,
//     onSale: false,
//   },
//   {
//     id: 7,
//     make: "Toyota",
//     model: "Tacoma",
//     type: "truck",
//     amount: 4,
//     price: 24320,
//     onSale: true,
//   },
//   {
//     id: 8,
//     make: "Ford",
//     model: "F-150",
//     type: "truck",
//     amount: 11,
//     price: 27110,
//     onSale: true,
//   },
//   {
//     id: 9,
//     make: "Ford",
//     model: "Fusion",
//     type: "sedan",
//     amount: 13,
//     price: 22120,
//     onSale: true,
//   },
//   {
//     id: 10,
//     make: "Ford",
//     model: "Explorer",
//     type: "suv",
//     amount: 6,
//     price: 31660,
//     onSale: false,
//   },
// ];

// console.table(cars);

// Example 1 map

// const numbers = [5, 10, 15, 20, 25];
// console.log(numbers);

// const doubleNumber = numbers.map(namber => namber * 2);

// console.log(doubleNumber);

//--------------------------------------

// const getModels = cars => cars.map(car => car.model);

// const getModels = cars => cars.map(({ model }) => model);

// const getModels = function (cars) {
//   const models = cars.map(car => car.model);
//   return models;
// };

// console.table(getModels(cars));

//-------------------------------------------------------------

// Task 2 map

// const makeCarsWithDiscount = (cars, discount) => {
//   return cars.map(car => {
//     const carCopy = { ...car };
//     const newPrice = carCopy.price - carCopy.price * discount;
//     carCopy.price = newPrice;
//     return carCopy;
//   });
// };

// const makeCarsWithDiscount = (cars, discount) => {
//   return cars.map(car => {
//     const { price } = car;
//     return {
//       ...car,
//       price: price - price * discount,
//     };
//   });
// };

// const makeCarsWithDiscount = (cars, discount) => {
//   return cars.map(({ price, ...car }) => ({
//     ...car,
//     price: price - price * discount,
//   }));
// };

// console.table(makeCarsWithDiscount(cars, 0.2));
// console.table(makeCarsWithDiscount(cars, 0.4));

//-----------------------------------------------------------
// Задача на callback

// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// function fff(pizzaName) {
//   return `fhfv dlhf ${pizzaName} fojvnfdjv`;
// }

// console.log(makeMessage("Royal Grand", makePizza));
// console.log(makeMessage("Ultracheese", deliverPizza));
// console.log(makeMessage("VJVGVH", fff));

//----------------------------------------------------------

// function registerGuest(name, callback) {
//   console.log(`Регистрируем гостя ${name}.`);
//   callback(name);
// }

// // Передаём инлайн функцию greet как колбэк
// registerGuest("Mango", function greet(name) {
//   console.log(`Добро пожаловать ${name}.`);
// });

// // Передаём инлайн функцию notify как колбэк
// registerGuest("Poly", function notify(name) {
//   console.log(`Уважаемый(ая) ${name}, ваш номер будет готов через 30 минут.`);
// });

//------------------------------------------------------------------

// function processCall(recipient) {
//   // Имитируем доступность абонента случайным числом
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     console.log(`Абонент ${recipient} недоступен, оставьте сообщение.`);
//     // Логика активации автоответчика
//   } else {
//     console.log(`Соединяем с ${recipient}, ожидайте...`);
//     // Логика принятия звонка
//   }
// }

// processCall("Mango");
// processCall("Polly");

//-----------------------------------------------------------------

// const numbers = [5, 10, 15, 20, 25];

// // Объявление функции
// numbers.forEach(function (number, index) {
//   console.log(`Индекс ${index}, значение ${number}`);
// });

// // Анонимная стрелочная функция
// numbers.forEach((number, index) => {
//   console.log(`Индекс ${index}, значение ${number}`);
// });

//================================================================

// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line

//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   if (numbers[i] > value) {
//   //     filteredNumbers.push(numbers[i]);
//   //   }
//   // }

//   numbers.forEach(number => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // Change code above this line
//   return filteredNumbers;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 20));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
//--------------------------------------------------------------

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line

//   // for (let i = 0; i < orderedItems.length; i += 1) {
//   //   totalPrice += orderedItems[i];
//   // }

//   orderedItems.forEach(item => {
//     totalPrice += item;
//   });

//   // Change code above this line
//   return totalPrice;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

//----------------------------------------------------------------

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line

//   // for (let i = 0; i < firstArray.length; i += 1) {
//   //   if (secondArray.includes(firstArray[i])) {
//   //     commonElements.push(firstArray[i]);
//   //   }
//   // }

//   firstArray.forEach(item => {
//     if (secondArray.includes(item)) {
//       commonElements.push(item);
//     }
//   });

//   return commonElements;
//   // Change code above this line
// }

// console.log(getCommonElements([1, 2, 3], [2, 4])); // [ 2 ]
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); // [ 12, 27, 3 ]
// console.log(([10, 20, 30, 40], [4, 30, 17, 10, 40])); // [ 4, 30, 17, 10, 40 ]
//---------------------------------------------------------------

// Change code below this line
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   orderedItems.forEach(item => (totalPrice += item));

//   return totalPrice;
// }
// // Change code above this line

// console.log(calculateTotalPrice([12, 85, 37, 4]));
//-----------------------------------------------------------------

// функция с побочными эффектами

// const dirtyMultiply = (array, value) => {
//   for (let i = 0; i < array.length; i += 1) {
//     array[i] = array[i] * value;
//   }
// };

// const numbers = [1, 2, 3, 4, 5];
// dirtyMultiply(numbers, 2);
// // Произошла мутация исходных данных - массива numbers
// console.log(numbers); // [2, 4, 6, 8, 10]
//-----------------------------------------------------

// чистая функция

// const pureMultiply = (array, value) => {
//   const newArray = [];

//   array.forEach(element => {
//     newArray.push(element * value);
//   });

//   return newArray;
// };

// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = pureMultiply(numbers, 2);

// // Не произошло мутации исходных данных
// console.log(numbers); // [1, 2, 3, 4, 5]
// // Функция вернула новый массив с изменёнными данными
// console.log(doubledNumbers); // [2, 4, 6, 8, 10]

//-----------------------------------------------------------------

// function changeEven(numbers, value) {
//   const newArray = [];

//   numbers.forEach(number => {
//     if (number % 2 === 0) {
//       newArray.push(number + value);
//     } else newArray.push(number);
//   });

//   return newArray;
// }

// console.log(changeEven([1, 2, 3, 4, 5], 10));

//--------------------------------------------------------------

// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
//   { name: "Houston", score: 64 },
// ];

// const names = students.map(student => student.name);
// console.log(names); // ["Mango", "Poly", "Ajax", "Kiwi", "Houston"]

//---------------------------------------------------------------

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line

// const evenNumbers = numbers.filter(number => number % 2 === 0);
// const oddNumbers = numbers.filter(number => number % 2 !== 0);

// console.log(evenNumbers); // [24, 82, 36, 18, 52]
// console.log(oddNumbers); // [17, 61, 47, 73]

//===============================================================

//--------------------------------------------------------------

// const filterByPrice = (cars, threshold) => {
//   const filteredCars = cars.filter(car => car.price < threshold);
//   return filteredCars;
// };

// const filterByPrice = (cars, threshold) =>
//   cars.filter(car => car.price < threshold);

// console.table(filterByPrice(cars, 40000));
// console.table(filterByPrice(cars, 25000));

//---------------------------------------------------------------
// const getCarsWithDiscount = cars => cars.filter(car => car.onSale);

// console.table(getCarsWithDiscount(cars));
//--------------------------------------------------------------
// const getCarsWithType = (cars, type) => cars.filter(car => car.type === type);

// console.table(getCarsWithType(cars, "suv"));
// console.table(getCarsWithType(cars, "sedan"));
//--------------------------------------------------------------

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// // Change code below this line
// const allGenres = books.flatMap(book => book.genres);

// const uniqueGenres = allGenres.filter(
//   (genre, index, array) => array.indexOf(genre) === index
// );

// console.log(allGenres);
// console.log(uniqueGenres);
//================================================================
// 4-21 теория к заданию

// const LOW_SCORE = 50;
// const HIGH_SCORE = 80;
// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
//   { name: "Houston", score: 64 },
// ];

// const best = students.filter(student => student.score >= HIGH_SCORE);
// console.log(best); // Массив объектов с именами Mango и Kiwi

// const worst = students.filter(student => student.score < LOW_SCORE);
// console.log(worst); // Массив с одним объектом Ajax

// // В коллбек-функции удобно деструктуризировать свойства объекта
// const average = students.filter(
//   ({ score }) => score >= LOW_SCORE && score < HIGH_SCORE
// );
// console.log(average); // Массив объектов с именами Poly и Houston
//---------------------------------------------------------------
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     rating: 7.94,
//   },
//   {
//     title: "Enemy of God",
//     author: "Bernard Cornwell",
//     rating: 8.67,
//   },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";
// // Change code below this line

// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);

// const booksByAuthor = books.filter(book => book.author === AUTHOR);

// console.log(topRatedBooks);
// console.log(booksByAuthor);

//================================================================

//================================================================
// const students = [
//   { name: "Mango", courses: ["mathematics", "physics"] },
//   { name: "Poly", courses: ["science", "mathematics"] },
//   { name: "Kiwi", courses: ["physics", "biology"] },
// ];

// const allCourses = students.flatMap(student => student.courses);

// console.log(allCourses); // ["mathematics", "physics", "science", "mathematics", "physics", "biology"]

// const uniqueCourses = allCourses.filter(
//   (course, index, array) => array.indexOf(course) === index
// );

// console.log(uniqueCourses); // ['mathematics', 'physics', 'science', 'biology']
//================================================================

// const getCarByModel = (cars, model) => cars.find(car => car.model === model);

// console.log(getCarByModel(cars, "F-150"));
// console.log(getCarByModel(cars, "CX-9"));
//================================================================

// const sortByAscendingAmount = cars => {
//   return [...cars].sort((prevCar, nextCar) => prevCar.amount - nextCar.amount);
// };

// console.table(sortByAscendingAmount(cars));

//--------------------------------------------------------------

// const sortByDescendingPrice = cars => {
//   return [...cars].sort((prevCar, nextCar) => nextCar.price - prevCar.price);
// };

// console.table(sortByDescendingPrice(cars));
//---------------------------------------------------------------

// const sortByModel = (cars, order) => {
//   const sortedCars = [...cars].sort((prev, next) => {
//     if (order === "asc") {
//       return prev.model.localeCompare(next.model);
//     }
//     return next.model.localeCompare(prev.model);
//   });
//   return sortedCars;
// };

// const sortByModel = (cars, order) => {
//   const sortedCars = [...cars].sort((prev, next) => {
//     return order === "asc"
//       ? prev.model.localeCompare(next.model)
//       : next.model.localeCompare(prev.model);
//   });
//   return sortedCars;
// };

// const sortByModel = (cars, order) =>
//   [...cars].sort((prev, next) => {
//     return order === "asc"
//       ? prev.model.localeCompare(next.model)
//       : next.model.localeCompare(prev.model);
//   });

// console.table(sortByModel(cars, "asc"));
// console.table(sortByModel(cars, "desc"));

//--------------------------------------------------------------

// const students = ["Вика", "Андрей", "Олег", "Юля", "Борис", "Катя"];
// students.sort();
// console.log(students); // [ 'Андрей', 'Борис', 'Вика', 'Катя', 'Олег', 'Юля' ]

// const scores = [61, 19, 74, 35, 92, 56];
// const ascendingScores = [...scores].sort();

// console.log(scores); // [61, 19, 74, 35, 92, 56]
// console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]

// const students = ["Вика", "Андрей", "Олег", "Юля", "Борис", "Катя"];

// const inAlphabetOrder = [...students].sort((a, b) => a.localeCompare(b));
// console.log(inAlphabetOrder); // ['Андрей', 'Борис', 'Вика', 'Катя', 'Олег', 'Юля']

// const inReversedOrder = [...students].sort((a, b) => b.localeCompare(a));
// console.log(inReversedOrder); // ['Юля', 'Олег', 'Катя', 'Вика', 'Борис', 'Андрей']
//=============================================================

// const getTotalAmount = cars => {
//   const totalAmount = cars.reduce((acc, car) => {
//     return acc + car.amount
//   }, 0)

//   return totalAmount
// }

// const getTotalAmount = cars => cars.reduce((acc, car) => acc + car.amount, 0);

// console.log(getTotalAmount(cars));

//--------------------------------------------------------

const cars = [
  {
    id: 1,
    make: "Toyota",
    model: "4Runner",
    type: "suv",
    amount: 19,
    price: 34210,
    onSale: false,
  },
  {
    id: 2,
    make: "Toyota",
    model: "Sequoia",
    type: "suv",
    amount: 16,
    price: 45560,
    onSale: false,
  },
  {
    id: 3,
    make: "Toyota",
    model: "Tacoma",
    type: "truck",
    amount: 4,
    price: 24320,
    onSale: true,
  },
  {
    id: 4,
    make: "Ford",
    model: "F-150",
    type: "truck",
    amount: 11,
    price: 27110,
    onSale: true,
  },
  {
    id: 5,
    make: "Ford",
    model: "Fusion",
    type: "sedan",
    amount: 13,
    price: 22120,
    onSale: true,
  },
];

// переделываем массив объектов в объект объектов

// const carsObj = {
//   1: {
//     id: 1,
//     make: "Toyota",
//     model: "4Runner",
//     type: "suv",
//     amount: 19,
//     price: 34210,
//     onSale: false,
//   },
//   2: {
//     id: 2,
//     make: "Toyota",
//     model: "Sequoia",
//     type: "suv",
//     amount: 16,
//     price: 45560,
//     onSale: false,
//   },
// };

// вар 1

// const carsObj = {};

// for (let car of cars) {
//   carsObj[car.id] = car;
// }

// console.log(carsObj);

// вар 2

// const carsObj = cars.reduce((acc, car) => {
//   acc[car.id] = car;
//   return acc;
// }, {});

// console.log(carsObj);
//---------------------------------------------------------------

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     rating: 7.94,
//   },
// ];
// const BOOK_TITLE = "The Dream of a Ridiculous Man";
// const AUTHOR = "Robert Sheckley";
// // Change code below this line

// const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
// const bookByAuthor = books.find(book => book.author === AUTHOR);

// console.log(bookWithTitle);
// console.log(bookByAuthor);
//===============================================================

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change code below this line

// const eachElementInFirstIsEven = firstArray.every(value => value % 2 === 0);
// console.log(eachElementInFirstIsEven);

// const eachElementInFirstIsOdd = firstArray.every(value => value % 2 !== 0);
// console.log(eachElementInFirstIsOdd);

// const eachElementInSecondIsEven = secondArray.every(value => value % 2 === 0);
// const eachElementInSecondIsOdd = secondArray.every(value => value % 2 !== 0);

// const eachElementInThirdIsEven = thirdArray.every(value => value % 2 === 0);
// const eachElementInThirdIsOdd = thirdArray.every(value => value % 2 !== 0);
//===================================================================
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
// ];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort();

// const alphabeticalAuthors = [...authors].sort();

// console.log(releaseDates);
// console.log(alphabeticalAuthors);

// console.log(releaseDates === ascendingReleaseDates);
//================================================================

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort();
// console.log(ascendingReleaseDates);

// const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);
// console.log(descendingReleaseDates);
//================================================================

// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
//   "Howard Lovecraft",
// ];
// // Change code below this line

// const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));
// console.log(authorsInAlphabetOrder);

// const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));
// // console.log(authorsInReversedOrder);
//===============================================================
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     rating: 7.94,
//   },
//   {
//     title: "Enemy of God",
//     author: "Bernard Cornwell",
//     rating: 8.67,
//   },
// ];
// // Change code below this line

// const sortedByAuthorName = [...books].sort((a, b) =>
//   a.author.localeCompare(b.author)
// );
// console.log(sortedByAuthorName);

// const sortedByReversedAuthorName = [...books].sort((a, b) =>
//   b.author.localeCompare(a.author)
// );
// console.log(sortedByReversedAuthorName);

// const sortedByAscendingRating = [...books].sort((a, b) => a.rating - b.rating);
// console.log(sortedByAscendingRating);

// const sortedByDescentingRating = [...books].sort((a, b) => b.rating - a.rating);
// console.log(sortedByDescentingRating);

//=================================================================

const students = [
  { name: "Mango", score: 83, courses: ["mathematics", "physics"] },
  { name: "Poly", score: 59, courses: ["science", "mathematics"] },
  { name: "Ajax", score: 37, courses: ["physics", "biology"] },
  { name: "Kiwi", score: 94, courses: ["literature", "science"] },
];

// const sortedByAscendingScore = [...students].sort((a, b) => a.score - b.score);
// const names = sortedByAscendingScore.map(student => student.name);

// console.log(names); // ["Ajax", "Poly", "Mango", "Kiwi"]

// const names = [...students]
//   .sort((a, b) => a.score - b.score)
//   .map(student => student.name);
// // console.log(names);

// const uniqueSortedCourses = students
//   .flatMap(student => student.courses)
//   .filter((course, index, array) => array.indexOf(course) === index)
//   .sort((a, b) => a.localeCompare(b));

// console.log(uniqueSortedCourses);
//==================================================================
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = [...books]
//   .filter(book => book.rating > MIN_BOOK_RATING)
//   .map(book => book.author)
//   .sort((a, b) => a.localeCompare(b));

// console.log(names);
//=================================================================
