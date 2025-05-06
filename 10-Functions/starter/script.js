'use strict';

// Default parameters

const bookings = [];

const createBooking = function (flightNum, numPassangers, price) {
  numPassangers = numPassangers ?? 0;
  price = price ?? 99;
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
