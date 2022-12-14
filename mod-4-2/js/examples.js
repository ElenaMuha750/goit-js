"use strict";

// const cars = [
//   { make: "Honda", model: "CR-V", type: "suv", amount: 14, price: 24045, onSale: true },
//   { make: "Honda", model: "Accord", type: "sedan", amount: 2, price: 22455, onSale: true },
//   { make: "Mazda", model: "Mazda 6", type: "sedan", amount: 8, price: 24195, onSale: false },
//   { make: "Mazda", model: "CX-9", type: "suv", amount: 7, price: 31520, onSale: true },
//   { make: "Toyota", model: "4Runner", type: "suv", amount: 19, price: 34210, onSale: false },
//   { make: "Toyota", model: "Sequoia", type: "suv", amount: 16, price: 45560, onSale: false },
//   { make: "Toyota", model: "Tacoma", type: "truck", amount: 4, price: 24320, onSale: true },
//   { make: "Ford", model: "F-150", type: "truck", amount: 11, price: 27110, onSale: true },
//   { make: "Ford", model: "Fusion", type: "sedan", amount: 13, price: 22120, onSale: true },
//   { make: "Ford", model: "Explorer", type: "suv", amount: 6, price: 31660, onSale: false },
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

const makeCarsWithDiscount = (cars, discount) => {
  return cars.map(({ price, ...car }) => ({
    ...car,
    price: price - price * discount,
  }));
};

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

const cars = [
  { id: 1, make: "Honda", model: "CR-V", type: "suv", amount: 14, price: 24045, onSale: true },
  { id: 2, make: "Honda", model: "Accord", type: "sedan", amount: 2, price: 22455, onSale: true },
  { id: 3, make: "Mazda", model: "Mazda 6", type: "sedan", amount: 8, price: 24195, onSale: false },
  { id: 4, make: "Mazda", model: "CX-9", type: "suv", amount: 7, price: 31520, onSale: true },
  { id: 5, make: "Toyota", model: "4Runner", type: "suv", amount: 19, price: 34210, onSale: false },
  { id: 6, make: "Toyota", model: "Sequoia", type: "suv", amount: 16, price: 45560, onSale: false },
  { id: 7, make: "Toyota", model: "Tacoma", type: "truck", amount: 4, price: 24320, onSale: true },
  { id: 8, make: "Ford", model: "F-150", type: "truck", amount: 11, price: 27110, onSale: true },
  { id: 9, make: "Ford", model: "Fusion", type: "sedan", amount: 13, price: 22120, onSale: true },
  { id: 10, make: "Ford", model: "Explorer", type: "suv", amount: 6, price: 31660, onSale: false },
];

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
