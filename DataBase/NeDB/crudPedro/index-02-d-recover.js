// https://pedrohs.github.io/criando-banco-de-dados-com-nedb/

var nedb  = require('nedb');
var db    = new nedb( { filename: 'banco.nedb', 
                        autoload: true,
                        timestampData: true,
                        flushDataOnCompaction: true });

db.find({email: 'pedro@email.com'}, function (err, users) {
  if (err) {
    return console.log(err);
  }
  console.log(users);
});
