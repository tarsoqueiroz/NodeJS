/**
 * app00a
 *
 * Created by tarso on 25/10/18
 */

const Web3 = require('web3');
const util = require('util');
const web3 = new Web3(new Web3.providers.HttpProvider("http://10.15.20.117:18501"));

var lastBlock = -1;

web3.eth.getBlockNumber(function (error, result) {
  if (!error) {
    console.log('Current block:', result);
  } else {
    console.log(error);
  }
});

var blocksOfChain = {};

web3.eth.getBlock('latest', function (error, result) {
  if (!error) {
    for (var nSx1 = 0; nSx1 <= result.number; nSx1++) {
      web3.eth.getBlock(nSx1, function (error, result) {
        if (!error) {
          blocksOfChain[result.number] = JSON.parse(util.format('{"hash":"%s","parentHash":"%s"}',
            result.hash, result.parentHash));
          console.log(blocksOfChain);
        } else {
          console.log(error);
        }
      });
    }
  } else {
    console.log(error);
  }
});
