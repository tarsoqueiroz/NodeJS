/**
 * index.js
 *
 * Created by tarso on 26/06/18
 * Source: https://docs.nodejitsu.com/articles/HTTP/servers/how-to-serve-static-files/
 */

const fs = require('fs');
const http = require('http');
const HTTP_PORT = process.env.HTTP_PORT || 8080; // $ HTTP_PORT=8080 npm run dev

http.createServer(function (req, res) {
  fs.readFile(__dirname + req.url, function (err,data) {
    if (err) {
      res.writeHead(404);
      res.end(JSON.stringify(err));
      console.log(err);
      return;
    }
    res.writeHead(200);
    res.end(data);
  });
}).listen(HTTP_PORT);
console.log('Server listenin on port', HTTP_PORT);