/**
 * Created by USER: tarso.
 * On         DATE: 13/01/17.
 * By         NAME: index03.js.
 */

/**
 * Ref.: https://medium.com/@imjacobclark/http-2-with-node-js-85da17322812#.ahnzpycje
 */
'use strict';

const port = 3333;

let spdy = require('spdy'),
  fs = require('fs');

let options = {
  key: fs.readFileSync(__dirname + '/server.key'),
  cert:  fs.readFileSync(__dirname + '/server.crt')
};

spdy.createServer(options, function(req, res) {
  let stream = res
    .push('/main.js', {
      request: {
        accept: '*/\*'
      },
      response: {
        'content-type': 'application/javascript'
      }
    })
    .end('console.log("Hello World in HTTP2");');

  res.writeHead(200);
  res.end('<script src="/main.js"></script>');
}).listen(port);

