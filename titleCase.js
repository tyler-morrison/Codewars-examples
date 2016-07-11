'use strict';
/**
 * CHALLENGE:
 *
 * A string is considered to be in title case if each word in the string is either
 * (a) capitalised (that is, only the first letter of the word is in upper case) or
 * (b) considered to be an exception and put entirely into lower case
 * unless it is the first word, which is always capitalised.
 */

// MY SOLUTION:
let titleCase = (title, minorWords) => {
  // First transform each string to array and capitalize all
  let capCase = (str) => str.split(" ")
    .map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase());

  let formatted = capCase(title);

  if (minorWords) {
    // Next, format minorWords to match
    let test = capCase(minorWords);
    // Then, check if words need to be lowercase
    formatted = formatted.map((w, i) => {
      return (i > 0 && test.includes(w)) ? w.toLowerCase() : w;
    });
  }

  return formatted.join(" ");
}

// BEST SOLUTION:
let titleCaseBest = (input, minor) => {
  let minorToLower = (typeof minor !== "undefined") ? minor.toLowerCase().split(' ') : [];

  return input.toLowerCase()
    .split(' ')
    .map((w, i) => {
      if (w != "" && ((minorToLower.indexOf(w) === -1) || i == 0)) {
        w = w.split('');
        w[0] = w[0].toUpperCase();
        w = w.join('');
      }
      return w;
    })
    .join(' ');
}

console.log(titleCaseBest('a clash of KINGS', 'a an the of')); // 'A Clash of Kings
console.log(titleCaseBest('THE WIND IN THE WILLOWS', 'The In')); // 'The Wind in the Willows'
console.log(titleCaseBest('the quick brown fox')); // 'The Quick Brown Fox'
