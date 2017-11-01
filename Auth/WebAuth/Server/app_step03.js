/**
 * Created by USER: tarso.
 * On         DATE: 01/11/17.
 * By         NAME: app.js.
 */

'use strict';

//npm modules
const express = require('express');

// create the server
const app = express();

// tell the server what port to listen on
app.listen(3000, () => {
  console.log('Listening on localhost:3000')
})