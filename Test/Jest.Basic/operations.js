/**
 * operations
 *
 * Created by tarso on 02/08/18
 */

const PI = 3.14159265358979;

function opSum(num1, num2) {
  return num1 + num2;
}

function opDiff(num1, num2) {
  return num1 - num2;
}

function opMultiply(num1, num2) {
  return num1 * num2;
}

module.exports = { PI, opSum, opDiff, opMultiply };
