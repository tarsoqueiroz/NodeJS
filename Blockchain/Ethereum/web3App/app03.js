/**
 * app03
 *
 * Created by tarso on 26/10/18
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

console.log('web3 version............................:', web3.version);

new Promise(function (resolve, reject) {
  try {
    web3.eth.getAccounts(function (error, result) {
      if (error) {
        reject(new Error(error));
      } else {
        console.log('Accounts on this node...................:', result);
        resolve(result);
      }
    });
  } catch (e) {
    reject(e);
  }
});

new Promise((resolve, reject) => {
  web3.eth.getAccounts((error, result) => {
    if (error) {
      reject(console.log(new Error(error)));
    } else {
      resolve(console.log('Accounts on this node...................:', result));
    }
  });
});

//web3.eth.getProtocolVersion()
//  .then(console.log);
new Promise((resolve, reject) => {
  web3.eth.getProtocolVersion((error, result) => {
    if (error) {
      reject(console.log(new Error(error)));
    } else {
      resolve(console.log('Protocol version........................:', result));
    }
  });
});

//web3.eth.getCoinbase()
//  .then(console.log);
new Promise((resolve, reject) => {
  web3.eth.getCoinbase((error, result) => {
    if (error) {
      reject(console.log(new Error(error)));
    } else {
      resolve(console.log('Coinbase................................:', result));
    }
  });
});

new Promise((resolve, reject) => {
  web3.eth.isMining((error, result) => {
    if (error) {
      reject(console.log(new Error(error)));
    } else {
      resolve(console.log('Is mining...............................:', result));
    }
  });
});

new Promise((resolve, reject) => {
  web3.eth.getHashrate((error, result) => {
    if (error) {
      reject(console.log(new Error(error)));
    } else {
      resolve(console.log('Hash rate...............................:', result));
    }
  });
});

new Promise((resolve, reject) => {
  web3.eth.getGasPrice((error, result) => {
    if (error) {
      reject(console.log(new Error(error)));
    } else {
      resolve(console.log('Gas price...............................:', result));
    }
  });
});

new Promise((resolve, reject) => {
  web3.eth.getBlockNumber((error, result) => {
    if (error) {
      reject(console.log(new Error(error)));
    } else {
      resolve(console.log('Block number............................:', result));
    }
  });
});

new Promise((resolve, reject) => {
  web3.eth.getTransaction('0x7c89c69758302905f1ca3fda85c7af833ca9e7c36349a3a8574197183d4e60bd', (error, result) => {
    if (error) {
      reject(console.log(new Error(error)));
    } else {
      resolve(console.log('Block number............................:', result));
    }
  });
});
