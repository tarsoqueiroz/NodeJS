/**
 * deploySC.js
 *
 * Created by tarso on 07/12/18
 */

const { interface, bytecode } = require('./compile');

const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider("http://10.15.20.117:8545"));

const deploySC = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ['Hi there!']})
    .send({ gas: '1000000', from: accounts[0]});

  console.log('Contract deployed to', result.options.address);
};

deploySC();

