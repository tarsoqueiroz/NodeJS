/**
 * index.js
 *
 * Created by tarso on 26/06/18
 * Source:
 */

const HTTP_PORT = process.env.HTTP_PORT || 8443; // $ HTTP_PORT=8443 npm run dev

const http2 = require('http2');
const fs = require('fs');
const path = require('path');
const mime = require('mime-types');

const {
  HTTP2_HEADER_PATH,
  HTTP2_HEADER_METHOD,
  HTTP_STATUS_NOT_FOUND,
  HTTP_STATUS_INTERNAL_SERVER_ERROR
} = http2.constants;

const options = {
  key:  fs.readFileSync('./certificates/server.key.pem'),
  cert: fs.readFileSync('./certificates/server.crt.pem'),
  ca: fs.readFileSync('./certificates/ca.crt.pem')
}

const server = http2.createSecureServer(options);

const serverRoot = "./public";

function respondToStreamError(err, stream) {
  console.log(err);
  if (err.code === 'ENOENT') {
    stream.respond({ ":status": HTTP_STATUS_NOT_FOUND });
  } else {
    stream.respond({ ":status": HTTP_STATUS_INTERNAL_SERVER_ERROR });
  }
  stream.end();
}

server.on('stream', (stream, headers) => {
  const reqPath = headers[HTTP2_HEADER_PATH];
  const reqMethod = headers[HTTP2_HEADER_METHOD];

  const fullPath = path.join(serverRoot, reqPath);
  const responseMimeType = mime.lookup(fullPath);

  stream.respondWithFile(fullPath, {
    'content-type': responseMimeType
  }, {
    onError: (err) => respondToStreamError(err, stream)
  });


});
server.listen(HTTP_PORT);

console.log('HTTP/2 Static Server running at https://ecelepar:%d', HTTP_PORT);