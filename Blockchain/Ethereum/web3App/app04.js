/**
 * app04
 *
 * Created by tarso on 30/10/18
 */

const Web3 = require('web3');
const util = require('util');
const web3N0 = new Web3(new Web3.providers.HttpProvider("http://10.15.20.117:8545"));
const web3N1 = new Web3(new Web3.providers.HttpProvider("http://10.15.20.117:18545"));
const web3N2 = new Web3(new Web3.providers.HttpProvider("http://10.15.20.117:28545"));

console.log('*** Node Info ***\n');
console.log(web3N0.utils.toHex(21000));

var defaultBlock = web3N0.eth.defaultBlock;
console.log(defaultBlock); // 'latest'

var coinbase = web3N0.eth.coinbase;
console.log(coinbase); // "0x407d73d8a49eeb85d32cf465507dd71d507100c1"
var mining = web3N0.eth.mining;
console.log(mining); // true or false
var accounts = web3N0.eth.accounts;
console.log(accounts); // ["0x407d73d8a49eeb85d32cf465507dd71d507100c1"]

/*

function getNodeInfo(web3Node) {
  return new Promise(function (resolve, reject) {
    try {
      web3Node.admin(function (error, result) {
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

const infoNode0 = getNodeInfo(web3N0);
const infoNode1 = getNodeInfo(web3N1);
const infoNode2 = getNodeInfo(web3N2);

infoNode0.eth.getProtocolVersion()
  .then(console.log);

infoNode0.eth()
  .then(console.log);

infoNode0
  .then(result => {
    console.log('About Node 0: \n', nLastBlockNode0);
  })
  .catch(error => {
    console.log(error);
  });
infoNode1
  .then(result => {
    console.log('About Node 1: \n', nLastBlockNode1);
  })
  .catch(error => {
    console.log(error);
  });
infoNode2
  .then(result => {
    console.log('About Node 2: \n', nLastBlockNode2);
  })
  .catch(error => {
    console.log(error);
  });
*/