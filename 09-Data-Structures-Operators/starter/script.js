'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  adress: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: {
        at: 11,
      },
      close: {
        at: 22,
      },
    },
    sat: {
      open: 0,
      close: 24,
    },
  },
  // METHODS
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
  orderDelivery: function ({ starterIndex = 0, time, adress, mainIndex = 0 }) {
    console.log(time, adress, mainIndex, starterIndex);
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};
// Give object as parameter is very standart thing in options field for third party librarys like passport,prisma
restaurant.orderDelivery({
  time: '22:30',
  adress: `Via del Sole, 21`,
});

// Object destructuring
const {
  name: restourantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restourantName, hours, tags);

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 18, c: 14 };

({ a, b } = obj); // This syntax is important
console.log(a, b);

// NESTED OBJECTS DESTRUCTURING
const {
  openingHours: {
    fri: {
      // This place is so so fucking important
      open: { at: openAt },
      close: { at: closeAt },
    },
  },
} = restaurant;
console.log(openAt, closeAt);

const company = {
  name: 'TechCorp',
  founded: 2010,
  isActive: true,
  departments: {
    engineering: {
      manager: {
        name: 'Alice',
        contact: {
          email: 'alice@techcorp.com',
          phone: {
            work: '123-456-7890',
            personal: '555-111-2222',
          },
        },
      },
      teams: {
        frontend: {
          lead: 'Bob',
          members: [
            {
              name: 'Charlie',
              age: 27,
              skills: {
                primary: 'React',
                secondary: {
                  name: 'TypeScript',
                  experience: {
                    years: 2,
                    level: 'Intermediate',
                  },
                },
              },
            },
          ],
        },
        backend: {
          lead: 'Diana',
          members: [
            {
              name: 'Eve',
              age: 30,
              skills: {
                primary: 'Node.js',
                databases: {
                  sql: 'PostgreSQL',
                  noSql: {
                    name: 'MongoDB',
                    clusters: {
                      prod: 'ClusterA',
                      dev: 'ClusterB',
                    },
                  },
                },
              },
            },
          ],
        },
      },
    },
    hr: {
      manager: {
        name: 'Frank',
        location: {
          floor: 3,
          room: {
            number: 305,
            accessCode: {
              main: 1234,
              backup: 5678,
            },
          },
        },
      },
    },
  },
};

const {
  departments: {
    engineering: {
      manager: {
        name: engDepManagerName,
        contact: {
          email: emailOfAlice,
          phone: phoneOfAlice,
          gmail: gmailOfAlice = `****`,
        },
      },
    },
  },
} = company;
console.log(
  engDepManagerName,
  `and the email of ${engDepManagerName} is : ${emailOfAlice} and gmail is ${gmailOfAlice}`,
);

// This is default parameter passing to any function
function sayHi(nameOfUser = `Unknown`, ...others) {
  console.log(`Hello ${nameOfUser}`);
  const middleOnes = others.slice(0, others.length - 1);
  const lastOne = others[others.length - 1];
  console.log(`Hello ${middleOnes}`);
  console.log(`Hello ${lastOne}`);
}
sayHi(`Onat`, `Hakan`, `Koray`, `Samet`);

// ARRAY DESTRUCTURING

// const arr = [2, 3, 4];
// const b = arr[0];
// const c = arr[1];
// const d = arr[2];

// const [x, y, z] = arr; // This is array destructuring (unpacking)
// console.log(x, y, z);

// const [first, second, ...other] = restaurant.categories; // spreading the taking
// console.log(first, second);
// console.log(...other);

// let [one, , third] = restaurant.categories; // If we want to skip any variable we need to open a hole in this place
// console.log(one, third);

// // Change two elements order in array with destructuring
// [one, third] = [third, one];
// console.log(one, third);

// const [starter, main] = restaurant.orderFood(1, 2);
// console.log(`Your starter food is ${starter} and main food is ${main}`);

// // Nested array destructuring
// const nested = [2, 4, [5, 6, 7]];

