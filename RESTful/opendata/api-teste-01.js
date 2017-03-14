/**
 * Created by USER: tarso.
 * On         DATE: 13/03/17.
 * By         NAME: api-teste-01.js.
 */

'use strict';

const PORT = process.env.HTTPD_PORT || 8888;
const SERVER_NAME = process.env.HTTPD_SNAME || "DA API Server";

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

app.get("/", function(req, res) {
//  res.json({
//    status: "Page from DA API is alive!"
//  });

  res.writeHead(200, {"Content-Type": "text/html"});
  res.write("<html>");
  res.write("<head>");
  res.write("<script type='text/javascript'>");
  res.write("function foo(response) {");
//  res.write("var meta = response.meta;");
  res.write("var data = response.data;");
  res.write("console.log('Teste');");
  res.write("console.log(data);");
  res.write("}");
  res.write("var script = document.createElement('script');");
  res.write("script.src = 'http://10.15.20.117:8888/data';");
  res.write("document.getElementsByTagName('head')[0].appendChild(script);");
  res.write("</script>");
  res.write("</head>");
  res.write("<body>");
  res.write("<p>Open up your browser's console now.</p>");
  res.write("</body>");
  res.write("</html>");
  res.end();
});

app.get("/data", function(req, res) {
  var dtDate = new Date();
  res.set("X-Powered-By", "DA-API Server");
  res.set("Date", dtDate.toISOString());
  res.json({
    "data": [{
      "id": 1,
      "name": "Tim Berners-Lee",
      "age": 61
    }, {
      "id": 2,
      "name": "Ada Lovelace",
      "age": 36
    }, {
      "id": 3,
      "name": "Roy Fielding"
    }]
  });
});

app.listen(PORT, function() {
  console.log('Running "%s" on http://localhost:%d started at %s', SERVER_NAME, PORT, Date());
});

module.exports = app;
