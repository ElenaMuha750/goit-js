/*
 * Классы
 * 🐷 - объявление
 * 🐷 - конструктор
 * 🐷 - методы
 * 🐷 - static
 * 🐷 - приватные свойства
 * 🐷 - синтаксис публичных свойства и методы классов
 * 🐷 - геттеры и сеттеры
 */

class Car1 {}

// console.dir(Car1);

// const carInstance = new Car1();

// console.log(carInstance);

// class Car {
//   static description = 'Класс описывающий автомобиль';

//   static logInfo(carObj) {
//     console.log('Car.logInfo -> carObj', carObj);
//   }

//   constructor({ brand, model, price } = {}) {
//     this.brand = brand;
//     this._model = model;
//     this._price = price;
//   }

//   get price() {
//     return this._price;
//   }

//   set price(newPrice) {
//     this._price = newPrice;
//   }

//   get model() {
//     return this._model;
//   }

//   set model(newModel) {
//     this._model = newModel;
//   }
// }

// const carInstance = new Car({
//   brand: 'Audi',
//   model: 'Q3',
//   price: 35000,
// });

// console.log(carInstance.model);
// carInstance.model = 'Q4';
// console.log(carInstance.model);

// console.log(carInstance.price);
// carInstance.price = 50000;
// console.log(carInstance.price);

// console.log(carInstance);

// =========================================================

// class Comment {
//   constructor(text) {
//     this.text = text;
//     this.votesQty = 0;
//   }

//   upvote() {
//     this.votesQty += 1;
//   }
// }

// const firstComment = new Comment('First comment');

// console.log(firstComment);
// console.log(firstComment.text);
// console.log(firstComment.votesQty);
// firstComment.upvote();
// console.log(firstComment.votesQty);
// // console.log(Comment.prototype);

// // Проверка принадлежности свойств экземпляру объекта

// console.log(firstComment.hasOwnProperty('text')); // true
// console.log(firstComment.hasOwnProperty('votesQty')); // true
// console.log(firstComment.hasOwnProperty('upvote')); // false
// console.log(firstComment.hasOwnProperty('hasOwnProperty')); // false

// // Создание нескольких экземпляров

// const secondComment = new Comment('Second comment');
// secondComment.upvote();
// console.log(secondComment.votesQty);
// console.log(secondComment);

// const thirdComment = new Comment('Third comment');
// thirdComment.upvote();
// thirdComment.upvote();
// console.log(thirdComment);
// ==========================================================

class Fruit {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }

  priceInfo() {
    return `Price of the ${this.title} is ${this.price}$`;
  }
}

const apple = new Fruit('Apple', 2);
console.log(apple.priceInfo()); // Price of the Apple is 2$
console.log(apple);

const orange = new Fruit('Orange', 3);
console.log(orange.priceInfo()); // Price of the Orange is 3$
console.log(orange);
