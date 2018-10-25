/**
 * app02
 *
 * Created by tarso on 24/10/18
 */

const Web3 = require('web3');
const util = require('util');
const web3 = new Web3(new Web3.providers.HttpProvider("http://10.15.20.117:18501"));

function getQtyOfBlocks() {
  return new Promise(function (resolve, reject) {
    try {
      web3.eth.getBlockNumber(function (error, result) {
        if (error) {
          reject(new Error(error));
        } else {
          resolve(result);
        }
      });
    } catch (e) {
      reject(e);
    }
  });
}

function getBlockOfChain(nNumOfBlock) {
  return new Promise(function (resolve, reject) {
    try {
      web3.eth.getBlock(nSx1, function (error, result) {
        if (error) {
          reject(new Error(error));
        } else {
          resolve(result.number, result.parentHash, result.hash);
        }
      });
    } catch (e) {
      reject(e);
    }
  });
}

var nLastBlock = 0;
var lastBlock = getQtyOfBlocks();

console.log('Get qty of blocks 1');
nLastBlock = lastBlock
  .then(result => {
    console.log('1) The Blockchain has', result, 'blocks!!!');
    return (result);
  })
  .catch(error => {
    console.log(error);
  });

console.log('Get qty of blocks 2');
getQtyOfBlocks()
  .then(result => {
    console.log('2) The Blockchain has', result, 'blocks!!!');
    return (result);
  })
  .catch(error => {
    console.log(error);
  });

console.log('Ending');
