/**
 * Created by USER: tarso.
 * On         DATE: 09/05/17.
 * By         NAME: addnews.js.
 */

'use strict';

module.exports = function (app) {

  app.get('/addnews', function(req, res) {
    res.render('admin/addnews');
  });

};
