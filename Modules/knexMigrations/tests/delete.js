
const db = require('../config/db')

// delete for id
db('users').where({ id: 2389})
  .delete()
  .then(res => console.log(res))
  .finally(() => db.destroy())

