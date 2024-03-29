'use strict';

// Use a 'for' loop
function repeatStringNumTimesWithFor(str, num) {
  // eslint-disable-next-line prefer-const
  let result = '';
  for (let i = 0; i < num; i++) {
    result += str;
    if (i === num) {
      return result;
    }
  }
  return result;
}
console.log('for', repeatStringNumTimesWithFor('abc', 3));

// Use a 'while' loop
function repeatStringNumTimesWithWhile(str, num) {
  // eslint-disable-next-line prefer-const
  let result = '';

  while (num > 0) {
    result += str;
    num--;
  }

  return result;
}

console.log('while', repeatStringNumTimesWithWhile('abc', 3));

// Use a 'do...while' loop
function repeatStringNumTimesWithDoWhile(str, num) {
  // eslint-disable-next-line prefer-const
  let result = '';

  do {
    result += str;
    num--;
  } while (num > 0);

  return result;
}

console.log('do-while', repeatStringNumTimesWithDoWhile('abc', 3));


module.exports = {
  repeatStringNumTimesWithFor,
  repeatStringNumTimesWithWhile,
  repeatStringNumTimesWithDoWhile,
};

