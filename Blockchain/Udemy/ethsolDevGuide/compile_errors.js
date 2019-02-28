/**
 * compile.js
 *
 * Created by tarso on 04/12/18
 */

// require('./contracts/Inbox.sol'); // bad!!!
const path = require('path'); // Cross platform compatibility
const fs = require('fs');

const solc = require('solc');

const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');
const source = fs.readFileSync(inboxPath, 'utf8');

/* solc.compile(source, 1).errors.forEach(message => {
  console.log(message);
}); */
console.log(solc.compile(source, 1));
