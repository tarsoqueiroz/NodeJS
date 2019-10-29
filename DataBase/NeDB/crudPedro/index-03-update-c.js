// https://pedrohs.github.io/criando-banco-de-dados-com-nedb/

var nedb  = require('nedb');
var db    = new nedb( { filename: 'banco.nedb', 
                        autoload: true,
                        timestampData: true,
                        flushDataOnCompaction: true });

// Original {"name":"Update da Silva Neto","age":16,"email":"updateneto@update.com","password":"senhadoupdateneto"}


db.update({ email: 'updateneto@update.com'}, 
          { $set: { name: 'Updated da Silva Neto', email: 'updatedneto@update.com', state: 'AM' }}, 
          { multi: true, upsert: false }, 
          function (err, numRepl) {
  if (err) {
    return console.log(err);
  }
  db.persistence.compactDatafile();
  console.log("User updated...");
});
