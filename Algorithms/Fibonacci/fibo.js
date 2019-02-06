/**
 * fibo.js
 *
 * Author: tarso
 * Date  : 06/02/19
 * Source:
 */
'use strict';

// Method 0
const fibonacciM0 = (i) => {
  if (i <= 1) {
    return i;
  } else {
    return fibonacciM0(i - 1) + fibonacciM0(i - 2);
  }
};

// Method 1
const fibonacciM1 = i => (i <= 1 ? i : fibonacciM1(i - 1) + fibonacciM1(i - 2));

// Go
console.log('Method 0');
for (let nSx1 = 0; nSx1 <= 10; nSx1++) {
  console.log(`Fibonacci [${ nSx1 }]:`, fibonacciM0(nSx1)); // template string
};

console.log('Method 1');
for (let nSx1 = 0; nSx1 <= 10; nSx1++) {
  console.log(`Fibonacci [${ nSx1 }]:`, fibonacciM1(nSx1)); // template string
};
