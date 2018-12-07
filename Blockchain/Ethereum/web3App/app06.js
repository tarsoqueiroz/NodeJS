/**
 * app06.js
 *
 * Created by tarso on 28/11/18
 */

const Web3 = require('web3');

// connect to any peer; using infra here
const web3 = new Web3(new Web3.providers.HttpProvider("http://10.15.20.117:28545"));

const bikeContract = require('./smartContract/json/Bike');
const bikeInterface = new web3.eth.Contract(bikeContract.contracts['src/Bike.sol:Bike'].abi);

console.log('\n*** Bike.ABI ***\n', bikeContract.contracts['src/Bike.sol:Bike'].abi);
console.log('\n*** Bike.ABI ***\n0x'+bikeContract.contracts['src/Bike.sol:Bike'].bin);
console.log('\n*** Bike Interface ***\n', bikeInterface);

// Keystore from account on Nodes
/*
const keyN00Acc0 = require('./accountKeys/node00account0');
const keyN00Acc1 = require('./accountKeys/node00account1');
const keyN01Acc0 = require('./accountKeys/node01account0');
const keyN01Acc1 = require('./accountKeys/node01account1');
const keyN02Acc0 = require('./accountKeys/node02account0');
const keyN02Acc1 = require('./accountKeys/node02account1');

console.log(keyNode00Account0.address);
console.log(keyNode00Account1.address);
console.log(keyNode01Account0.address);
console.log(keyNode01Account1.address);
console.log(keyNode02Account0.address);
console.log(keyNode02Account1.address);
  */
const keyBikeOwner = require('./accountKeys/node00account0-Pretty');
console.log('\n*** Keystore from Bike Owner (eth.accounts[0]) ***\n', keyBikeOwner.address);

const decAccountOwner = web3.eth.accounts.decrypt(keyBikeOwner, 'changeit');
console.log('\n*** Bike Owner Private Key ***\n', decAccountOwner.privateKey);




