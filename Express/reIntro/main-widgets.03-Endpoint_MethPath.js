/**
 * Created by USER: tarso.
 * On         DATE: 28/06/17.
 * By         NAME: main-widgets.js.
 */

'use strict';

let express = require('express');
let router = express.Router();

router.route('/')
  .get((request, response) => {
    // Retrieve all Widgets...
    response.json({ widgets: [
      { id: 1, name: 'get' },
      { id: 2, name: request.url }
    ]
    });
  })
  .post((request, response) => {
    // Create a new Widget...
    response.json({ widgets: [
      { id: 1, name: 'post' },
      { id: 2, name: request.url }
    ]
    });
  })
  .delete((request, response) => {
    // Delete all Widgets...
    response.json({ widgets: [
      { id: 1, name: 'delete' },
      { id: 2, name: request.url }
    ]
    });
  });

router.route('/:id')
  .get((request, response) => {
    // Retrieve a single Widget...
    response.json({ widgets: [
      { id: 1, name: 'get' },
      { id: 2, name: request.params.id },
      { id: 3, name: request.url }
    ]
    });
  })
  .patch((request, response) => {
    // Update this Widget...
    response.json({ widgets: [
      { id: 1, name: 'patch' },
      { id: 2, name: request.params.id },
      { id: 3, name: request.url }
    ]
    });
  })
  .delete((request, response) => {
    // Delete just this Widget...
    response.json({ widgets: [
      { id: 1, name: 'delete' },
      { id: 2, name: request.params.id },
      { id: 3, name: request.url }
    ]
    });
  });

module.exports = router;
