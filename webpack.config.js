const dir = require('./dir');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const viewDist = path.join(dir.dist, 'frontend');
const viewSource = path.join(dir.src, 'frontend');

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
    proxy: [{
      context: ['/documentation', '/rest', '/swaggerui', '/swagger.json'],
      target: 'http://localhost:3000',
    }],
    stats: 'errors-only',
    watchContentBase: true
  },
  entry: {
    [process.env.npm_package_name]: [path.join(viewSource, 'index.tsx')],
  },
  mode: 'development',
  module: {
    rules: [
      {
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        test: /\.tsx?$/,
      },
    ]
  },
  output: {
    filename: `[name].bundle.js`,
    path: viewDist,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(viewSource, 'index.html'),
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
};
