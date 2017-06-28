/**
 * Created by USER: tarso.
 * On         DATE: 28/06/17.
 * By         NAME: main-widgets.js.
 */

'use strict';

let express = require('express');
let router = express.Router();

router.get('/', (request, response) => {
  response.json({ widgets: [
                    { id: 1, name: 'foo' },
                    { id: 2, name: 'bar' },
                    { id: 3, name: request.url }
                  ]
                });
});

module.exports = router;
