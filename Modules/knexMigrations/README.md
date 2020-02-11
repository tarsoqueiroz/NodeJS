# Knex use guide

## Install

    npm install --save sqlite3 knex

## Init Knex

    npx knex init

## Creating migrations

    npx knex migrate:make dbKnex_tables

## ToDo

## Schema for tables


### Criar schema para profiles`
### Criar schema para users-profile# Knex use guide

## Install

    npm install --save sqlite3 knex

## Init Knex

    npx knex init

## Init creation

    npx knex migrate:make table_users
    npx knex migrate:make table_profiles
    npx knex migrate:make table_users-profiles

## ToDo

## Schema for users table

    
    export function up(knex, Promise) {
    
      return knex.schema.createTable('users', table => {
        table.increments('id').primary()
        table.string('name').notNull()
        table.string('email').notNull().unique()
        table.string('pass', 64).notNull()
        table.boolean('active').notNull().defaultTo(true)
        table.timestamp('dtcreation').defaultTo(knex.fn.now    ())
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
    

### Criar schema para profiles`
### Criar schema para users-profiles

## Create tables

> `npx knex migrate:latest`

## Drop tables

> `npx knex migrate:rollback`

s

## Create tables

> `npx knex migrate:latest`

## Drop tables

> `npx knex migrate:rollback`

