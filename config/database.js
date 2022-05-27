module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'server_provitask'),
      user: env('DATABASE_USERNAME', 'jreyes'),
      password: env('DATABASE_PASSWORD', 'Provitask123%'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
