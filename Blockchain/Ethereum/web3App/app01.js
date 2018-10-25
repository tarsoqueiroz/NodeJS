/**
 * app01
 *
 * Created by tarso on 24/10/18
 */

const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider("http://10.15.20.117:18501"));

function getNumberOfLastBlock() {
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


function main() {
  var lastBlock = getNumberOfLastBlock();

  lastBlock
    .then(result => {
      nLastBlock = result;
      console.log('nLastBlock in then 1:', nLastBlock);
    })
    .catch(error => {
      console.log(error);
    });
}

var nCurrentBlock = 0;
var nLastBlock = 0;

console.log('On start the last block is', nLastBlock);
main();
