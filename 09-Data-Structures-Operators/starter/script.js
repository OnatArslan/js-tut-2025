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

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  adress: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  orderFood: function (starterIndex, mainIndex) {
    // This if block controls if indexes out of length that because return values are undefined
    if (
      this.starterMenu[starterIndex] === undefined ||
      this.mainMenu[mainIndex] === undefined
    ) {
      return `Starter menu index need to between (0-${this.starterMenu.length - 1}) 
Main manu index need to between (0-${this.mainMenu.length - 1})`;
    }
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

const arr = [2, 3, 4];
const b = arr[0];
const c = arr[1];
const d = arr[2];

const [x, y, z] = arr; // This is array destructuring (unpacking)
console.log(x, y, z);

const [first, second, ...other] = restaurant.categories; // spreading the taking
console.log(first, second);
console.log(...other);

let [one, , third] = restaurant.categories; // If we want to skip any variable we need to open a hole in this place
console.log(one, third);

// Change two elements order in array with destructuring
[one, third] = [third, one];
console.log(one, third);

const [starter, main] = restaurant.orderFood(1, 2);
console.log(`Your starter food is ${starter} and main food is ${main}`);

// Nested array destructuring

const nested = [2, 4, [5, 6, 7]];

const [firstEl, secondEl, [nestedFirst, nestedSecond, nestedThird]] = nested; // Destructuring inside another destructuring
console.log(firstEl, secondEl, nestedFirst, nestedSecond, nestedThird);
