'use strict';

const bookings = [];

// In here we are giving default parameters
function createBooking(flightNum = 1111, numPassengers = 1, price = 100) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
}

createBooking();
