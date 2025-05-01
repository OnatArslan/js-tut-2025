'use strict';

// This currentYear variable is also in global scope
const currentYear = 2025;

console.log(`${getFullName(`Onat`, `Arslan`)} is ${calcAge(2001)} years old`);

// This calcAge function is in global scope
function calcAge(birthDate) {
  const age = currentYear - birthDate;
  function printAge() {
    const output = `You are ${age}, born in ${birthDate}`;
    return output;
  }
  return printAge();
}

function getFullName(name, surname) {
  return `${name} ${surname}`;
}

// HOISTING IN JAVASCRIPT
console.log(variable1); // It will print undefined because var not hoisting value just location
var variable1 = 'Hello world';

// console.log(variable2); This will throw an error because const and let variables can not do hoisting
const variable2 = 'Hello world';

const sayHi = username => {
  console.log(`Hello ${username}`);
};

sayHi(`Kenanke`);

// In this case if we want to use hoisting in functions we need to use function declaration like below
hoisting('hey');
function hoisting(msg) {
  console.log(msg);
  console.log(this);
}

const notHoistedFunction = function (msg) {
  console.log(msg);
  console.log(this);
};
notHoistedFunction(`hey`);

const notHoistedArrFunction = msg => {
  console.log(`hey`);
  console.log(this); // arrow function does not have this property that because do not use
};
notHoistedArrFunction();

const dog = {
  ad: `rex`,
  cinst: `labrador`,
  kilo: 24,
  dgmy: 2018,
  //   calculateAgeArrow: currentYear => {
  //     return currentYear - this.dgmy; // This will return NaN because arrow functions do not have permission to use this keyword
  //   },

  calculateAgeExpression: function (currentYear) {
    return currentYear - this.dgmy; // This will work because function expressions can access to the this keyword
  },
  //   For shother syntax we can use shothand method
  calculateShortHand(currentYear) {
    return currentYear - this.dgmy;
  },
};

// console.log(dog.calculateAgeArrow(2025));
console.log(dog.calculateAgeExpression(2025));

console.log(dog.calculateShortHand(currentYear));
