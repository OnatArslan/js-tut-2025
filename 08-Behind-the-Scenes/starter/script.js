'use strict';

// This currentYear variable is also in global scope
const currentYear = 2025;

// This calcAge function is in global scope
function calcAge(birthDate) {
  return currentYear - birthDate;
}

console.log(calcAge(2002));
