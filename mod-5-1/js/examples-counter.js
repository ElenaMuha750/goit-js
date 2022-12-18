// const counter = {
//   value: 0,
//   increment() {
//     console.log("increment -> this", this);
//     this.value += 1;
//   },
//   decrement() {
//     console.log("decrement -> this", this);
//     this.value -= 1;
//   },
// };

// // console.log(document);

// const decrementBtn = document.querySelector(".js-decrement");
// const incrementBtn = document.querySelector(".js-increment");
// const valueEl = document.querySelector(".js-value");

// // console.log(decrementBtn);
// // console.log(incrementBtn);
// // console.log(valueEl);

// decrementBtn.addEventListener("click", function () {
//   console.log("Кликнули на декримент");

//   counter.decrement();
//   console.log(counter);
//   valueEl.textContent = counter.value;
// });

// incrementBtn.addEventListener("click", function () {
//   console.log("Кликнули на инкремент");

//   counter.increment();
//   console.log(counter);
//   valueEl.textContent = counter.value;
// });

// console.log(window);

//-------------------------------------------------

// TODO Example #1
// Создать объект, который описывает ширину и высоту
// прямоугольника, а также может посчитать площадь фигуры:
// const rectangle = {width:..., height:..., getSquare:...};

// const rectangle = {
//   width: 10,
//   height: 10,
//   getSquare() {
//     return this.width * this.height;
//   },
// };

// console.log(rectangle.getSquare());

//---------------------------------------------------

/**
 * TODO Example #2
 * Создать объект, у которого будет цена товара и его скидка, а также
 * два метода: для получения цены и для расчета цены с учетом скидки:
 */

// const product = {
//   price: 100,
//   discount: '35%',
//   getPrice() {
//     return this.price;
//   },
//   getPriceWithDiscount() {
//     const discount = parseFloat(this.discount);
//     // const price = this.price - this.price * (discount / 100);
//     const price = this.price - (this.price / 100) * discount;
//     return price;
//   },
// };

// console.log(product.getPrice());
// console.log(product.getPriceWithDiscount());

//------------------------------------------------------------

/**
 * TODO Example #3
 * Создать объект “вычислитель”, у которого есть числовое свойство “значение” и методы “удвоить”, “прибавить один”, “отнять один”.
 * Методы можно вызывать через точку, образуя цепочку методов:
 */

// const calc = {
//   value: 1,
//   getValue() {
//     return this.value;
//   },
//   reset() {
//     this.value = 0;
//     return this;
//   },
//   setValue(num = 0) {
//     this.value = num;
//     return this;
//   },
//   plus(num) {
//     this.value += num;
//     return this;
//   },
//   minus(num) {
//     this.value -= num;
//     return this;
//   },
//   multiply(num) {
//     this.value *= num;
//     return this;
//   },
//   divide(num) {
//     if (this.value === 0) return 0;
//     this.value /= num;
//     return this;
//   },
// };

// console.log(calc.getValue());
// calc.reset();
// calc.setValue(10);
// calc.plus(20);
// calc.minus(5);
// calc.multiply(2);
// calc.divide(10);

// const res = calc
//   .reset()
//   .setValue(10)
//   .plus(20)
//   .minus(5)
//   .multiply(2)
//   .divide(10)
//   .getValue();
// console.log('value:', res);

//------------------------------------------------------------

// TODO Example #4
// Даны объект и функция

// Не изменяя функцию или объект,
// получить результат функции getSquare для объекта sizes

// let sizes = { width: 5, height: 10 };
// function getSquare() {
//   return this.width * this.height;
// }
// function setWidthAndHeight(width, height) {
//   this.width = width;
//   this.height = height;
// }

// const square = getSquare.call(sizes);
// setWidthAndHeight.call(sizes, 20, 40);
// setWidthAndHeight.apply(sizes, [30, 50]);
// console.log(sizes);

//------------------------------------------------------------

/**
 * TODO Example #5
 * Измените функцию getElementHeight таким образом,
 * чтобы можно было вызвать getElementHeight() и получить 25.
 */

// let element = {
//   name: 'element',
//   height: 25,
//   getHeight() {
//     console.log(this);
//     return this.height;
//   },
//   setHeight(num) {
//     this.height = num;
//   },
// };

// let getElementHeight = element.getHeight.bind(element);
// let setElementHeight = element.setHeight.bind(element, 5);
// setElementHeight();
// console.log(getElementHeight());

//-----------------------------------------------------------

// const customer = {
//   firstName: 'Jacob',
//   lastName: 'Mercer',
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// console.log(customer.getFullName());

// function makeMessage(callback) {
//   // callback() это вызов метода getFullName без объекта
//   console.log(`Обрабатываем заявку от ${callback()}.`);
// }

// // makeMessage(customer.getFullName.bind(customer));

// // или стрелка. тогда контекст сохранится

// makeMessage(() => customer.getFullName());

//--------------------------------------------------------------

const fruits = ['Apple', 'Apple', 'Orange'];

let fn = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});

// let fn = fruits.reduce(
//   (acc, fruit) => ({ ...acc, [fruit]: (acc[fruit] || 0) + 1 }),
//   {}
// );

console.log(fn);

//--------------------------------------

// const example = {
//     name: "Example",
//     foo: () => {
//         console.log(this)
//     }
// }

// example.foo()
