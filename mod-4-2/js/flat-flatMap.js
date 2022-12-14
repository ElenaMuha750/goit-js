//                             FLAT

// Array.prototype.flat(derth)
// - Разглаживает массив до указанной глубины
// - По умолчанию глубина 1
// НЕ изменяет оригинал (НЕ деструктивный метод)
// Возвращает новый массив

// const array = [1, 2, [4, [5]], [6, [7, 8, [9]]]];
// console.log(array.flat());
// console.log(array.flat(2));
// console.log(array.flat(3));
// console.log(array);

//----------------------------------------------------------------

//                   flatMap

// Array.prototype.flat(callback)
// - Комбинация map + flat

const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

// const allTags = tweets.reduce((acc, tweet) => [...acc, ...tweet.tags], []);
// console.log(allTags);

// const tags = tweets.map(tweet => tweet.tags).flat();
// const tags = tweets.flatMap(tweet => tweet.tags);
// console.log(tags); // ['js', 'nodejs', 'html', 'css', 'html', 'js', 'nodejs', 'css', 'react', 'js', 'nodejs', 'react']

// const stats = tags.reduce((acc, tag) => {
//   return {
//     ...acc,
//     [tag]: acc[tag] ? acc[tag] + 1 : 1,
//   };
// }, {});

const stats = tweets
  .flatMap(tweet => tweet.tags)
  .reduce(
    (acc, tag) => ({
      ...acc,
      [tag]: acc[tag] ? acc[tag] + 1 : 1,
    }),
    {}
  );

// console.log(stats);
