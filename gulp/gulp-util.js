// "gulp-util" has been deprecated with gulp v4, so using this as replacement.
// @see https://github.com/gulpjs/gulp-util
// @see https://medium.com/gulpjs/gulp-util-ca3b1f9f9ac5
module.exports = {
  PluginError: require('plugin-error'),
  env: require('minimist'),
  log: require('fancy-log'),
};
