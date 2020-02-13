
const db = require('../config/db')

const newUser = {
  id: 2389,
  name: 'Tarso Queiroz',
  email: 'tarso@queiroz.com',
  pass: 'canchangethis',
  active: false
}

// update
// db('...').where({...}).update({...})

async function exercicio() {
  // count
  const { qtde } = await db('users').where({id: 2389}).count('* as qtde').first()

  // insert if non exist
  if (qtde === 0) {
    await db('users').insert(newUser).then(console.log('inserted 2389'))
  }

  // query for 2389
  let { id } = await db('users')
                       .select('id').where({ id: 2389 }).first()
  console.log(id)

  await db('users').where({ id: 2389 }).then(res => console.log(res))

  // change 
  await db('users').where({ id })
    .update({ name: 'Tarso DB Queiroz' })

  return db('users').where({ id: 2389 })
}

exercicio()
  .then(usuario => console.log(usuario))
//  .finally(() => db.destroy())