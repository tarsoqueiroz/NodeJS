/**
 * app01a.js
 *
 * Created by tarso on 29/10/18
 */

const Web3 = require('web3');
const web3Node1 = new Web3(new Web3.providers.HttpProvider("http://10.15.20.117:18501"));
const web3Node2 = new Web3(new Web3.providers.HttpProvider("http://10.15.20.117:18502"));

function getNumberOfLastBlock(web3) {
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
  var lastBlockNode1 = getNumberOfLastBlock(web3Node1);
  var lastBlockNode2 = getNumberOfLastBlock(web3Node2);

  lastBlockNode1
    .then(result => {
      nLastBlockNode1 = result;
      console.log('nLastBlock in then node 1:', nLastBlockNode1);
    })
    .catch(error => {
      console.log(error);
    });
  lastBlockNode2
    .then(result => {
      nLastBlockNode2 = result;
      console.log('nLastBlock in then node 2:', nLastBlockNode2);
    })
    .catch(error => {
      console.log(error);
    });
}

var nLastBlockNode1 = 0;
var nLastBlockNode2 = 0;

console.log('On start the last block on node 1 is', nLastBlockNode1);
console.log('On start the last block on node 2 is', nLastBlockNode2);
main();
