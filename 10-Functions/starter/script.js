'use strict';

// Default parameters

const bookings = [];

const createBooking = function (
  flightNum = `IDK000`,
  numPassangers = 1,
  price = 99 * numPassangers, // we also use other parameters in
) {
  // This is old way for default parameters
  //   flightNum = flightNum ?? `IDK000`;
  //   numPassangers = numPassangers ?? 1;
  //   price = price ?? 99;
  // creating booking object with parameter data
  const booking = {
    flightNum,
    numPassangers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking(`LH123`);
console.log(bookings);

// Passing arguments as values and referances
const flight = `LH234`;
const onat = {
  name: `Onat Arslan`,
  passport: 199900010001,
};

const checkIn = function (flightNum, passanger) {
  flightNum = `LH999`;
  passanger.name = `Mr. ` + passanger.name;

  if (passanger.passport === 199900010001) {
    console.log(`Check in`);
  } else {
    console.log(`wrong passport`);
  }
};
console.log(`------------`);
checkIn(flight, onat);
console.log(flight);
console.log(onat);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000);
};

newPassport(onat);
console.log(onat);

// First class and higher order functions --------------------------------------------------------------------------------------------------------------------------------
// Higher order function in javascript is function that take function as parameter or function that return another function
function greet(language) {
  if (language === 'en') {
    return name => {
      console.log('Hello, ' + name);
    };
  } else if (language === 'tr') {
    return name => {
      console.log('Merhaba, ' + name);
    };
  }
}

// This is high order functions because myMap function is taking another function as parameter
const myMap = function (arr, funct) {
  const result = [];
  arr.forEach((el, i, arr) => {
    result.push(funct(el));
  });
  return result;
};

const arr = [1, 2, 3, 4, 5, 6, 7];

const newArr = myMap(arr, x => {
  return x + 5;
});
console.log(newArr);

// And for note here first-class functions mean that functions used like object and have own methods or assign to values
// But higher order func means that functions that return another functions or taking functions as parameters like map() function

// FUNCTIONS TAKING PARAMETER OTHER FUNCTIONS CALLBACK FUNCTIONS ----------------------------------------------------------------------------------------------

const oneWord = function (str) {
  return str.replaceAll(` `, ``).toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(` `);
  return [first.toUpperCase(), ...others].join(` `);
};

const transformer = function (str, fn) {
  console.log(`Transformed string : ${fn(str)}`);

  console.log(`Transformed by : ${fn.name}`);
};

transformer(`Javascript is the best!`, upperFirstWord);
transformer(`Javascript is the best!`, oneWord);

// FUNCTIONS RETURNING OTHER FUNCTIONS -------------------------------------------------------------------------------------------

const greet2 = greeting => {
  return name => {
    console.log(`${greeting} ${name}`);
  };
};

const innerFunct = greet2(`Welcome`);

innerFunct(`Ahmet`);

greet2(`Hi`)(`Boss`);

// The call() and apply() methods ------------------------------------------------------------------------------------------

const lufthansa = {
  airline: `Lufthansa`,
  iatecode: `LH`,
  bookings: [],
  book(flightNum, passangerName) {
    console.log(
      `${passangerName} booked a seat on ${this.airline} flight ${this.iatecode}${flightNum}`,
    );
    this.bookings.push({
      flight: `${this.iatecode}${flightNum}`,
      passangerName,
    });
  },
};

lufthansa.book(129000, `Onat Arslan`);
lufthansa.book(190000, `John Smith`);

console.log(lufthansa.bookings);

const eurowings = {
  airline: `Eurowings`,
  iatecode: `EW`,
  bookings: [],
  bookFunctionForEurowings(flightNum, passangerName) {
    return lufthansa.book.call(this, flightNum, passangerName);
  },
};

eurowings.bookFunctionForEurowings(1222322, `Onat Arslan`);

// Bind methodu this keywordunu belirli bir nesneye sabitler

const book = function (flightNum, passName) {
  console.log(
    `${passName} booked a seat on ${this.airline} flight ${this.iatecode}${flightNum}`,
  );
};

const bookEW = book.bind(eurowings);
const bookLF = book.bind(lufthansa); // This bind() method used for this keyword for specified object
bookEW(1111, `Onat Arslan`);
bookLF(2222, `Semicenk`);

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  this.planes++;
  console.log(this);
  console.log(this.planes);
};

lufthansa.buyPlane();

document
  .querySelector(`.buy`)
  .addEventListener(`click`, lufthansa.buyPlane.bind(lufthansa)); // If we don't use bind() method on here this will refers to undefined

// Immediately Function Expressions this is used for async/await blocks
