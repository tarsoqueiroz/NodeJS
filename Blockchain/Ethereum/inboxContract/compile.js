/**
 * compile
 *
 * Created by tarso on 10/10/18
 */

const path = require('path');
const fs   = require('fs');
const solc = require('solc');

const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');
const source = fs.readFileSync(inboxPath, 'utf8');

// console.log(solc.compile(source, 1));
module.exports = solc.compile(source, 1).contracts[':Inbox'];

