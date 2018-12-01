const gulp = require('gulp');
const gutil = require('../gulp-util');
const path = require('path');
const sourcemaps = require('gulp-sourcemaps');
const ts = require('gulp-typescript');

module.exports = (specificConfig = 'tsconfig.backend.json') => {
  const extendedConfigPath = path.join(process.cwd(), 'tsconfig.json');
  const extendedConfig = require(extendedConfigPath);

  const specificConfigPath = path.join(process.cwd(), specificConfig);
  gutil.log(`Using TS config from: ${specificConfigPath}`);

  const tsProject = ts.createProject(specificConfigPath);
  return tsProject
    .src()
    .pipe(sourcemaps.init())
    .pipe(tsProject())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(extendedConfig.compilerOptions.outDir));
};
