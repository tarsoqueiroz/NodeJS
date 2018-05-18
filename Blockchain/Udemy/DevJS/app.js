
let Block = require('./block')
let Blockchain = require('./blockchain')
let Transaction = require('./transaction')

let transaction = new Transaction('Mary','Jerry',100)
console.log('\nlog 01', transaction)

let genesisBlock = new Block()
console.log('\nlog 02', genesisBlock)
let blockchain = new Blockchain(genesisBlock)
console.log('\nlog 03', blockchain)

let block = blockchain.getNextBlock([transaction])
console.log('\nlog 04', block)
blockchain.addBlock(block)
console.log('\nlog 05', blockchain)

let anotherTransaction = new Transaction("Azam","Jerry",10)
console.log('\nlog 06', anotherTransaction)
let block1 = blockchain.getNextBlock([anotherTransaction,transaction])
console.log('\nlog 07', block1)
blockchain.addBlock(block1)
console.log('\nlog 08', blockchain)