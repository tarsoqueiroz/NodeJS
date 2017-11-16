/**
 * Created by USER: tarso.
 * On         DATE: 14/11/17.
 * By         NAME: aux01-Keypar.js.
 */

'use strict';

const bgxain = require('bigchaindb-driver')
const bip39  = require('bip39')

var strBip39  = bip39.mnemonicToSeed("password from tarso").slice(0, 32)
var aKeyPair1 = new bgxain.Ed25519Keypair(bip39.mnemonicToSeed("password from tarso").slice(0, 32))
var aKeyPair2 = new bgxain.Ed25519Keypair(bip39.mnemonicToSeed("Password from tarso").slice(0, 32))

console.log(strBip39)
console.log(aKeyPair1)
console.log(aKeyPair2)
