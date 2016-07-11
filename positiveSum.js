'use strict';
/**
 * CHALLENGE:
 *
 * Given an array of integers, output the sum of ONLY the positive values...
 *
 * MY SOLUTION:
 */
let positiveSum = (arr) => arr
  .filter((x) => x > 0)
  .reduce((a, b) => a + b, 0);

// BEST SOLUTION ES6
let positiveSumES6 = (arr) => arr.reduce((a, b) => a + (b > 0 ? b : 0), 0);

console.log(positiveSumES6([1, -4, 7, 12])); // 20
