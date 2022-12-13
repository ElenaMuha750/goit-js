"use strict";

// cart.add({ name: "🎃", price: 50 });
// cart.add({ name: "🍋", price: 60 });
// cart.add({ name: "🍓", price: 70 });
// cart.add({ name: "🐷", price: 80 });
// cart.add({ name: "👕", price: 90 });
// cart.add({ name: "👀", price: 90 });

// const cart = {
//   items: [],
//   getItems() {
//     return this.items;
//   },

//   add(product) {
//     for (const item of this.items) {
//       if (item.name === product.name) {
//         // console.log("Такой продукт уже есть:", product.name);
//         // console.log(item);

//         item.quantity += 1;
//         return;
//       }
//     }

//     const newProduct = {
//       ...product,
//       quantity: 1,
//     };

//     this.items.push(newProduct);
//   },

//   remove(productName) {
//     const { items } = this;

//     for (let i = 0; i < items.length; i += 1) {
//       // const item = this.items[i];
//       const { name } = items[i];

//       if (productName === name) {
//         console.log("Нашли такой продукт", productName);
//         console.log("индекс:", i);

//         items.splice(i, 1);
//       }
//     }
//   },

//   clear() {
//     this.items = [];
//   },

//   countTotalPrice() {
//     const { items } = this;

//     let total = 0;

//     for (const { price, quantity } of items) {
//       total += price * quantity;
//     }

//     return total;
//   },

//   increaseQuantity(productName) {},
//   decreaseQuantity(productName) {},
// };

// console.log(cart.getItems());

// cart.add({ name: "🎃", price: 50 });
// cart.add({ name: "🍋", price: 60 });
// cart.add({ name: "🍋", price: 60 });
// cart.add({ name: "🐷", price: 80 });
// cart.add({ name: "🍓", price: 70 });
// cart.add({ name: "🍓", price: 70 });
// cart.add({ name: "🍓", price: 70 });

// console.table(cart.getItems());

// console.log("Total:", cart.countTotalPrice());

// cart.remove("🎃");
// console.table(cart.getItems());
// console.log("Total:", cart.countTotalPrice());

// cart.clear();
// console.log(cart.getItems());
// console.log("Total:", cart.countTotalPrice());

// ------------------------------------------------

/**
 * Example 1 - Основы обьектов
 * Напиши скрипт, который, для объекта user, последовательно:
 * добавляет поле mood со значением 'happy'
 * заменяет значение hobby на 'skydiving'
 * заменяет значение premium на false
 * выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of
 */

// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true,
//   // arr: [123, 123],
// };

// // user.mood = "happy";
// user["mood"] = "happy";
// user.hobby = "skydiving";
// user.premium = false;

// const keys = Object.keys(user);
// console.log(keys);

// for (let key of keys) {
//   // console.log(key);
//   console.log(`${key}: ${user[key]}`);
// }

// console.log(user);

// ------------------------------------------------------------

/**
 * Example 2 - метод Object.values()
 * У нас есть объект, в котором хранятся зарплаты нашей команды.
 * Напишите код для суммирования всех зарплат и сохраните результат в переменной sum.
 * Должно получиться 390. Если объект salaries пуст, то результат должен быть 0.
 */

// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// const values = Object.values(salaries);
// console.log(values);

// let sum = 0;

// for (let value of values) {
//   console.log(value);

//   sum += value;
// }

// console.log("Total:", sum);

// -----------------------------------------------------------

/**
 * Example 3 - Массив объектов
 * Напишите ф-цию calcTotalPrice(stones, stoneName),
 * которая принимает массив обьектов и строку с названием камня.
 * Ф-ция считает и возвращает общую стоимость камней с таким именем, ценой и количеством из обьекта
 */

const stones = [
  { name: "Изумруд", price: 1300, quantity: 4 },
  { name: "Бриллиант", price: 2700, quantity: 3 },
  { name: "Сапфир", price: 400, quantity: 7 },
  { name: "Щебень", price: 200, quantity: 2 },
];

// console.log(stones);

const calcTotalPrice = function (stones, stoneName) {
  let sum = 0;

  for (let stone of stones) {
    if (stone.name === stoneName) {
      console.log("stone", stone);
      sum = stone.price * stone.quantity;
      break;
    }
  }

  return sum ? sum : "Указанного камня не существует";
};

// console.log(calcTotalPrice(stones, "Изумруд"));
// console.log(calcTotalPrice(stones, "Бриллиант"));
// console.log(calcTotalPrice(stones, "Сапфир"));
// console.log(calcTotalPrice(stones, "Щебень"));
// console.log(calcTotalPrice(stones, "Янтарь"));

// -------------------------------------------------------------

/**
 * Example 4
 * Реализуйте функцию `compare(firstNumber, secondNumber, operation, result)`, которая
 * - производит операцию `operation` над числами `firstNumber` и `secondNumber`
 * полученное число сравнивает с переменной `result`
 * возвращает результат этого сравнения.
 *
 * compare("1", "2", "+", "3"); // true
 *
 * Ограничения на входные данные
 * `firstNumber`, `secondNumber`, `result` - могут быть как типа Number так и String.
 * Переменные типа String при преобразовании к числовому формату всегда будут валидным числом.
 * `operation` - строка c одной из 4 математических операций: +,-,*,/
 */

