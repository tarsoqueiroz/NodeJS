/**
 * Created by USER: tarso.
 * On         DATE: 28/06/17.
 * By         NAME: main-widgets.js.
 */

'use strict';

let express = require('express');
let router = express.Router();

router.all('*', (request, response, next) => {
  console.log('  Widgets endpoint 01:- before all routes -', request.url);
  next();
});

router.route('/')
  .get((request, response) => {
    // Retrieve all Widgets...
    response.json({ widgets: [
      { id: 1, name: 'get' },
      { id: 2, parm: request.params.id },
      { id: 3, url: request.url },
      { id: 4, originalUrl: request.originalUrl }
    ]
    });
  })
  .post((request, response) => {
    // Create a new Widget...
    response.json({ widgets: [
      { id: 1, name: 'post' },
      { id: 2, parm: request.params.id },
      { id: 3, url: request.url },
      { id: 4, originalUrl: request.originalUrl }
    ]
    });
  })
  .delete((request, response) => {
    // Delete all Widgets...
    response.json({ widgets: [
      { id: 1, name: 'delete' },
      { id: 2, parm: request.params.id },
      { id: 3, url: request.url },
      { id: 4, originalUrl: request.originalUrl }
    ]
    });
  });

router.all('*', (request, response, next) => {
  console.log('  Widgets endpoint 02:- after main route -', request.url);
  next();
});

router.route('/:id')
  .get((request, response) => {
    // Retrieve a single Widget...
    response.json({ widgets: [
      { id: 1, name: 'get' },
      { id: 2, parm: request.params.id },
      { id: 3, url: request.url },
      { id: 4, originalUrl: request.originalUrl }
    ]
    });
    // console.log(request)
  })
  .patch((request, response) => {
    // Update this Widget...
    response.json({ widgets: [
      { id: 1, name: 'patch' },
      { id: 2, parm: request.params.id },
      { id: 3, url: request.url },
      { id: 4, originalUrl: request.originalUrl }
    ]
    });
  })
  .delete((request, response) => {
    // Delete just this Widget...
    response.json({ widgets: [
      { id: 1, name: 'delete' },
      { id: 2, parm: request.params.id },
      { id: 3, url: request.url },
      { id: 4, originalUrl: request.originalUrl }
    ]
    });
  });

router.all('*', (request, response, next) => {
  console.log('  Widgets endpoint 01:- after all routes -', request.url);
  next();
});

module.exports = router;
