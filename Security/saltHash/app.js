/**
 * Sample test of password hash with salt (v2.0)
 * 
 * Source: https://hptechblogs.com/password-hashing-in-node-js-using-the-pbkdf2-in-crypto-library/
 */

'use strict';
const crypto = require('crypto');

/**
 * Create password hash using Password based key derivative function 2
 * 
 * @function
 * @param {string} password - Password to hash.
 */
function hashPassword(strPassword) {
  const strSalt = crypto.randomBytes(16).toString('hex');
  const nIterations = 2048;
  const nKeyLen = 32;
  const strDigest = 'sha512';
  const hashPass = crypto.pbkdf2Sync(strPassword, strSalt, nIterations, nKeyLen, strDigest).toString('hex');

  return {
    hash: hashPass,
    salt: strSalt,
    iterations: nIterations,
    keylen: nKeyLen,
    digest: strDigest
  }
}

/**
 * Checking the password hash
 * @function
 * @param {string} password - Password to hash.
 */
function verifyHash(strPass, hashOriginal) {
  const hash = crypto.pbkdf2Sync(strPass,
                                 hashOriginal.salt,
                                 hashOriginal.iterations,
                                 hashOriginal.keylen,
                                 hashOriginal.digest).toString('hex');

  return hash === hashOriginal.hash;
}

/**
 * Test code
 */
let hash1 = hashPassword('test');
let hash2 = hashPassword('test');
console.log('HASH1 = ', hash1);
console.log('HASH2 = ', hash2);
console.log('pass "test"  with hash of "test" -->', verifyHash('test',  hash1)); // will return true
console.log('pass "test"  with hash of "test" -->', verifyHash('test',  hash2)); // will return true
console.log('pass "test1" with hash of "test" -->', verifyHash('test1', hash1)); // will return false
console.log('pass "test1" with hash of "test" -->', verifyHash('test1', hash2)); // will return false
