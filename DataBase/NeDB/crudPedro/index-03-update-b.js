// https://pedrohs.github.io/criando-banco-de-dados-com-nedb/

var nedb  = require('nedb');
var db    = new nedb( { filename: 'banco.nedb', 
                        autoload: true,
                        timestampData: true,
                        flushDataOnCompaction: true });

// Original { name: "Update da Silva", age: 18, email: "update@update.com",  password: "senhadoupdate" };

db.update({ email: 'update@update.com'}, 
          { name: 'Updated da Silva', email: 'updated@update.com', state: 'AM' }, 
          { multi: true, upsert: false }, 
          function (err, numRepl) {
  if (err) {
    return console.log(err);
  }
  db.persistence.compactDatafile();
  console.log("User updated...");
});
