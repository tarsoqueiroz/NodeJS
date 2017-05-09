/**
 * Created by USER: tarso.
 * On         DATE: 09/05/17.
 * By         NAME: news.js.
 */

'use strict';

module.exports = function (app) {

  app.get('/news', function(req, res) {
    res.render('news/news');
  });

};
