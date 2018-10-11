const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
// const web3 = new Web3(ganache.provider());
const web3 = new Web3(new Web3.providers.HttpProvider("http://172.17.0.2:8545"));
const { iface, bytecode } = require('../compile');
const contrato = require('../compile');

let accounts;
let inbox;

console.log(iface);
console.log(bytecode);
console.log(contrato);

beforeEach(async () => {
  // Get a list of all accounts
  accounts = await web3.eth.getAccounts();

  // Use one of those accounts to deploy
  // the contract
  inbox = await new web3.eth.Contract(JSON.parse(iface))
    .deploy({ data: bytecode, arguments: ['Hi there!'] })
    .send({ from: accounts[0], gas: '1000000' });
});

describe('Inbox', () => {
  it('deploys a contract', () => {
    console.log(inbox);
  });
});
