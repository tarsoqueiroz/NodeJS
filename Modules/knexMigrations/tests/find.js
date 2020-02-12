
const db = require('../config/db')

// db('users')
//   .then(res => console.log(res))
// db('profiles')
//   .then(res  => console.log(res))
// db('users_profiles')
//   .then(res  => console.log(res))

// db('profiles')
//   .select('name', 'id')
//   .then(res  => console.log(res))

// db
//   .select('name', 'id')
//   .from('profiles')
//   .then(res  => console.log(res))
// db
//   .select('name', 'id')
//   .limit(2)
//   .from('profiles')
//   .then(res  => console.log(res))
// db
//   .select('name', 'id')
//   .limit(2)
//   .offset(2)
//   .from('profiles')
//   .then(res  => console.log(res))

// db('profiles')
//   .where({ id: 666 })
//   .then(res  => console.log(res))
// db('profiles')
//   .where({ id: 666 })
//   .first()
//   .then(res  => console.log(res))

db('profiles')
//  .where('id', '=', 666)
//  .where('name', 'like', '%an%')
//  .whereNot({ id: 666 })
  .whereIn('id', [0, 1000] )
  .then(res  => console.log(res))
