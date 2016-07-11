'use strict';
/**
 * CHALLENGE:
 *
 * Write a functon that accepts a string and converts it as follows...
 *
 * accum("abcd") --> "A-Bb-Ccc-Dddd"
 * accum("RqaEzty") --> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
 * accum("cwAt") --> "C-Ww-Aaa-Tttt"
 */

let accum = (s) => {
  s.split("")
    .map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
    .join("-")
};

console.log(accum("RqaEzty"));