function compare(firstNumber, secondNumber, operation, result) {
  const num1 = Number(firstNumber);
  const num2 = Number(secondNumber);
  const res = Number(result);

  if (isNaN(num1) || isNaN(num2) || isNaN(res)) return "Invalid params";

  const operationDic = {
    "+": function sum(a, b) {
      return a + b;
    },
    "-": function minus(a, b) {
      return a - b;
    },
    "*": function multi(a, b) {
      return a * b;
    },
    "/": function divide(a, b) {
      return a / b;
    },
  };

  if (!operationDic[operation]) {
    return "Invalid operation";
  }

  const operationResult = operationDic[operation](num1, num2);

  return operationResult === res;

  // return operationResult === res;

  // console.log("operation", operation);
  // console.log("operationDic[operation]", operationDic[operation]);
  // console.log(operationDic[operation](num1, num2));

  // switch (operation) {
  //   case "+":
  //     return num1 + num2 === res;
  //   case "-":
  //     return num1 - num2 === res;
  //   case "*":
  //     return num1 * num2 === res;
  //   case "/":
  //     return num1 / num2 === res;
  //   default:
  //     return false;
  // }
}

// console.log(compare("1", "2", "+", "3")); // true
// console.log(compare("2", "2", "*", "3")); // false
// console.log(compare("4", "2", "-", "3")); // false
// console.log(compare("8", "2", "/", "4")); // true

// ---------------------------------------------------------

// ----------------------------------------------------------

const friends = [
  { name: "Mango", online: false },
  { name: "Kiwi", online: true },
  { name: "Poly", online: true },
  { name: "Ajax", online: false },
];

// console.table(friends);

// 1 Ищем друга по имени

// const findFriendByName = function (allFriends, friendName) {
//   for (const friend of allFriends) {
//     // console.log(friend);
//     // console.log(friend.name);

//     if (friend.name === friendName) {
//       return "НАШЛИ!!";
//     }
//   }

//   return "НЕ НАШЛИ :(";
// };

// console.log(findFriendByName(friends, "Poly"));
// console.log(findFriendByName(friends, "Muha"));

// 2 Получаем имена всех друзей

// const getAllNames = function (allFriends) {
//   const names = [];

//   for (const friend of allFriends) {
//     // console.log(friend.name);
//     names.push(friend.name);
//   }

//   return names;
// };

// console.log(getAllNames(friends));

// 3 Получаем имена друзей, которые ОНЛАЙН

const getOnlineFriends = function (allFriends) {
  const onlineFriends = [];

  for (const friend of allFriends) {
    console.log(friend);
    console.log(friend.online);

    if (friend.online) {
      onlineFriends.push(friend);
    }
  }

  return onlineFriends;
};
//
// console.log(getOnlineFriends(friends));

// 3 Получаем имена друзей, которые НЕ ОНЛАЙН

const getOfflineFriends = function (allFriends) {
  const offlineFriends = [];

  for (const friend of allFriends) {
    if (!friend.online) {
      offlineFriends.push(friend);
    }
  }

  return offlineFriends;
};

// console.log(getOfflineFriends(friends));

//4 Создать 2 массива ОНЛАЙН и ОФЛАЙН

const getFriendsByOnlineStatus = function (allFriends) {
  const friendsByStatus = {
    online: [],
    offline: [],
  };

  for (const friend of allFriends) {
    if (friend.online) {
      friendsByStatus.online.push(friend);
      continue;
    }

    friendsByStatus.offline.push(friend);
  }

  return friendsByStatus;
};

// console.log(getFriendsByOnlineStatus(friends));

// -----------------------------------------------------------

// Количество свойств в объекте

// const xooo = {
//   a: 1,
//   b: 2,
//   c: 50,
//   d: 100,
// };

// console.log(Object.keys(xooo).length);

// -----------------------------------------------------------

/**
 * Example 5 - Комплексные задачи
 * Напиши скрипт управления личным кабинетом интернет банка.
 * Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.
 */

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */

const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

// /*
//  * Каждая транзакция это объект со свойствами: id, type и amount
//  */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    return {
      id: this.transactions.length + 1,
      amount,
      type,
    };
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    const transaction = this.createTransaction(amount, Transaction.DEPOSIT);

    // console.log(transaction);
    this.transactions.push(transaction);
    this.balance += amount;
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    if (amount > this.balance) return "недостаточно средств";

    const transaction = this.createTransaction(amount, Transaction.WITHDRAW);

    this.transactions.push(transaction);
    this.balance -= amount;
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    let tr = null;

    for (let transaction of this.transactions) {
      if (transaction.id === id) {
        tr = { ...transaction };
        break;
      }
    }

    return tr;
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let sum = 0;

    for (let transaction of this.transactions) {
      if (transaction.type === type) {
        sum += transaction.amount;
      }
    }

    return sum;
  },
};

console.log(account);
account.deposit(300);
console.log(account.transactions);
account.withdraw(100);
account.deposit(400);
account.deposit(500);
account.deposit(100);
account.withdraw(100);
account.withdraw(300);
// account.withdraw(300);
console.log(account.balance);
console.log(account.getTransactionDetails(3));
console.log(account.getTransactionTotal(Transaction.DEPOSIT));
console.log(account.getTransactionTotal(Transaction.WITHDRAW));
