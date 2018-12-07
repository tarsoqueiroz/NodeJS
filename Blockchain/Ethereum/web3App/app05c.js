/**
 * app05c
 *
 * Created by tarso on 29/11/18
 */
const Web3 = require('web3');

const web3 = new Web3(new Web3.providers.HttpProvider("http://10.15.20.117:8545"));

const keyN00Acc0 = require('./accountKeys/node00account0');
const keyN00Acc1 = require('./accountKeys/node00account1');
const keyN01Acc0 = require('./accountKeys/node01account0');
const keyN01Acc1 = require('./accountKeys/node01account1');
const keyN02Acc0 = require('./accountKeys/node02account0');
const keyN02Acc1 = require('./accountKeys/node02account1');

const decryptedN00Acc0 = web3.eth.accounts.decrypt(keyN00Acc0, 'changeit');
const decryptedN00Acc1 = web3.eth.accounts.decrypt(keyN00Acc1, 'changeit');
const decryptedN01Acc0 = web3.eth.accounts.decrypt(keyN01Acc0, 'changeit');
const decryptedN01Acc1 = web3.eth.accounts.decrypt(keyN01Acc1, 'changeit');
const decryptedN02Acc0 = web3.eth.accounts.decrypt(keyN02Acc0, 'changeit');
const decryptedN02Acc1 = web3.eth.accounts.decrypt(keyN02Acc1, 'changeit');

console.log('Node00Acc0:', decryptedN00Acc0);
console.log('Node00Acc0:', decryptedN00Acc0.address, '-', decryptedN00Acc0.privateKey);
console.log('Node00Acc1:', decryptedN00Acc1.address, '-', decryptedN00Acc1.privateKey);
console.log('Node01Acc0:', decryptedN01Acc0.address, '-', decryptedN01Acc0.privateKey);
console.log('Node01Acc1:', decryptedN01Acc1.address, '-', decryptedN01Acc1.privateKey);
console.log('Node02Acc0:', decryptedN02Acc0.address, '-', decryptedN02Acc0.privateKey);
console.log('Node02Acc1:', decryptedN02Acc1.address, '-', decryptedN02Acc1.privateKey);
