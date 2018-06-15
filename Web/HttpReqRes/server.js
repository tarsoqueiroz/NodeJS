/**
 * server.js
 *
 * Coded by    : tarso on 15/06/18
 * Source from : https://fullstack-developer.academy/how-do-you-extract-post-data-in-node-js/
 */

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) =>  res.sendFile(`${__dirname}/index.html`));

app.post('/api/data', (req, res) => {
  const postBody = req.body;
  console.log(postBody);

//  res.redirect('back');
  res.send("<p>Thank's</p>");
  res.end();
});

app.listen(3000, () => console.info('Application running on port 3000'));