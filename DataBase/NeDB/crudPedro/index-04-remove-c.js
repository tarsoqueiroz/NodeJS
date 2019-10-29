// https://pedrohs.github.io/criando-banco-de-dados-com-nedb/

var nedb  = require('nedb');
var db    = new nedb( { filename: 'banco.nedb', 
                        autoload: true,
                        timestampData: true,
                        flushDataOnCompaction: true });

/* Original 
{"name":"Remove da Silva",        "age":76,"email":"remove@remove.com",     "_id":"idtoremove"}
{"name":"Remove da Silva Filho",  "age":46,"email":"removefilho@remove.com","_id":"??????????"}
{"name":"Remove da Silva Neto",   "age":26,"email":"removeneto@remove.com", "_id":"??????????"}
{"name":"Remove da Silva Bisneto","age":6, "email":"removeneto@remove.com", "_id":"??????????"}
*/

db.remove({ name: 'Remove da Silva Filho' }, 
          { }, 
          function (err, numRepl) {
  if (err) {
    return console.log(err);
  }
  db.persistence.compactDatafile();
  console.log("User deleted...");
});
