/**
 * Created by USER: tarso.
 * On         DATE: 09/05/17.
 * By         NAME: news_01.js.
 */

'use strict';

var http = require('http');

var server = http.createServer(function (req, res) {

  res.end('<html><body>Notícias</body></html>');

});

server.listen(3000);
