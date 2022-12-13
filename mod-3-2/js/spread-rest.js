// Операция spread (распыление)-----------------------------

// const numbers = [1, 2, 3].concat([4, 5, 6], [7, 8, 9]);

const numbers = [...[1, 2, 3], ...[4, 5, 6], ...[7, 8, 9]];

// const numbers = [0, 5, 10, ...[1, 2, 3, 100, 500], 40, 50];

// console.log(numbers);

const temps = [12, 18, 31, 2, 5, 24, 17];

// console.log(Math.max(...temps));
// console.log(Math.min(...temps));

const lastWeekTemps = [1, 2, 3];
const currentTemps = [4, 5, 6];
const nextWeekTemps = [7, 8, 9];

const allTemps = [...lastWeekTemps, ...currentTemps, ...nextWeekTemps];

// console.log(allTemps);

// Распыление объектов------------------------------------

// const a = { x: 1, y: 2 };
// const b = { x: 0, z: 3 };

// старая запись
// const c = Object.assign({}, a, b);

// const c = {
//   ...a,
//   x: 7,
//   ...b,
//   y: 10,
//   z: 50,
// };

// console.log(c);

// {
//   x: 0
//   y: 10
//   z: 50
// }

const defaultSettings = {
  theme: "light",
  showNotifications: true,
  hideSidebar: false,
};

const userSettings = {
  showNotifications: false,
  hideSidebar: true,
};

const finalSettings = {
  ...defaultSettings,
  ...userSettings,
};

// console.log(finalSettings);

// Деструктуризация-----------------------------------------

// const playlist = {
//   name: "Мой супер плейлист",
//   rating: 5,
//   tracks: ["трек-1", "трек-2", "трек-3"],
//   trackCount: 3,
// };

// console.log(playlist);

// const { name, tracks, rating, trackCount: numberOfTracks } = playlist;

// console.log(numberOfTracks);

// console.log(name, trackCount, tracks, rating);

// console.log(name);
// console.log(trackCount);
// console.log(tracks);
// console.log(rating);

// Глубокая деструктуризация-----------------------------------

// const playlist = {
//   name: "Мой супер плейлист",
//   rating: 5,
//   tracks: ["трек-1", "трек-2", "трек-3"],
//   trackCount: 3,
//   stats: {
//     followers: 5632,
//     views: 4587,
//     likes: 1289,
//   },
// };

// console.log(playlist);

// const {
//   name,
//   rating,
//   tracks,
//   trackCount,
//   stats: { followers, views, likes },
// } = playlist;

// console.log(playlist);

// console.log(name, rating, tracks, trackCount, followers, views, likes);

// Операция rest (сбор)--------------------------------------

// const playlist = {
//   name: "Мой супер плейлист",
//   rating: 5,
//   tracks: ["трек-1", "трек-2", "трек-3"],
//   trackCount: 3,
//   stats: {
//     followers: 5632,
//     views: 4587,
//     likes: 1289,
//   },
// };

// const { name, rating, tracks, ...restProps } = playlist;

// console.log(name, rating, tracks);
// console.log(restProps);
// console.log(playlist);

// Деструктуризация массивов----------------------------------

const rgb = [255, 100, 80];

const [red, green, blue] = rgb;

// console.log(red, green, blue);

const authors = {
  kiwi: 4,
  poly: 7,
  ajax: 9,
  mango: 6,
};

const entries = Object.entries(authors);

// console.log(entries);

for (const [name, rating] of entries) {
  // Уровень 2
  // const [name, rating] = entry;
  // Уровень 1
  // const name = entry[0];
  // const rating = entry[1];
  // console.log(name, rating);
}

// Паттерн "Объект настроек"

const showPlaylist = function (userPlaylist) {
  const {
    name,
    rating,
    tracks,
    trackCount,
    stats: { followers, views, likes },
  } = userPlaylist;

  console.log(name, rating, tracks, trackCount, followers, views, likes);
};

const playlist = {
  name: "Мой супер плейлист",
  rating: 5,
  tracks: ["трек-1", "трек-2", "трек-3"],
  trackCount: 3,
  stats: {
    followers: 5632,
    views: 4587,
    likes: 1289,
  },
};

showPlaylist(playlist);
