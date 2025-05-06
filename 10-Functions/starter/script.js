'use strict';

// Default parameters

const bookings = [];

const createBooking = function (flightNum, numPassangers, price) {
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
