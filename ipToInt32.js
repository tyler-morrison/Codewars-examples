'use strict';
/**
 * CHALLENGE:
 *
 * Write a function ipToInt32(ip) that takes an IPv4 address and returns a 32 bit number.
 *
 * An IPv4 address is comporised of 4 octets where each octet is a single byte.
 *     - 1st octet 128 has the binary representation: 10000000
 *     - 2nd octet 32 has the binary representation: 00100000
 *     - 3rd octet 10 has the binary representation: 00001010
 *     - 4th octet 1 has the binary representation: 00000001
 *
 * So 128.32.10.1 == 10000000.00100000.00001010.00000001
 * Because the above IP address has 32 bits, we can represent it as the 32 bit number: 2149583361.
 *
 * BEST SOLUTION:
 */

let ipToInt32 = (ip) => {
    return ip.split(".").reduce((int, v) => int * 256 + +v);
  }
  /**
   * NOTE: The solution above does some very elegant math and a bit of coercion.
   *
   * First, it you must know that each octect can contain 256 values (0 - 255)
   *
   * The author uses a shorthand to coerce both string values into numbers
   *     - `int*256`, the number on the right-hand side coerces the string of 'int'
   *     - `+v`, the addition operator coerces 'v'. Essentially `Number(v)`
   *
   * Last but not least, the author uses [Horner’s Method](https://en.wikipedia.org/wiki/Horner%27s_method)
   * Because 'int' is equivalent to the sum of the previous iteration, using reduce is an elegant way
   * to achieve...
   *
   * $oct1 * 256^3 + $oct2 * 256^2 + $oct3 * 256^1 + $oct4 * 256^0 = $decimal
   */

console.log(ipToInt32("128.32.10.1")); // 2149583361
