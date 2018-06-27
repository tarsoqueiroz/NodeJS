/**
 * index-02.js
 *
 * Created by tarso on 26/06/18
 * Source: https://github.com/nbluis/static-server
 */

const HTTP_PORT = process.env.HTTP_PORT || 8080; // $ HTTP_PORT=8080 npm run dev
const StaticServer = require('static-server');
const srvStaticHTTP = new StaticServer({
  rootPath: __dirname + '/public',     // required, the root of the srvStaticHTTP file tree
  port: HTTP_PORT,                     // required, the port to listen
  name: 'my-static-http-server',       // optional, will set "X-Powered-by" HTTP header
  host: '10.15.20.117',                // optional, defaults to any interface
  cors: '*',                           // optional, defaults to undefined
  followSymlink: true,                 // optional, defaults to a 404 error
  templates: {
    index: 'index.html',               // optional, defaults to 'index.html'
    notFound: '404.html'               // optional, defaults to undefined
  }
});

srvStaticHTTP.start(function () {
  console.log('Server listening to', HTTP_PORT);
});

srvStaticHTTP.on('request', function (req, res) {
  // req.path is the URL resource (file name) from srvStaticHTTP.rootPath
  // req.elapsedTime returns a string of the request's elapsed time
  console.log('request:');
});

srvStaticHTTP.on('symbolicLink', function (link, file) {
  // link is the source of the reference
  // file is the link reference
  console.log('File', link, 'is a link to', file);
});

srvStaticHTTP.on('response', function (req, res, err, file, stat) {
  // res.status is the response status sent to the client
  // res.headers are the headers sent
  // err is any error message thrown
  // file the file being served (may be null)
  // stat the stat of the file being served (is null if file is null)

  // NOTE: the response has already been sent at this point
  console.log('response:');
});

console.log('node-static running at http://localhost:%d', HTTP_PORT);