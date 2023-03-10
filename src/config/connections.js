const knex = require("knex")({
  client: 'pg',
  connection: {
    host: 'localhost',
    user: 'postgres',
    port: '5432',
    password: '123456',
    database: 'intersol_teste'
  }
});

module.exports= knex;