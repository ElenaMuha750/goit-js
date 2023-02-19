// 1. Що таке экземпляр классу
// 2. Що таке прототип
// 3. Як було раніше. В чому різниця віклику функції з оператором new та без нього
// 4. Вирішення завдань

//====================== before ES6 ============================

// function User(name) {
//     console.log(this) // {}
//     this.name = name
//     // return this
// }

// User.prototype.setName = function(newName) {
//     this.name = newName
// }

// const user = new User("Denis")

// function AdminUser(name) {
//     User.call(this, name)

//     this.isAdmin = true
// }

// const admin = new AdminUser("Denis")
// console.log(admin)

// =======================  ES6 + ===============================

// class User {
//     constructor(name) {
//         this.name = name
//     }

//     setName(newName) {
//         this.name = newName
//     }
// }

// const user = new User("Denis")

// class AdminUser extends User {
//     constructor(name) {
//         super(name)
//         this.isAdmin = true
//     }
// }

// const admin = new AdminUser("Denis")
// console.log(admin)

//==================================================================

//  Example 1
// class Blogger {
//   constructor(settings) {
//     const { email, age, numberOfPosts = 0, topics = [] } = settings;

//     this.email = email;
//     this.age = age;
//     this.numberOfPosts = numberOfPosts;
//     this.topics = topics;
//   }

//   getInfo() {
//     const { email, age, numberOfPosts } = this;
//     return `User ${email} is ${age} years old and has ${numberOfPosts} posts`;
//   }

//   updatePostCount(num) {
//     this.numberOfPosts = num;
//   }
// }

// const mango = new Blogger({
//   email: 'mango@mail.com',
//   age: 24,
//   numberOfPosts: 20,
//   topics: ['tech', 'cooking'],
// });

// console.log(mango)
// console.log(mango.getInfo())
// mango.updatePostCount(10)
// console.log(mango.getInfo())

//==================================================================

//  Example 2
// class User {
//   #email;
//   #login;

//   constructor({ login, email }) {
//     this.#email = email;
//     this.#login = login;
//     this.logs = [];
//   }

//   get login() {
//     return this.#login;
//   }

//   set login(login) {
//     this.#login = login;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(email) {
//     this.logs.push({ email, date: new Date() });
//     this.#email = email;
//   }

//   undo(step = 1) {}
// }

// const userMango = new User({
//   login: 'Mango',
//   email: 'mango@dog.woof',
// });

// console.log(userMango)
// userMango.email = "asdsa@dasd.com"
// userMango.email = "asdsa2@dasd.com"

//===============================================================

//  Example 3

// class Notes {
//   static Priority = {
//     LOW: 'low',
//     NORMAL: 'normal',
//     HIGH: 'high',
//   };

//   constructor(items) {
//     this.items = items;
//   }

//   addNote(payload) {
//     const note = {
//       id: this.#getItemId(),
//       priority: Notes.getDefaultPriority(),
//       ...payload,
//     };

//     this.items.push(note);
//   }

//   #getItemId() {
//     return this.items.length + 1;
//   }

//   static getDefaultPriority() {
//     return Notes.Priority.LOW;
//   }
// }

// const notes = new Notes([]);

// notes.addNote({ text: 'Моя первая заметка', priority: Notes.Priority.NORMAL });
// notes.addNote({ text: 'Моя первая заметка2', priority: Notes.Priority.LOW });
// console.log(notes);

//================================================================
// ## Example 1 - Блоггер

// Напиши класс `Blogger` для создания обьекта блоггера со следующим свойствами:

// - `email` - почта, строка
// - `age` - возраст, число
// - `numberOfPosts` - кол-во постов, число
// - `topics` - массив тем на которых специализируется блоггер

// Класс ожидает один параметр - объект настроек с одноимёнными свойствами.

// Добавь метод `getInfo()`, который, возвращает строку:
// `User ${почта} is ${возраст} years old and has ${кол-во постов} posts`.

// Добавь метод `updatePostCount(value)`, который в параметре `value` принимает количество постов которые нужно добавить пользователю.

// class Blogger {
//   constructor({ email, age, numberOfPosts = 0, topics = [] }) {
//     this.email = email;
//     this.age = age;
//     this.numberOfPosts = numberOfPosts;
//     this.topics = topics;
//   }

//   getInfo() {
//     const { email, age, numberOfPosts } = this;
//     return `User ${email} is ${age} years old and has ${numberOfPosts} posts`;
//   }

//   updatePostCount(num) {
//     this.numberOfPosts += num;
//   }
// }

// const mango = new Blogger({
//   email: 'mango@mail.com',
//   age: 24,
//   numberOfPosts: 20,
//   topics: ['tech', 'cooking'],
// });

// console.log(mango);
// console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 20 posts
// mango.updatePostCount(5);
// console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 25 posts

// const poly = new Blogger({
//   email: 'poly@mail.com',
//   age: 19,
//   numberOfPosts: 17,
//   topics: ['sports', 'gaming', 'health'],
// });

