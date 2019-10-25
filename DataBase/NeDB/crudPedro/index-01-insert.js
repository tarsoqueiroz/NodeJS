// https://pedrohs.github.io/criando-banco-de-dados-com-nedb/

var nedb  = require('nedb');
var db    = new nedb( { filename: 'banco.db', autoload: true });

var user = {
  name:     "Anna Queiroz",
  age:      18,
  email:    "cati@email.com",
  password: "senha"
}

db.insert(user, function (err) {
  if (err) {
    return console.log(err);
  }
  console.log("User added...");
});
