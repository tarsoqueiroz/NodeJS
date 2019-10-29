// https://pedrohs.github.io/criando-banco-de-dados-com-nedb/

var nedb  = require('nedb');
var db    = new nedb( { filename: 'banco.nedb', 
                        autoload: true,
                        timestampData: true,
                        flushDataOnCompaction: true });

var user = [{ name: "Update da Silva",      age: 66, email: "update@update.com",      password: "senhadoupdate" },
            { name: "Update da Silva Neto", age: 16, email: "updateneto@update.com",  password: "senhadoupdateneto" },];

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
