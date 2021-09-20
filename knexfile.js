// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host     : '127.0.0.1',
      user     : 'test',
      password : '******',
      database : 'test_db',
      charset  : 'utf8',
      insecureAuth : true
    }
  },
  test: {
    client: 'mysql',
    connection: {
      host     : '127.0.0.1',
      user     : 'test',
      password : '******',
      database : 'test_db',
      charset  : 'utf8',
      insecureAuth : true
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
