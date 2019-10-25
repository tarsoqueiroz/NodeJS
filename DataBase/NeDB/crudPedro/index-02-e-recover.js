// https://pedrohs.github.io/criando-banco-de-dados-com-nedb/

var nedb  = require('nedb');
var db    = new nedb( { filename: 'banco.db', autoload: true });

db.findOne({email: 'cati@email.com'}, function (err, users) {
  if (err) {
    return console.log(err);
  }
  console.log(users);
});
