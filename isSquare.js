'use strict';
/**
 * CHALLENGE:
 *
 * Given an integral number, determine if it is a perfect square;
 *
 * MY SOLUTION:
 *
 * First get the sqrt of 'n'.
 * Then, test if the result is a float or integer.
 * Integers return true, which means 'n' was a perfect square.
 */
let isSquare = (n) => Math.sqrt(n) % 1 === 0;

console.log(isSquare(-3)); // => false
console.log(isSquare(4)); // => true
