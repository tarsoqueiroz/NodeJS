// https://pedrohs.github.io/criando-banco-de-dados-com-nedb/

var nedb  = require('nedb');
var db    = new nedb( { filename: 'banco.nedb', 
                        autoload: true,
                        timestampData: true,
                        flushDataOnCompaction: true });

var user = [{ name: "Joao da Silva",     age: 55, email: "joao@email.com",  password: "senhadojoao"    }, 
            { name: "Maria Silva",       age: 44, email: "maria@email.com", password: "senhadamaria"   }, 
            { name: "Pedro de Silva",    age: 22, email: "pedro@email.com", password: "senhadopedro"   }, 
            { name: "Pedro de Silva Jr", age: 02, email: "pedro@email.com", password: "senhadopedrojr" }];

db.insert(user[0], function (err, doc) {
  if (err) {
    return console.log(err);
  }
  console.log("User added with id", doc._id);
});
db.insert(user[1], function (err, doc) {
  if (err) {
    return console.log(err);
  }
  console.log("User added with id", doc._id);
});
db.insert(user[2], function (err, doc) {
  if (err) {
    return console.log(err);
  }
  console.log("User added with id", doc._id);
});
db.insert(user[3], function (err, doc) {
  if (err) {
    return console.log(err);
  }
  console.log("User added with id", doc._id);
});
