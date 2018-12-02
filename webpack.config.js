const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const dist = path.join(__dirname, 'dist', 'frontend');
const src = path.join(__dirname, 'src', 'main', 'frontend');

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
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
    [process.env.npm_package_name]: [path.join(src, 'index.tsx')],
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
    path: dist,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(src, 'index.html'),
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
};
