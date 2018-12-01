const gulp = require('gulp');
const setupEnvironment = require('./gulp/setupEnvironment');

gulp.task('build:backend', () => {
  return require('./gulp/build/backend')();
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
