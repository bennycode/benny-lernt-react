const ConnectionOptions = {
  cli: {
    entitiesDir: 'src/main/entity',
    migrationsDir: 'src/migration',
    subscribersDir: 'src/subscriber',
  },
  database: 'database/development.db3',
  entities: ['dist/entity/*.js'],
  logging: false,
  migrations: ['src/migration/**/*.ts'],
  subscribers: ['src/subscriber/**/*.ts'],
  synchronize: true,
  type: 'sqlite',
};

if (process.env.NODE_ENV === 'production') {
  ConnectionOptions.database = 'database/production.db3';
}

if (process.env.NODE_ENV === 'test') {
  ConnectionOptions.database = 'database/test.db3';
}

module.exports = ConnectionOptions;
