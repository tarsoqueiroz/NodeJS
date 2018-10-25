/**
 * app00
 *
 * Created by tarso on 23/10/18
 */

const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider("http://10.15.20.117:18501"));

var lastBlock = -1;

console.log('Current block:', web3.eth.blockNumber);

web3.eth.getBlock('latest', function (error, result) {
  if (!error) {
    console.log(result.number);
    for (var nSx1 = 0; nSx1 <= result.number; nSx1++) {
      web3.eth.getBlock(nSx1, function (error, result) {
        if (!error) {
          console.log('Block      :', result.number);
          console.log('Parent hash:', result.parentHash);
          console.log('Hash       :', result.hash);
          console.log('------------');
        } else {
          console.log(error);
        }
      });
    }
  } else {
    console.log(error);
  }
});

web3.eth.getBlockNumber(function (error, result) {
  if (!error) {
    console.log('Current block:', result);
  } else {
    console.log(error);
  }
});
