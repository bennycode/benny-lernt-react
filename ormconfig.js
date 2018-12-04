const ConnectionOptions = {
  cli: {
    entitiesDir: 'src/main/entity',
    migrationsDir: 'src/migration',
    subscribersDir: 'src/subscriber',
  },
  entities: ['dist/entity/*.js'],
  logging: false,
  migrations: ['src/migration/**/*.ts'],
  subscribers: ['src/subscriber/**/*.ts'],
  synchronize: true,
  type: 'sqlite',
};

if (process.env.NODE_ENV === 'production') {
  ConnectionOptions.database = `data/prod-${process.env.npm_package_name}.db3`;
} else if (process.env.NODE_ENV === 'test') {
  ConnectionOptions.database = `data/test-${process.env.npm_package_name}.db3`;
} else {
  ConnectionOptions.database = `data/dev-${process.env.npm_package_name}.db3`;
}

module.exports = ConnectionOptions;
