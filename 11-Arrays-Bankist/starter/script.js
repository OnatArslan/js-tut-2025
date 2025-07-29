'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// HTML Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/////////////////////////////////////////////////

const array = [`a`, `b`, `c`, `d`, `e`];

// slice method
console.log(array.slice(2, 4));
console.log(array.slice(-1)); // this is not mutating original array

// splice method
console.log(array.splice(2, 4)); // this is mutating the original array
console.log(array);

// REVERSE
const array2 = [`a`, `z`, `k`, `s`, `u`];
console.log(array2.reverse()); // It mutates the original array
console.log(array2);

// ARRAY TO STRING
const array3 = [`o`, `n`, `a`, `t`];
console.log(array3.join(`_`)); // It converts array to string with given seperator

// at() method
const dummyArr = [23, 11, 64];
console.log(dummyArr.at(1)); // This is modern way of [] indexing and we have to use at() method
console.log(dummyArr[1]); // Old version

console.log(dummyArr.at(-1)); // Also we can give negative index for at method

console.log(`Onat`.at(-1)); // at() method also work on strings

// LOOPING ARRAYS
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// If we want performance and full control(break, continue, async/await) have to use for i loop
for (let i = 0; i < movements.length; i++) {
  const value = movements[i];
  console.log(value);
}

// This is used in callbacks but this can not use async/await or break/continue statements
movements.forEach((element, index, arr) => {
  if (element > 0) {
    console.log(`You deposited ${element}`);
  } else {
    console.log(`You withdrew ${Math.abs(element)}`); // abs() method get absolute value
  }
});

// forEach method with Maps
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// With Map first is key and second is value
currencies.forEach((val, i, arr) => {
  console.log(i, val);
});
