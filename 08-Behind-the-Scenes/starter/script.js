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

// Let's assume that ve have global variables like x, y, z
// They are global variables and that because they are belong to window object but this is only true if we use var
var x = 12;
var y = 'hello';
var z = true;
console.log(window.x);
console.log(window.y);
console.log(window.z);

// THIS KEYWORD AND VARIABLE
// In short all execution context(functions) has one owner and this refers to the owner

// In method(object function) this will refer to object
const human = {
  name: `Onat`,
  surname: `Arslan`,
  getFullName: function () {
    return `${this.name} ${this.surname}`;
  },
};

console.log(human.getFullName());

// In event handlers this keyword refers to DOM element that the handler attached to.

console.log(this); // This will print Window object

// If you use this keyword use function expression if you dont need to use this keyword use arrow function

const cat = {
  name: `Liya`,
  color: 'red',
  // In here I ll create one function expression
  sayMeow: function () {
    // In here this will refer to cat object and cat's name is liya
    console.log(`${this.name} says meoww!!`);
    // But the problem is if we create another function expression we can not refer to cat object on this keyword
    // Because of this we need to use arrow function because arrow functions inherits parent scopes this object in this stiations this is cat object
    const sayColor = () => {
      console.log(`My color is ${this.color}.`);
    };
    sayColor();
  },
};

cat.sayMeow();

// Arguments keyword
const sumOfNumbers = function (...args) {
  let sum = 0;
  args.forEach((el, i, arr) => {
    console.log(`Element is ${el} index at ${i}`);
    sum += el;
  });
  console.log(sum);
};

sumOfNumbers(1, 2, 3, 4, 21);

const array = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(array); // Burasi arrayi obje olarak yazdirir yani bu sadece array doner
console.log(...array); // Bu array elementlerini tek tek doner
// hey

// Shallow copys and Deep copys
// This location variable is the not real object just referance for this object
const loc = {
  city: `Lisbon`,
  code: 2000,
};

// That because if we give this object to another object like below
const newloc = loc;
newloc.city = `Paris`;

console.log(loc); // As we see the original location object is changed (shallow copy)
console.log(newloc);

// But if we want deep copy
const thirdLoc = { ...loc };
thirdLoc.city = `Istanbul`;

console.log(loc); // It will print Paris
console.log(thirdLoc); // It will print Istanbul

const users = [
  {
    name: 'John',
    surname: 'Doe',
    email: 'john.doe@example.com',
    age: 28,
    isMarried: false,
  },
  {
    name: 'Jane',
    surname: 'Smith',
    email: 'jane.smith@example.com',
    age: 34,
    isMarried: true,
  },
  {
    name: 'Ali',
    surname: 'Yılmaz',
    email: 'ali.yilmaz@example.com',
    age: 25,
    isMarried: false,
  },
  {
    name: 'Ayşe',
    surname: 'Demir',
    email: 'ayse.demir@example.com',
    age: 31,
    isMarried: true,
  },
  {
    name: 'Michael',
    surname: 'Johnson',
    email: 'm.johnson@example.com',
    age: 45,
    isMarried: true,
  },
  {
    name: 'Emily',
    surname: 'Brown',
    email: 'emily.brown@example.com',
    age: 22,
    isMarried: false,
  },
  {
    name: 'Carlos',
    surname: 'Garcia',
    email: 'carlos.garcia@example.com',
    age: 39,
    isMarried: true,
  },
  {
    name: 'Linda',
    surname: 'Martinez',
    email: 'linda.martinez@example.com',
    age: 27,
    isMarried: false,
  },
  {
    name: 'Mehmet',
    surname: 'Kara',
    email: 'mehmet.kara@example.com',
    age: 33,
    isMarried: true,
  },
  {
    name: 'Zeynep',
    surname: 'Çelik',
    email: 'zeynep.celik@example.com',
    age: 30,
    isMarried: false,
  },
  {
    name: 'David',
    surname: 'Wilson',
    email: 'david.wilson@example.com',
    age: 29,
    isMarried: true,
  },
  {
    name: 'Laura',
    surname: 'Moore',
    email: 'laura.moore@example.com',
    age: 24,
    isMarried: false,
  },
  {
    name: 'Fatma',
    surname: 'Şahin',
    email: 'fatma.sahin@example.com',
    age: 36,
    isMarried: true,
  },
  {
    name: 'Ahmet',
    surname: 'Polat',
    email: 'ahmet.polat@example.com',
    age: 26,
    isMarried: false,
  },
  {
    name: 'Sophia',
    surname: 'Lee',
    email: 'sophia.lee@example.com',
    age: 32,
    isMarried: true,
  },
  {
    name: 'Ethan',
    surname: 'Taylor',
    email: 'ethan.taylor@example.com',
    age: 38,
    isMarried: true,
  },
  {
    name: 'Nur',
    surname: 'Aydın',
    email: 'nur.aydin@example.com',
    age: 21,
    isMarried: false,
  },
  {
    name: 'Can',
    surname: 'Eren',
    email: 'can.eren@example.com',
    age: 40,
    isMarried: true,
  },
  {
    name: 'Olivia',
    surname: 'Anderson',
    email: 'olivia.anderson@example.com',
    age: 29,
    isMarried: false,
  },
  {
    name: 'Jack',
    surname: 'Thomas',
    email: 'jack.thomas@example.com',
    age: 35,
    isMarried: true,
  },
];

const marriedUsers = users.filter((el, i, arr) => {
  return el.isMarried === true;
});
const notMarriedUsers = users.filter((el, i, arr) => {
  return el.isMarried === false;
});

console.log(marriedUsers.length);
console.log(notMarriedUsers.length);

const nameOfUsers = marriedUsers.map(el => {
  return el.name;
});

console.log(nameOfUsers);
