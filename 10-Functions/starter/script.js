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

// FUNCTIONS TAKING PARAMETER OTHER FUNCTIONS ----------------------------------------------------------------------------------------------
