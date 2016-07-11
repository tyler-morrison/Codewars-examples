'use strict';
/**
 * CHALLENGE:
 *
 * When given any integer, return its negative value
 *
 * MY SOLUTION
 */
function makeNegative(num) {
  if (num > 0) num *= (-1);
  return num;
}

// Best Solution ES6
let makeNegativeES6 = (num) => -Math.abs(num);
