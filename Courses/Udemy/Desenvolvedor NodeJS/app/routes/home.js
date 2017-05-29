/**
 * Created by USER: tarso.
 * On         DATE: 09/05/17.
 * By         NAME: home.js.
 */

'use strict';

module.exports = function (app) {

  app.get('/', function(req, res) {
    res.render('home/index');
  });

};
