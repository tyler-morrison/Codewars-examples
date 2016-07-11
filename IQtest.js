'use strict';
/**
 * CHALLENGE:
 *
 * Bob is preparing to pass IQ test. The most frequent task in this test is to
 * find out which one of the given numbers differs from the others.
 * Bob observed that one number usually differs from the others in *evenness*
 */

let iqTest = (numbers) => {
  // First split string into array of numbers
  // Then reduce to create object that only contains unique value
  let unique = numbers.split(" ")
    .reduce((o, n, i) => {
      // Variable to test even or odd
      let x = n % 2;
      // If an odd has been found, delete it, if not assign name / value
      // Use i + 1 so that final output will not be zero-base
      (o.hasOwnProperty(x)) ? delete o[x]: o[x] = i + 1;
      return o;
    }, {});

  // Finally, return the first value of object
  return unique[Object.keys(unique)[0]];
}

console.log(iqTest("2 4 7 8 10")); // 3
console.log(iqTest("1 2 1 1")); //2
