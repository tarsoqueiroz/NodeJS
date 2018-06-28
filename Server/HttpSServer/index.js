/**
 * index.js
 *
 * Created by tarso on 28/06/18
 * Source: https://gist.github.com/alvarow/0377eb3ffec534428135eec1ea80ba9f
 */

const https = require('https');
const fs = require('fs');

const options = {
  passphrase: 'serverphrase',
//  dhparam: fs.readFileSync('./certificates/dhparam.pem'),
  key: fs.readFileSync('./certificates/server.key'),
  cert: fs.readFileSync('./certificates/server.crt'),
  ca: fs.readFileSync('./certificates/ca.crt')
};

https.createServer(options, (req, res) => {

  res.writeHead(200);
  res.end('hello world\n');
}).listen(8443);