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
