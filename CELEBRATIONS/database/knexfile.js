module.exports = {
    development: {
      client: 'sqlite3',
      connection: {
        filename: './database/db.sqlite3', // Adjust the path as needed
      },
      useNullAsDefault: true,
      migrations: {
        directory: './database/migrations',
      },
      seeds: {
        directory: './database/seeds',
      },
    },
  };
  