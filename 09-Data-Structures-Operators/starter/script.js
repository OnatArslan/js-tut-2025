'use strict';

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
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
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
