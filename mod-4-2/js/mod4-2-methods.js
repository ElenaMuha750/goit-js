"use strict";

const cars = [
  {
    make: "Honda",
    model: "CR-V",
    type: "suv",
    amount: 14,
    price: 24045,
    onSale: true,
  },
  {
    make: "Honda",
    model: "Accord",
    type: "sedan",
    amount: 2,
    price: 22455,
    onSale: true,
  },
  {
    make: "Mazda",
    model: "Mazda 6",
    type: "sedan",
    amount: 8,
    price: 24195,
    onSale: false,
  },
  {
    make: "Mazda",
    model: "CX-9",
    type: "suv",
    amount: 7,
    price: 31520,
    onSale: true,
  },
  {
    make: "Toyota",
    model: "4Runner",
    type: "suv",
    amount: 19,
    price: 34210,
    onSale: false,
  },
  {
    make: "Toyota",
    model: "Sequoia",
    type: "suv",
    amount: 16,
    price: 45560,
    onSale: false,
  },
  {
    make: "Toyota",
    model: "Tacoma",
    type: "truck",
    amount: 4,
    price: 24320,
    onSale: true,
  },
  {
    make: "Ford",
    model: "F-150",
    type: "truck",
    amount: 11,
    price: 27110,
    onSale: true,
  },
  {
    make: "Ford",
    model: "Fusion",
    type: "sedan",
    amount: 13,
    price: 22120,
    onSale: true,
  },
  {
    make: "Ford",
    model: "Explorer",
    type: "suv",
    amount: 6,
    price: 31660,
    onSale: false,
  },
];

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
