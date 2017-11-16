/**
 * Created by USER: tarso.
 * On         DATE: 14/11/17.
 * By         NAME: bgxain01.js.
 */

'use strict'

const config = require('./bgxain.json')
const rtkdb = require('rethinkdb')

let promisseRtkdb = rtkdb.db('bigchain').connect({host: config.host, port: config.port})
let connRtkdb = null

promisseRtkdb
  .then(function (conn) {
    console.log('Connected to RethinkDB of BigchainDB...')
    connRtkdb = conn

    console.log(connRtkdb)

    connRtkdb.close(function (error) {
      if (error) {
        throw error
      }
      else {
        console.log('Disconnected from RethinkDB of BigchainDB...')
      }
    })
  })
  .error(function (error) {
    throw error
  })
