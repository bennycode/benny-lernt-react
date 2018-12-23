const chalk = require('chalk');
const gutil = require('../gulp-util');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

module.exports = webpackConfig => {
  const config = {...webpackConfig};
  config.mode = process.env.NODE_ENV === 'production' ? 'production' : 'development';

  const host = config.devServer.host;
  const port = config.devServer.port;
  const frontendUrl = `http://${host}:${port}`;

  // @see https://github.com/webpack/docs/wiki/webpack-dev-server#hot-module-replacement-with-inline-mode-on-cli
  // @see https://github.com/webpack/webpack-dev-server/issues/1051
  config.entry[process.env.npm_package_name].unshift(
    `webpack-dev-server/client?${frontendUrl}/`,
    'webpack/hot/dev-server',
  );

  const compiler = webpack(config);
  const server = new WebpackDevServer(compiler, config.devServer);

  server.listen(port, host, error => {
    if (error) throw new gutil.PluginError('webpack-dev-server', error);
    gutil.log('[webpack-dev-server]', `${frontendUrl}/webpack-dev-server/index.html`);
    gutil.log(chalk`Checkout the development frontend at "{green ${frontendUrl}}".`);
  });
};
