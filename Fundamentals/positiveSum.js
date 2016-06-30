// Sum only the positive values of a given array...

// My solution...
positiveSum = (arr) => arr
    .filter((x) => x > 0)
    .reduce((a, b) => a + b, 0);

console.log(positiveSum([1, -4, 7, 12]));

// Best solution...
positiveSum = (arr) => arr.reduce((a, b) => a + (b > 0 ? curr : 0), 0);
