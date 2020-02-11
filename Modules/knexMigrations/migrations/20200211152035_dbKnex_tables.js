
exports.up = function(knex, Promise) {

  return knex.schema.createTable('users', table => {
    table.increments('id').primary()
    table.string('name').notNull()
    table.string('email').notNull().unique()
    table.string('pass', 64).notNull()
    table.boolean('active').notNull().defaultTo(true)
    table.timestamp('dtcreation').defaultTo(knex.fn.now())
  }).then(() => {
    return knex.schema.createTable('profiles', table => {
      table.increments('id').primary()
      table.string('name').notNull().unique()
    })
  }).then(() => {
    return knex.schema.createTable('users_profiles', table => {
      table.integer('userId').unsigned()
      table.integer('profileId').unsigned()
      table.foreign('userId').references('users.id')
      table.foreign('profileId').references('profiles.id')
      table.primary(['userId', 'profileId'])
    })
  })
}

exports.down = function(knex) {

  return knex.schema.dropTable('users')
    .then(() => {
      return knex.schema.dropTable('profiles')
    })
    .then(() => {
      return knex.schema.dropTable('users_profiles')
    })

};
