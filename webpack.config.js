const dir = require('./dir');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  devServer: {
    contentBase: dir.dist,
    host: 'localhost',
    hot: true,
    open: true,
    overlay: {
      errors: true,
      warnings: true,
    },
    port: 8080,
    proxy: [
      {
        context: ['/documentation', '/rest', '/swaggerui', '/swagger.json'],
        target: 'http://localhost:3000',
      },
    ],
    stats: 'errors-only',
    watchContentBase: true,
  },
  entry: {
    [process.env.npm_package_name]: [path.join(dir.srcView, 'index.tsx')],
  },
  mode: 'development',
  module: {
    rules: [
      {
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        test: /\.tsx?$/,
      },
    ],
  },
  output: {
    filename: `[name].bundle.js`,
    path: dir.distView,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(dir.srcView, 'index.html'),
    }),
    new webpack.EnvironmentPlugin({
      DEBUG: false,
      NODE_ENV: 'development',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
};
