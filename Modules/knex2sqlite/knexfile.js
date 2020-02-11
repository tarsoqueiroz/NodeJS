// Update with your config settings.

module.exports = {

  client: 'sqlite3',
  connection: {
    filename: path.join(__dirname, 'data.sqlite3')
  },

  useNullAsDefault: true,

  migrations: {
    tableName: 'knex_migrations'
  }

}