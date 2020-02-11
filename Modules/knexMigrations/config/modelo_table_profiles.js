
exports.up = function(knex) {

  return knex.schema.createTable('profiles', table => {
    table.increments('id').primary()
    table.string('name').notNull().unique()
  }).then(function() {
    return knex('profiles').insert([
      { id: 1, name: 'administrator' },
      { id: 2, name: 'anonymous' },
      { id: 3, name: 'user' },
    ])
  })

};

exports.down = function(knex) {

  return knex.schema.dropTable('profiles')
  
};
