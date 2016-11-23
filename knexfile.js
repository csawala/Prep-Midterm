// Update with your config settings.

// ACCESS DB FROM CLI
// psql =h ec2-54-83-5-43.compute-1.amazonaws.com -U ggtynrilwnquyk -d d6gpgcsr54b700


module.exports = {

  development: {
    client: 'postgresql',
    connection: {
        user: "ggtynrilwnquyk",
        password: '5KKFEdikCuzlm7PcEwYE0JHnIc',
        database: "d6gpgcsr54b700",
        host: "ec2-54-83-5-43.compute-1.amazonaws.com",
        port: 5432,
        ssl: true
    },
  }

  // staging: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // },

  // production: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // }

};