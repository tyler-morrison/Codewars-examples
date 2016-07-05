/**
 * CHALLENGE
 *
 * Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
 *
 * MY SOLUTION:
 */
let doubleChar = (str) => {
  let double = '';
  for (let i = 0; i < str.length; i++) {
    double += str.charAt(i).repeat(2);
  }
  return double;
}

/**
 * BEST SOLUTION:
 *
 * Split transforms the string into an array, where each item is a single char.
 * Example ['a', 'b', 'c']
 *
 * Chain the map method to duplicate each char...
 * Example contd ['aa', 'bb', 'cc']
 *
 * Join with empty string param converts everything back to string.
 */
let doubleChar = (str) => str.split("").map(c => c + c).join("");

console.log(doubleChar("abcd"));
