const path = require('path')
const knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: path.join(__dirname, 'data.sqlite3')
  },
  useNullAsDefault: true,
})

const schema = knex.schema.createSchemaIfNotExists('movies', table => {
  table.increments('id').primary()
  table.string('title')
  table.integer('released')
})
