const fs = require('fs-extra');
const gulp = require('gulp');
const path = require('path');
const setupEnvironment = require('./gulp/setupEnvironment');
const webpackConfig = require('./webpack.config');

gulp.task('build:backend', () => {
  require('./gulp/build/backend')();
});

gulp.task('build:frontend', (done) => {
  require('./gulp/build/frontend')(webpackConfig, done);
});

gulp.task('clean:dist', async () => {
  await fs.remove(path.join(__dirname, 'dist'));
});

gulp.task('start:dev', async done => {
  setupEnvironment({
    NODE_ENV: 'development',
  });
  done();
});

gulp.task('watch:backend', () => {
  const tsConfigBackend = require('./tsconfig.backend');
  const backendSources = tsConfigBackend.compilerOptions.rootDir;
  gulp.watch(`${backendSources}/**/*.ts`, gulp.series('build:backend'));
});

gulp.task('watch:frontend', () => {
  require('./gulp/watch/frontend')(webpackConfig);
});
