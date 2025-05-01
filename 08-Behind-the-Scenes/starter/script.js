'use strict';

// This currentYear variable is also in global scope
const currentYear = 2025;

// This calcAge function is in global scope
function calcAge(birthDate) {
  return currentYear - birthDate;
}

function getFullName(name, surname) {
  return `${name} ${surname}`;
}

console.log(`${getFullName(`Onat`, `Arslan`)} is ${calcAge(2001)} years old`);
