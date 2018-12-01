const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const dist = path.resolve(__dirname, 'dist', 'frontend');
const src = path.resolve(__dirname, 'src', 'main', 'frontend');

module.exports = {
  devServer: {
    open: true,
    port: 8080,
    proxy: [{
      context: ['/rest'],
      target: 'http://localhost:3000',
    }],
  },
  entry: {
    [process.env.npm_package_name]: path.resolve(src, 'index.tsx'),
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
    path: path.resolve(dist),
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(src, 'index.html'),
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
};
