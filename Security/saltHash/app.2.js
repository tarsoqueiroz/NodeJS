/**
 * Sample test of password hash with salt (v1.0)
 * 
 * Source: https://hptechblogs.com/password-hashing-in-node-js-using-the-pbkdf2-in-crypto-library/
 */

'use strict';
const crypto = require('crypto');

/**
 * Create password hash using Password based key derivative function 2
 * @function
 * @param {string} password - Password to hash.
 */
function hashPassword(password) {
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto.pbkdf2Sync(password, salt, 2048, 32, 'sha512').toString('hex');
  return [salt, hash].join('$');
}

/**
 * Checking the password hash
 * @function
 * @param {string} password - Password to hash.
 */
function verifyHash(password, original) {
  const originalHash = original.split('$')[1];
  const salt = original.split('$')[0];
  const hash = crypto.pbkdf2Sync(password, salt, 2048, 32, 'sha512').toString('hex');

  return hash === originalHash
}

/**
 * Test code
 */
let hash1 = hashPassword('test');
let hash2 = hashPassword('test');
console.log('HASH1 = ' + hash1);
console.log('HASH2 = ' + hash2);
console.log('pass "test"  with hash of "test" -->', verifyHash('test',  hash1)); // will return true
console.log('pass "test"  with hash of "test" -->', verifyHash('test',  hash2)); // will return true
console.log('pass "test1" with hash of "test" -->', verifyHash('test1', hash1)); // will return false
console.log('pass "test1" with hash of "test" -->', verifyHash('test1', hash2)); // will return false
