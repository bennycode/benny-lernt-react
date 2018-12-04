const dir = require('./dir');
const path = require('path');

const ConnectionOptions = {
  cli: {
    entitiesDir: path.join(dir.src, 'entity'),
    migrationsDir: path.join(dir.src, 'migration'),
    subscribersDir: path.join(dir.src, 'subscriber'),
  },
  entities: [path.join(dir.dist, 'entity', '**/*.js')],
  logging: false,
  migrations: [path.join(dir.src, 'migration', '**/*.ts')],
  subscribers: [path.join(dir.src, 'subscriber', '**/*.ts')],
  synchronize: true,
  type: 'sqlite',
};

if (process.env.NODE_ENV === 'production') {
  ConnectionOptions.database = path.join(dir.data, `prod-${process.env.npm_package_name}.db3`);
} else {
  ConnectionOptions.database = path.join(dir.data, `${process.env.NODE_ENV}-${process.env.npm_package_name}.db3`);
}

module.exports = ConnectionOptions;
