/**
 * app04
 *
 * Created by tarso on 30/10/18
 */

const Web3 = require('web3');
const util = require('util');
const web3 = new Web3(new Web3.providers.HttpProvider("http://10.15.20.117:18501"));

let accounts;

async() => {
  accounts = await web3.eth.getAccounts();
}

console.log(accounts);