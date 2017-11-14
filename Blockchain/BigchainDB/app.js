/**
 * Created by USER: tarso.
 * On         DATE: 13/11/17.
 * By         NAME: app.js.
 */

'use strict';

// const API_PATH = 'http://localhost:59984/api/v1/'

// Ed25519Keypair {
//   publicKey:  '2ZyCtyZXHJt2jN83HtSMeM7LiM6v2XzbcFvwZFveSLVN',
//   privateKey: '8D4wh3zR7XjRfS6KRfdX5Y7QPvhiwjfTzAZwsM6MdS2s' }

const driver = require('bigchaindb-driver')

// BigchainDB server instance or IPDB (e.g. https://test.ipdb.io/api/v1/)
const API_PATH = 'http://localhost:59984/api/v1/'

// Create a new keypair.
let alice = new driver.Ed25519Keypair()
alice.publicKey = '2ZyCtyZXHJt2jN83HtSMeM7LiM6v2XzbcFvwZFveSLVN'
alice.privateKey = '8D4wh3zR7XjRfS6KRfdX5Y7QPvhiwjfTzAZwsM6MdS2s'

// Construct a transaction payload
const tx = driver.Transaction.makeCreateTransaction(
  // Define the asset to store, in this example it is the current temperature
  // (in Celsius) for the city of Berlin.
  { city: 'Brasilia, DF, BR', temperature: 27, datetime: new Date().toString() },

  // Metadata contains information about the transaction itself
  // (can be `null` if not needed)
  { what: 'My first BigchainDB transaction' },

  // A transaction needs an output
  [ driver.Transaction.makeOutput(
    driver.Transaction.makeEd25519Condition(alice.publicKey))
  ],
  alice.publicKey
)

console.log('tx')
console.log(tx)

// Sign the transaction with private keys
const txSigned = driver.Transaction.signTransaction(tx, alice.privateKey)

console.log("txSigned")
console.log(txSigned)

// Send the transaction off to BigchainDB
const conn = new driver.Connection(API_PATH)

conn.postTransaction(txSigned)
  .then(() => conn.pollStatusAndFetchTransaction(txSigned.id))
  .then(retrievedTx => console.log('Transaction', retrievedTx.id, 'successfully posted.'))
