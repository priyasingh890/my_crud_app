
const { knexSnakeCaseMappers } = require('objection');

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      database: 'stock',
      user: 'rosy',
      password: 'rosy@123',
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './src/migrations' 
    },
    seeds: {
      directory: './src/seeds' 
    },
    ...knexSnakeCaseMappers()
  },

  staging: {
    client: 'pg',
    connection: {
      database: 'my_db',
      user: 'navgurukul',
      password: 'null'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './seeds', // Ensure this is correct
    },
    ...knexSnakeCaseMappers()
  },

  production: {
    client: 'pg',
    connection: {
      database: 'my_db',
      user: 'navgurukul',
      password: 'null'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './seeds', // Ensure this is correct
    },
    ...knexSnakeCaseMappers()
  }
};
