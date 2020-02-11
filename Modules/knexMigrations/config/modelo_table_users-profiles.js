
exports.up = function(knex) {

  return knex.schema.createTable('users_profiles', table => {
    table.integer('userId').unsigned()
    table.integer('profileId').unsigned()
    table.foreign('userId').references('users.id')
    table.foreign('profileId').references('profiles.id')
    table.primary(['userId', 'profileId'])
  }).then(function() {
    return knex('users_profiles').insert([
      { userId: 1, profileId: 1 },
      { userId: 2, profileId: 1 },
      { userId: 3, profileId: 3 },
    ])
  })
  
};

exports.down = function(knex) {

  return knex.schema.dropTable('users_profiles')
  
};
