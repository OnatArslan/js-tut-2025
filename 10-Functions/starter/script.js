'use strict';

const bookings = [];

// In here we are giving default values to parameters
function createBooking(
  flightNum = 1111,
  numPassengers,
  totalWorth = numPassengers * 199, // Also we can use other parameters in parameters
) {
  const booking = {
    flightNum,
    numPassengers,
    totalWorth,
  };
  console.log(booking);
  bookings.push(booking);
}

createBooking(23, 12);

// PASSING ARGUMENTS - PASSING BY VALUE(PRIMITIVES) VS. PASSING BY REFERANCE
const flight = `LH234`;
const onat = {
  name: `Onat Arslan`,
  passport: 2330000000,
};

function checkIn(flightNum, passanger) {
  flightNum = `LH999`;
  passanger.name = `Mr.` + passanger.name;

  if (passanger.passport === 2330000000) {
    console.log(`Check in`);
  } else {
    console.log(`Wrong passport`);
  }
}

checkIn(flight, onat);
console.log(flight); // This flight data does not change because this is a primitive

console.log(onat); // Onat variable is changed because this is a referance of onat object

function newPassport(person) {
  person.passport = Math.trunc(Math.random() * 10000000000);
}

newPassport(onat);
checkIn(flight, onat);

// FIRST-CLASS(this means functions treatet like values) AND HIGHER-ORDER FUNCTIONS(functions calls other functions OR functions returns another function)

function oneWord(str) {
  return str.replaceAll(` `, ``).toLowerCase();
}

// CALLBACK FUNCTION
function upperFirstWord(str) {
  const [first, ...others] = str.split(` `);
  const returnStr = [first.toUpperCase(), others.join(` `)].join(` `);
  return returnStr;
}

// HIGHER ORDER FUNCTION
function tranformer(str, fn) {
  console.log(
    `Transformed string is '${fn(str)}' and transformed by ${fn.name} function`,
  );
}
tranformer(`Javascript is the best`, upperFirstWord); // In this usage upperFirstWord function is callback and transformer is higher order function
tranformer(`Javascript is the best`, oneWord); // In this usage oneWord function is callback and transformer is higher order function
