const gulp = require('gulp');
const setupEnvironment = require('./gulp/setupEnvironment');

gulp.task('start:dev', async done => {
  setupEnvironment({
    NODE_ENV: 'development',
  });

  done();
});
