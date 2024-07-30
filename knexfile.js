module.exports = {
    development: {
      client: 'pg',
      connection: {
        host: 'localhost',
        user: 'rosy',
        password: 'rosy@123',
        database: 'stock',
        port: 5432
      },
      migrations: {
        directory: './src/migrations'
      }
    }
  };
  