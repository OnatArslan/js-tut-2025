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
// Js also uses callback functions

// function greet(greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// }

const greet = greeting => name => console.log(`${greeting} ${name}`); // greet fonksiyonu name fonksiyonunu donduruyor

const returnedFunction = greet(`Hey`); // This greet function returns another funtion

returnedFunction(`Onat`); // ==> Hey Onat
returnedFunction(`Jons`); // ==> Hey Jons

greet(`Hi`)(`Mel`); // Looks weird but very effective

// CALL and BIND METHODS --------- ---------- ----------- ----------- ------------ ----------- ------------ ------------ ------------ -------------- -------------
const lufthansa = {
  airline: `Lufthansa`,
  iataCode: `LH`,
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`,
    );
    this.bookings.push({ fligth: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, `Onat Arslan`);
lufthansa.book(111, `Ohio Olake`);

const eurowings = {
  airline: `Eurowings`,
  iataCode: `EW`,
  bookings: [],
};

const turkish = {
  airline: `Turkish Airlines`,
  iataCode: `THY`,
  bookings: [],
};

const book = lufthansa.book;
book.call(eurowings, 1453, `James Bond`); // we call book function with this arg of eurowings object call means that

// We need to use bind method to connect this keyword to turkish object
const book2 = lufthansa.book.bind(turkish); // In normal lufthansa.book function take lufthansa object as this

book2(999, `Sedat Peker`);

// In quick summary bind method returns new function with atteched this arg with given obj
// But bind() method also used for give default values to arguments

// call() method will call function with this arg of given object

// Do not use apply method just use call() and bind() methods
const amiri = {
  airline: `Arabic Airlines`,
  iataCode: `ARA`,
  bookings: [],
};

const bookARA = book.bind(amiri); // bind method connect this to amiri obj
const bookLH = book.bind(lufthansa);
bookARA(2911, `Eshref`);
bookLH(1123, `Jonas`);

// Partial Function Application
const bookARA1000 = book.bind(amiri, 1000); // we give a parameter for book function

bookARA1000(`Steven`);
