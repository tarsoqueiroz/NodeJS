/**
 * Created by USER: tarso.
 * On         DATE: 13/01/17.
 * By         NAME: httpd01.js.
 *
 * Source: https://serversforhackers.com/load-balancing-with-haproxy
 */

'use strict';

// File /srv/server.js
var http = require('http');

function serve(ip, port)
{
  http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write(JSON.stringify(req.headers));
    res.end("\n\n\nThere's no place like "+ip+":"+port+"\n");
  }).listen(port, ip);
  console.log('Server running at http://'+ip+':'+port+'/');
}

// Create three servers for
// the load balancer, listening on any
// network on the following three ports
serve('127.0.0.1', 9000);
serve('127.0.0.1', 9001);
serve('127.0.0.1', 9002);
