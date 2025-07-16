'use strict';

// In all code examples '-->' sign will explain console.log() text

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

// --------------------------------------------------------------------------------------------------- FIRST PART --------------------------------------------------------------------
// Data needed for first part of the section
const restaurant = {
  restaurantName: 'Classico Italiano',
  loc: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // Object datas
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  // Methods
  orderFood(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

const arr = [2, 3, 4];
// This is without destructuring
const a = arr[0];
const b = arr[1];
const c = arr[2];

// This is with array destructuring -original array is not effected
const [x, y, z] = arr;
console.log(x, y, z);

const [first, second] = restaurant.categories;
console.log(first, second);

// But if we want to pass second we have to use empty , , like below
const [firstCategory, , thirdCategory] = restaurant.categories;
console.log(firstCategory, thirdCategory);

// Switching variables
let [main, secondary] = restaurant.categories;

[main, secondary] = [secondary, main];
console.log(main, secondary);

// We can use the orderFood() method with destructuring
const [starterOrder, mainOrder] = restaurant.orderFood(0, 2);
console.log(
  `Starter order is : ${starterOrder} and the main order is : ${mainOrder}`,
);

// Destructuring with nested arrays ----------------
const nestedArr = [
  `First Value`,
  `Second Value`,
  [`Nested First Value`, `Nested Second Value`],
];

const [firstVal, , [nestedFirstVal, nestedSecondVal]] = nestedArr;
console.log(firstVal, nestedFirstVal, nestedSecondVal);

// Default values
const exArray = [1, 2, 3];

// const [firstEx, secondEx, thirdEx, fourthEx] = exArray; In this code fourthEx will return undefined because we dont have any data for this variable

// In below sample we will use default variable
const [firstEx, secondEx, thirdEx, fourthEx = `default`] = exArray;

console.log(firstEx, secondEx, thirdEx, fourthEx); // --> 1 2 3 'default'

// DESTRUCTURING OBJECTS ------------------------------

const restaurant2 = {
  restaurantName: 'Classico Italiano',
  // ownerName: `Onat Arslan`,
  loc: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // Object datas
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  // Methods
  orderFood(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

// This is basic destructuring
const {
  restaurantName,
  loc,
  categories,
  starterMenu,
  mainMenu,
  openingHours, // In here we get the all openingHours object
  openingHours: { thu, fri, sat }, // But here we are taking child objects(thu, fri, sat)
} = restaurant2;

console.log(loc);
console.log(restaurantName);
console.log(openingHours);
console.log(thu);

// In this example we are using alias in destructuring objects
const {
  restaurantName: aliasForName,
  loc: aliasForLoc,
  categories: aliasForCategories = [], // If categories does not exist then default value for this is empty array --> []
  starterMenu: aliasForStarterMenu,

  // Giving default values in object destructuring
  ownerName: ownerName = 'Anonymous',
} = restaurant2;

console.log(aliasForStarterMenu);
console.log(ownerName);

// Mutating variables
let exNumber = 111;
let exNumber2 = 999;

const obj = { exNumber: 23, exNumber2: 7, exNumber3: 24 };
// In this example we mutate original values of exNumber and exNumber2
({ exNumber, exNumber2 } = obj);
console.log(exNumber, exNumber2); // --> 23 7

const {
  // In this example we write both default value usage and nested object destructuring
  fri: { open: friOpen = 0, close: friClose },
  fri: friday,
} = restaurant2.openingHours;
console.log(friOpen, friClose);
console.log(friday);

// USING DESTRUCTURING IN METHOD PARAMETER PASSING !!!!!!!!!!!!!!!!!!!!!!!
const restaurant3 = {
  restaurantName: 'Classico Italiano',
  // ownerName: `Onat Arslan`,
  loc: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // Object datas
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  // Methods
  orderFood(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // EXAMPLE METHOD FOR PARAMETER PASSING (This is standart for 3rd party javascript libaries like express, prisma, zod)
  infoAboutPlugAndOthers(
    time = `Unknown`,
    adress = `Unknown`,
    { name: plugName, surname: plugSurname, age: plugAge, job: plugJob },
  ) {
    console.log(
      `Your delivery will be delivered to ${adress} at ${time} and your plug name is ${plugName} age is ${plugAge} job is ${plugJob} and surname is ${plugSurname}`,
    );
  },
};

// This syntax here is used in settings object in 3rd party libaries
const plugObj = {
  name: `Onat`,
  surname: `Arslan`,
  age: 22,
  job: `Backend Developer`,
};
restaurant3.infoAboutPlugAndOthers(11, `Floride`, plugObj);

// Spread operator (...) used for unpacking elements in array
const arrF = [7, 8, 9];
const newArr = [1, 2, ...arrF]; // ...arrF will spread the array elements like 7, 8, 9

console.log(newArr); // => [1, 2, 7, 8, 9]
console.log(...newArr); // => 1 2 7 8 9 unpacked

const newMenu = [...restaurant3.mainMenu, `Gnocci`, `Kebap`];
console.log(newMenu);

// Shallow copies of arrays
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const totalMenu = [...restaurant3.mainMenu, ...restaurant3.starterMenu];
console.log(totalMenu);

// Iterables: arrays, strings, maps, sets
// We can use spread operator(...) on all iterables
const exString = `Onat Arslan`;
console.log(exString);
console.log(...exString);

// exString.split(``).forEach((el, i, arr) => {
//   console.log(
//     `Element ${el} belongs to index ${i} and total array is [${arr}]`,
//   );
// });

const restaurant4 = {
  restaurantName: 'Classico Italiano',
  // ownerName: `Onat Arslan`,
  loc: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // Object datas
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  // Methods
  orderFood(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // EXAMPLE METHOD FOR PARAMETER PASSING (This is standart for 3rd party javascript libaries like express, prisma, zod)
  infoAboutPlugAndOthers(
    time = `Unknown`,
    adress = `Unknown`,
    { name: plugName, surname: plugSurname, age: plugAge, job: plugJob },
  ) {
    console.log(
      `Your delivery will be delivered to ${adress} at ${time} and your plug name is ${plugName} age is ${plugAge} job is ${plugJob} and surname is ${plugSurname}`,
    );
  },

  /**
   *
   */
  orderPasta(ing1, ing2, ing3) {
    console.log(ing1, ing2, ing3);
  },
};

const ingreadients = [`Olive`, `Peach`, `Zong`];

restaurant4.orderPasta(...ingreadients);

// Creating new object with old data from another object
const newRestaurant = {
  ...restaurant4, // This spread usege for get all data from restaurant4 object
  info: `This is a copy restourant`,
  foundedIn: 2002,
};

console.log(newRestaurant);

// Copy object with spread op. (same as new object) shallow copy!!!!!
const copyRestaurant = { ...newRestaurant };

copyRestaurant.foundedIn = 1980;

console.log(copyRestaurant);
console.log(newRestaurant);

// REST PATTERN AND PARAMETERS
// Rest pattern is getting rest of the elements
// SPREAD IS RIGHT SIDE
const arr9 = [1, 2, ...[3, 4, 5]];

// REST PATTERN EXAMPLE
const [a1, a2, ...others] = arr9;
console.log(a1, a2, others);

// Using spread operator and rest pattern at the same time
// Rest element must be the last element!!!!
const [firstMain, , thirdMain, ...otherFood] = [
  ...restaurant3.mainMenu,
  ...restaurant3.starterMenu,
];

console.log(firstMain, thirdMain, otherFood);

const { sat: satur, ...otherDaysObj } = restaurant.openingHours;
console.log(otherDaysObj);
console.log(satur);

// Functions
function add(...numbers) {
  return numbers.reduce((acc, val, i, arr) => {
    return acc + val;
  }, 0);
}

console.log(add(2, 5));
console.log(add(2, 5, 4, 11, 23, 333, 45));

add(2, 5, 0, 12, 23, 12, 78);

// SHORT CIRCUITING

// || operator will return first truthy value
console.log(0 || `` || `hello` || 14); // ==> hello

// && operator will return first falsy value
console.log(`Onat` && 12 && null); // ==> null

// In real world scenarios if we dont know data is valid, we can use || for giving default values
restaurant.numGuess = 0;
restaurant.numGuess = restaurant.numGuess || 10; // If there is not specified data then default value is 0
console.log(restaurant.numGuess); // ==> 10

// But in this sceniario what if numGuess is 0, because 0 is number but falsy value
restaurant.numGuess = 0;
restaurant.numGuess = restaurant.numGuess ?? 10;
console.log(restaurant.numGuess);

// If object have field then do this

restaurant.categories && console.log(categories); // If there is property named categories then log categories like if expression

// LOGICAL ASSIGMENT OPERATORS
const rest1 = {
  resName: `Capri`,
  numGuess: 20,
};

const rest2 = {
  resName: `Piezza`,
  owner: `Onat Arslan`,
};

// This is nullish op
rest2.numGuess = rest2.numGuess ?? 10;
console.log(rest2.numGuess);

// This is logical assigment operator with ??=
// All of them are ??= ||= &&=
// ?? is nullish operator (only false for null or undefined)
rest2.numGuess ??= 5;
console.log(rest2.numGuess);
