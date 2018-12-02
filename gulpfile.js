const gulp = require('gulp');
const setupEnvironment = require('./gulp/setupEnvironment');
const webpackConfig = require('./webpack.config');

gulp.task('build:backend', () => (require('./gulp/build/backend')()));

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

gulp.task('watch:frontend', () => (require('./gulp/watch/frontend')(webpackConfig)));
