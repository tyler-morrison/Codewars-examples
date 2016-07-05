// Return only negative numbers...

// My Solution...
function makeNegative(num) {
  if (num > 0) num *= (-1);
  return num;
}

// Best Solution ES6
makeNegative = (num) => -Math.abs(num);