// console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 17 posts
// poly.updatePostCount(4);
// console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 21 posts

//================================================================
// ## Example 2 - Хранилище

// Напиши класс `Storage` который создаёт объекты для управления складом товаров.
// При вызове будет получать один аргумент - начальный массив товаров, и записывать
// его в свойство `items`.

// Добавь методы класса:

// - `getItems()` - возвращает массив товаров.
// - `addItem(item)` - получает новый товар и добавляет его к текущим.
// - `removeItem(item)` - получает товар и, если он есть, удаляет его из текущих.

// const storage = new Storage(['🍎', '🍋', '🍇', '🍑']);

// const items = storage.getItems();
// console.table(items); // [ '🍎', '🍋', '🍇', '🍑' ]

// storage.addItem('🍌');
// console.table(storage.items); // [ '🍎', '🍋', '🍇', '🍑', '🍌' ]

// storage.removeItem('🍋');
// console.table(storage.items); // [ '🍎', '🍇', '🍑', '🍌' ]

// class Storage {
//   constructor(items) {
//     this.items = items;
//   }

//   getItems() {
//     return this.items;
//   }

//   addItem(item) {
//     return this.items.push(item);
//   }

//   removeItem(itemToRemove) {
//     this.items = this.items.filter(item => item !== itemToRemove);
//   }

//   // вариант 2

//   // removeItem(item) {
//   //   let index = this.items.indexOf(item);
//   //   if (index > -1) {
//   //     return this.items.splice(index, 1);
//   //   }
//   // }
// }

// const storage = new Storage(['🍎', '🍋', '🍇', '🍑']);

// console.log(storage);

// const items = storage.getItems();
// console.table(items); // ['🍎', '🍋', '🍇', '🍑']

// storage.addItem('🍌');
// console.table(storage.items); // [ '🍎', '🍋', '🍇', '🍑', '🍌' ]

// storage.removeItem('🍋');
// console.table(storage.items); //  [ '🍎', '🍇', '🍑', '🍌' ]

//============================================================
// ## Example 3 - User

// Напиши класс `User` который создаёт объект со свойствами `login` и `email`.
// Объяви приватные свойства `#login` и `#email`, доступ к которым сделай через
// геттер и сеттер `login` и `email`.

// const mango = new User({
//   login: 'Mango',
//   email: 'mango@dog.woof',
// });

// console.log(mango.login); // Mango
// mango.login = 'Mangodoge';
// console.log(mango.login); // Mangodoge

// const poly = new User({
//   login: 'Poly',
//   email: 'poly@mail.com',
// });

// console.log(poly.login); // Poly
// poly.login = 'Polycutie';
// console.log(poly.login); // Polycutie

//-----------------------------------------

// class User {
//   #email;
//   #login;

//   constructor({ login, email }) {
//     this.#login = login;
//     this.#email = email;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(email) {
//     this.#email = email;
//   }

//   get login() {
//     return this.#login;
//   }

//   set login(login) {
//     this.#login = login;
//   }
// }

// const userMango = new User({
//   login: 'Mango',
//   email: 'mango@dog.woof',
// });

// console.log(userMango);

// console.log(userMango.login); // Mango
// userMango.login = 'Mangodoge';
// console.log(userMango.login); // Mangodoge

//============================================================

// ## Example 4 - Заметки

// Напиши класс `Notes` который управляет коллекцией заметок в свойстве `items`.
// Заметка это объект со свойствами `text` и `priority`. Добавь классу статическое
// свойство `Priority`, в котором будет храниться объект с приоритетами.

// {
//   LOW: 'low',
//   NORMAL: 'normal',
//   HIGH: 'high'
// }

// Добавь методы `addNote(note)`, `removeNote(text)` и
// `updatePriority(text, newPriority)`.

// const myNotes = new Notes([]);

// myNotes.addNote({ text: 'Моя первая заметка', priority: Notes.Priority.LOW });
// console.log(myNotes.items);

// myNotes.addNote({
//   text: 'Моя вторая заметка',
//   priority: Notes.Priority.NORMAL,
// });
// console.log(myNotes.items);

// myNotes.removeNote('Моя первая заметка');
// console.log(myNotes.items);

// myNotes.updateNote('Моя вторая заметка', Notes.Priority.HIGH);
// console.log(myNotes.items);
//-------------------------------------

// class Notes {
//   static Priority = {
//     LOW: 'low',
//     NORMAL: 'normal',
//     HIGH: 'high',
//   };

//   constructor(items) {
//     this.items = items;
//   }

//   addNote(payLoad) {
//     const note = {
//       id: this.items.length + 1,
//       ...payLoad,
//     };

//     this.items.push(note);
//   }
// }

// const notes = new Notes([]);

// notes.addNote({
//   text: 'Моя первая заметка',
//   priority: Notes.Priority.LOW,
// });
// console.log(notes.items);

// console.log(notes);
//=====================================================

// const weight = 80;
// const c = 300000000;
const c = 300000000;
const energy = weight => weight * c ** 2;

console.log(energy(80));
