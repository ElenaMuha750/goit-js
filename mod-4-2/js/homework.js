const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male",
    age: 37,
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female",
    age: 34,
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male",
    age: 24,
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female",
    age: 21,
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male",
    age: 27,
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male",
    age: 38,
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female",
    age: 39,
  },
];

const getUsersWithEyeColor = (users, color) => {
  return users.filter(user => user.eyeColor === color);
};

// console.log(getUsersWithEyeColor(users, "blue"));
// console.log(getUsersWithEyeColor(users, "brown"));
// console.log(getUsersWithEyeColor(users, "green"));

const getUsersWithAge = (users, minAge, maxAge) => {
  return users.filter(({ age }) => age > minAge && age < maxAge);
};

// console.log(getUsersWithAge(users, 20, 30));
// console.log(getUsersWithAge(users, 30, 40));
// console.log(getUsersWithAge(users, 80, 100));

const getUsersWithFriend = (users, friendName) => {
  return users.filter(user => user.friends.includes(friendName));
};

// console.log(getUsersWithFriend(users, "Briana Decker"));
// console.log(getUsersWithFriend(users, "Goldie Gentry"));
// console.log(getUsersWithFriend(users, "Adrian Cross"));

const getFriends = users => {
  const allFriends = users.flatMap(user => user.friends);
  const uniqueFriends = allFriends.filter(
    (friend, index, array) => array.indexOf(friend) === index
  );
  return uniqueFriends;
};
// console.log(getFriends(users));

const getActiveUsers = users => users.filter(user => user.isActive === true);
// console.log(getActiveUsers(users));

const getInactiveUsers = users => users.filter(user => user.isActive === false);
// console.log(getInactiveUsers(users));

const getUserWithEmail = (users, email) =>
  users.find(user => user.email === email);
// console.log(getUserWithEmail(users, "shereeanthony@kog.com"));

const isEveryUserActive = users => users.every(user => user.isActive === true);
// console.log(isEveryUserActive(users));

const isAnyUserActive = users => users.some(user => user.isActive);
// console.log(isAnyUserActive(users));

const calculateTotalBalance = users =>
  users.reduce((acc, user) => user.balance + acc, 0);
// console.log(calculateTotalBalance(users));

const getTotalFriendCount = users =>
  users.reduce((acc, user) => acc + user.friends.length, 0);
// console.log(getTotalFriendCount(users));

const sortByAscendingBalance = users =>
  [...users].sort((a, b) => a.balance - b.balance);
// console.table(sortByAscendingBalance(users));

const sortByDescendingFriendCount = users =>
  [...users].sort((a, b) => b.friends.length - a.friends.length);
// console.log(sortByDescendingFriendCount(users));

const sortByName = users =>
  [...users].sort((a, b) => a.name.localeCompare(b.name));
// console.log(sortByName(users));

const getNamesSortedByFriendCount = users =>
  [...users]
    .sort((a, b) => a.friends.length - b.friends.length)
    .map(user => user.name);

// console.table(getNamesSortedByFriendCount(users));

const getSortedFriends = users => {
  return [...users]
    .flatMap(user => user.friends)
    .filter((friend, index, array) => array.indexOf(friend) === index)
    .sort((a, b) => a.localeCompare(b));
};
// console.log(getSortedFriends(users));

const getTotalBalanceByGender = (users, gender) => {
  return [...users]
    .filter(user => user.gender === gender)
    .reduce((acc, user) => acc + user.balance, 0);
};

// console.log(getTotalBalanceByGender(users, "male"));
// console.log(getTotalBalanceByGender(users, "female"));
