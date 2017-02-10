/**
 * Created by USER  : tarso.
 * On         DATE  : 08/02/17.
 * By         NAME  : httpd03.js.
 *
 * Source reference : https://developer.github.com/v3/#json-p-callbacks
 */

'use strict';

// Modules
const express = require('express');

// Constants
const PORT = process.env.HTTPD_PORT || 8080;
const SERVER_NAME = process.env.HTTPD_SNAME || "Noname Server";

// App
const app = express();

app.get('/', function (req, res) {
  console.log(req.headers);
  res.send((`
<html>
<head>
<script type="text/javascript">
function foo(response) {
  var meta = response.meta;
  var data = response.data;
  console.log(meta);
  console.log(data);
}

var script = document.createElement('script');
script.src = 'http://10.15.20.117:8080/foo';

document.getElementsByTagName('head')[0].appendChild(script);
</script>
</head>

<body>
  <p>Open up your browser's console.</p>
</body>
</html>
`));
});

app.get('/foo', function (req, res) {
  res.send(`
/**/foo({
  "meta": {
    "status": 200,

    "X-RateLimit-Limit": "5000",
    "X-RateLimit-Remaining": "4966",
    "X-RateLimit-Reset": "1372700873",

    "Link": [ // pagination headers and other links
      ["https://api.github.com?page=2", {"rel": "next"}]
    ]
  },
  "data": {
    "name": "Tarso",
    "surname": "Queiroz"
    // the data
  }
})
`);
});

app.listen(PORT);
console.log('Running "%s" on http://localhost:%d started at %s', SERVER_NAME, PORT, Date());
