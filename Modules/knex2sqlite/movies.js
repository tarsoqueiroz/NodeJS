const db   = require('./db')
const knex = require('knex')

const create = (title, released) => 
  knex('movies').insert({ title, released })

const list = () =>
  knex('movies').select('*')

const update = ({ id, title, released }) =>
  knex('movies')
    .update({ title, released })
    .where({ id })

const del = id =>
  knex('movies')
    .where({ id })
    .del()

module.exports = {
  create,
  list,
  update,
  del
}
