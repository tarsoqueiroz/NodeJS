/**
 * Created by USER: tarso.
 * On         DATE: 24/11/16.
 * By         NAME: app02.js.
 *
 * Source     SITE: http://stackoverflow.com/questions/3862813/how-can-i-use-an-http-proxy-with-node-js-http-client
 */

var http = require("http");

var options = {
  host: "proxy0.celepar.parana",
  port: 8080,
  path: "/",
  headers: {
    Host: "www.google.com"
  }
};

http.get(options, function(res) {
  console.log(res);
  res.pipe(process.stdout);
});
