/**
 * sum.test.js
 *
 * Created by tarso on 02/08/18
 */

const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});