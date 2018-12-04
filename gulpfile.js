const fs = require('fs-extra');
const gulp = require('gulp');
const path = require('path');

const setupEnvironment = require('./gulp/setupEnvironment');

const nodemonConfig = require('./nodemon');
const tsConfig = require('./tsconfig');
const webpackConfig = require('./webpack.config');

gulp.task('clean:dist', async () => {
  await fs.remove(dir.dist);
});

gulp.task('clean', gulp.series('clean:dist'));


gulp.task('build:backend', async () => {
  return require('./gulp/build/backend')();
});

gulp.task('build:frontend', (done) => {
  require('./gulp/build/frontend')(webpackConfig, done);
});

gulp.task('build', gulp.series('clean', 'build:backend', 'build:frontend'));

gulp.task('watch:backend', async () => {
  const backendSources = tsConfig.compilerOptions.rootDir;
  gulp.watch(`${backendSources}/**/*.ts`, gulp.series('build:backend'));
});

gulp.task('watch:frontend', async () => {
  require('./gulp/watch/frontend')(webpackConfig);
});

gulp.task('start:backend', async done => {
  if (!process.env.NODE_ENV) {
    setupEnvironment({
      NODE_ENV: 'development',
    });
  }

  require('./gulp/start/backend')(nodemonConfig, done);
});

gulp.task('start', async done => {
  setupEnvironment({
    NODE_ENV: 'production',
  });

  gulp.series('build', 'start:backend')(done);
});

gulp.task('dev', async done => {
  setupEnvironment({
    NODE_ENV: 'development',
  });

  gulp.series('build:backend', gulp.parallel('start:backend', 'watch:backend', 'watch:frontend'))(done);
});

gulp.task('test:backend', (done) => {
  const config = path.join(__dirname, 'jasmine.json');
  require('./gulp/test/backend')(config, done);
});

gulp.task('test', gulp.series('test:backend'));
