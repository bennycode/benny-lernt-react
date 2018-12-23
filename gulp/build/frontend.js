const gutil = require('../gulp-util');
const webpack = require('webpack');

module.exports = (webpackConfig, done) => {
  const config = {...webpackConfig};
  config.mode = process.env.NODE_ENV === 'production' ? 'production' : 'development';

  webpack(config, error => {
    if (error) {
      throw new gutil.PluginError('webpack', error);
    } else {
      done();
    }
  });
};
