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
