// https://pedrohs.github.io/criando-banco-de-dados-com-nedb/

var nedb  = require('nedb');
var db    = new nedb( { filename: 'banco.nedb', 
                        autoload: true,
                        timestampData: true,
                        flushDataOnCompaction: true });

var user = [{ name: "Remove da Silva",         age: 76, email: "remove@remove.com",     _id: "idtoremove" },
            { name: "Remove da Silva Filho",   age: 46, email: "removefilho@remove.com" },
            { name: "Remove da Silva Neto",    age: 26, email: "removeneto@remove.com"  },
            { name: "Remove da Silva Bisneto", age: 06, email: "removeneto@remove.com"  }];

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