// const [firstEl, secondEl, [nestedFirst, nestedSecond, nestedThird]] = nested; // Destructuring inside another destructuring
// console.log(firstEl, secondEl, nestedFirst, nestedSecond, nestedThird);

// // Destructuring with default values

// const [p = 1, q = 1, r = 1, e = 1] = [1000, 1000, 1000];
// console.log(p, q, r, e); // e variable will be undefined

// const {
//   name = `Name is unknown`,
//   adress = 'Adress is unknown',
//   pricing = `There is not any info about pricing data`,
// } = restaurant;
// console.log(name, adress, pricing);

// SPREAD OPERATOR
const arr = [1, 2, 3, 4];

const newArr = [...arr.slice(1, 3), 5, 6, 7];
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci', 'Makaron'];
console.log(...newMenu);

// Copys of arrays with spread(...) operator
const mainMenuCopy = [...restaurant.mainMenu];
mainMenuCopy.pop();
console.log(mainMenuCopy);
console.log(restaurant.mainMenu);

// Join two arrays
const fullMenu = [...restaurant?.starterMenu, ...restaurant?.mainMenu];
console.log(fullMenu);

// fullMenu.forEach((el, index, arr) => console.log(el, index, ...arr)); This is forEach loop

const str = `Jonas`;
Array.from(`1234567890`).forEach((el, i, arr) => {
  // str.split("") kisa yoldan stringi arraye cevirmeyi saglar
  console.log(parseInt(el), i);
});

// Real-world example of using spread(...) operator with objects
const newRestaurant = {
  ...restaurant, // This line is copying all data from old restaurant object
  owner: `Onat Arslan`,
  ownedIn: 2023,
};

console.log(newRestaurant);

// SPREAD BECAUSE RIGHT HAND OPERATOR
const arr2 = [1, 2, ...[3, 4]];
console.log(arr2);

// REST BECAUSE LEFT HAND OF = OP
const [el1, , ...otherEls] = [1, 2, 3, 4, 5, 6, 7];
console.log(otherEls);

// OBJECTS
const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays);

// FUNCTIONS
const add = function () {};

add(2, 3);
add(5, 3, 7, 2);

restaurant.orderPizza(`Salmon`, `Hayday`, `Pepper`);

// SHORT CIRCUITING ------------------------------------------------------------------------------------------------------------------
// IN OR Short circ first truthy value will be returned
console.log(`` || `Onat`);

// restaurant.numGuests = 19;
const guest1 = restaurant.numGuests ? restaurant.numGuests : 0;
console.log(guest1);

const guest2 = restaurant.numGuests || 10;
console.log(guest2);

// AND SHORT CIRCUITING
console.log(`------AND-------`);
console.log(0 && `jonas`);

// NULLISH COELESCING OP (??) only look nullish values(undefined and null)

const rest1 = {
  name: `Capri`,
  numGuests: 13,
};

const rest2 = {
  name: `Zagri`,
  owner: `Onat Arslan`,
};

rest2.numGuest = rest2.numGuest ?? 0;
rest1.numGuests ??= 10; // This syntax is shorthand for upper line line-339
console.log(rest2);
console.log(rest1);

// FOR OF LOOP -------------------------------------------------------------------------------------------------------------------
// We are using for of loop for break and continue keywords in forEach method we don't have this thing
const exampleMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const element of exampleMenu) {
  if (element === `Pasta`) {
    break;
  }
  console.log(element, exampleMenu.indexOf(element));
}

// OR IF WE WANT GET INDEX AND ELEMENT AT THE SAME TIME
for (const [i, el] of exampleMenu.entries()) {
  console.log(i, el); // [3, 'Caprese Salad'] It will print like this
}

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 12,
    close: 12,
  },
  sat: {
    open: 0,
    close: 24,
  },
};

