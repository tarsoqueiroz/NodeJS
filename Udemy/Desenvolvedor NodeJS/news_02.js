/**
 * Created by USER: tarso.
 * On         DATE: 09/05/17.
 * By         NAME: news_02.js.
 */

'use strict';

var http = require('http');

var server = http.createServer(function (req, res) {

  var optOption = req.url;

  if             (optOption == '/') {
    res.end('<html><body>News</body></html>');
  } else if        (optOption == '/tech') {
    res.end('<html><body>Technology</body></html>');
  } else if (optOption == '/iot') {
    res.end('<html><body>IoT</body></html>');
  } else if (optOption == '/bitcoin') {
    res.end('<html><body>Bitcoin</body></html>');
  } else {
    res.end('<html><body>OOOOOppppss: request not found!!!</body></html>');
  }
});

server.listen(3000);
