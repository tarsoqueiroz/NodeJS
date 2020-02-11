
export function up(knex, Promise) {

  return knex.schema.createTable('users', table => {
    table.increments('id').primary()
    table.string('name').notNull()
    table.string('email').notNull().unique()
    table.string('pass', 64).notNull()
    table.boolean('active').notNull().defaultTo(true)
    table.timestamp('dtcreation').defaultTo(knex.fn.now())
  }).then(function() {
    return knex('users').insert([
      { id: 1, name: 'root',  email: 'root@empresa.com',  pass: 'changeit' },
      { id: 2, name: 'admin', email: 'admin@empresa.com', pass: 'changeit' },
      { id: 3, name: 'user',  email: 'user@empresa.com',  pass: 'changeit' },
    ])
  })
  
}

export function down(knex, Promise) {

  return knex.schema.dropTable('users')
  
}