const restaurantGuesso = {
  name: 'Classico Italiano',
  adress: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours,
  // METHODS
  orderFood(starterIndex, mainIndex) {
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
  // This is ES^ object literal function syntax
  orderDelivery({ starterIndex = 0, time, adress, mainIndex = 0 }) {
    console.log(time, adress, mainIndex, starterIndex);
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

console.log(restaurantGuesso);

// OPTIONAL CHANING (?.) -------------------------------------------------------------------------------------------
// console.log(restaurantGuesso.openingHours.mon.open); This will give an error because we are calling open property on undefined object prop
console.log(restaurantGuesso?.openingHours?.mon?.open); // This won't give an error just return undefined

const days = [`mon`, `tue`, `wed`, `thu`, `fri`, `sat`, `sun`];
days.forEach((day, i, arr) => {
  const openAt = restaurantGuesso?.openingHours?.[day]?.open ?? 8;
  console.log(day, openAt);
});

// OPTIONAL CHANING WITH METHODS
const newValue = restaurant.orderSmth?.(`This function is not exist`); // There is not such a function orderSmth
console.log(newValue);

// LOOPING OBJECTS entries is all keys is keys and values is values array
for (const [key, value] of Object.entries(restaurantGuesso)) {
  console.log(key, value);
}

const openinHours2 = {
  ...openingHours,
};

for (const [key, { open, close }] of Object.entries(openinHours2)) {
  console.log(
    `${key.toUpperCase()} is open at: ${open} and close at: ${close}`,
  );
}

// SETS ON JAVASCRIPT (unique arrays)
const ordersSet = new Set([1, 2, 3, 4, 5, 5, 6, 6]);
console.log(ordersSet);

// MORE ON SETS METHODS
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

const commonFoods = italianFoods.intersection(mexicanFoods);
console.log(commonFoods);

// MAPS --------------------------------------------------------------------------------------------------------------------------------------
const rest = new Map();
rest.set(`name`, `Classico Itallion`);
console.log(rest);

const arr4 = [1, 2, 3, 4, 5, 6, 7];

console.log(arr4.slice(1, 5));

// STRING METHODS ----------------------------------------------------------------------------------------------------------------------------
const airline = `TAP Air Portugal`;
const plane = `A320`;

console.log(plane.at(0)); // A

console.log(airline.split(` `)); // ['TAP', 'Air', 'Portugal']

console.log(airline.length); // This will print length of string

console.log(airline.indexOf(`i`));

console.log(airline.slice(airline.indexOf(`A`), airline.indexOf(`g`) + 1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  let isMiddle = seat.includes(`B`) || seat.includes(`E`) ? true : false;
  console.log(isMiddle);
};

checkMiddleSeat(`11E`);

const passanger = 'oNaT';
const fixedPassangerName = passanger.toLowerCase();
const passangerCorrect =
  fixedPassangerName[0].toUpperCase() + fixedPassangerName.slice(1);
console.log(passangerCorrect);

const email = `onat@gmail.com`;
const inputEmail = `    OnAt@gmAil.com    `;

const fixedInput = inputEmail.trim().toLowerCase();
console.log(fixedInput);

// Replacing
const prizeGB = `288,97$`;

const prizeUS = prizeGB.replace(`$`, `&`).replace(`,`, `.`);
console.log(prizeUS);

const numberFromStr = Number.parseFloat(`2889.90`);
console.log(numberFromStr + 2);

const announcment = `All passangers come to boarding door 23. Boarding door 23!`;

console.log(announcment.replace(/door/g, `gate`));
console.log(announcment.replaceAll(`door`, `gate`));

// RETURN BOOLEANS
const plane2 = `A320neo`;
console.log(plane2.includes(`A3`));
console.log(plane2.endsWith(`neo`));
console.log(plane2.startsWith(`A32`));
console.log(plane2.search(`n`)); // It will print the starting index

// SPLIT METHOD
const string1 = 'a very nice string';
const stringArr = string1.split(` `);
console.log(stringArr);

const modifiedString = stringArr.join(`-`);
console.log(modifiedString);

const passanger3 = `onat arslan`;

const capitalizeName = function (name) {
  const names = name.split(` `);
  const namesUpper = [];
  names.forEach(el => {
    const upper = el[0].toUpperCase() + el.slice(1);
    namesUpper.push(upper);
  });
  return namesUpper.join(` `);
};

console.log(capitalizeName(passanger3));

// Data needed for a later exercise
const flights2 =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
