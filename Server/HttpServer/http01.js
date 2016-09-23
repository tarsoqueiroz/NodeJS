/**
 * Created by USER: tarso.
 * On         DATE: 16/08/16.
 * By         NAME: http01.js.
 */

const http = require('http');
const nPort = 3333;

const requestHandler = function (request, response) {
  console.log(request.url);
  response.end('Hello Node.js Server!')
};

const server = http.createServer(requestHandler);

server.listen(nPort, function (err) {
  if (err) {
    return console.log('something bad happened', err);
  }

  console.log(`server is listening on ${nPort}`);
});
