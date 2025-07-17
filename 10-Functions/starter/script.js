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
