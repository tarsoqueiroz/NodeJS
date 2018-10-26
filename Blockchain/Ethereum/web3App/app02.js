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

function getBlockOfChain(nNumOfBlock, nLastBlock, jsonBlocks) {
  return new Promise(function (resolve, reject) {
    try {
      web3.eth.getBlock(nNumOfBlock, function (error, result) {
        if (error) {
          reject(new Error(error));
        } else {
          jsonBlocks[nNumOfBlock] = JSON.parse(util.format('{"hash":"%s","parentHash":"%s"}', result.hash, result.parentHash));
          if (nNumOfBlock < nLastBlock) {
            getBlockOfChain(nNumOfBlock + 1, nLastBlock, jsonBlocks);
          } else {
            // console.log(jsonBlocks);
            resolve(jsonBlocks);
          }
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
    console.log('1) The Blockchain has', result, 'blocks on chain!!!');
    return (result);
  })
  .catch(error => {
    console.log(error);
  });

console.log('Get qty of blocks 2');
getQtyOfBlocks()
  .then(blocksInChain => {
    var nLastBlock = blocksInChain;
    var nBlock = 0;
    var jsonBlockChain = {};

    console.log('Starting get blocks...');
    getBlockOfChain(nBlock, nLastBlock, jsonBlockChain)
      .then (blockChain => {
        console.log('2) The Blockchain is ');
        console.log(blockChain);
        return (blockChain);
      })
      .catch(error => {
        console.log(error);
      });
  })
  .catch(error => {
    console.log(error);
  });

console.log('Ending');
