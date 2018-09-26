const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const dist = 'dist';

module.exports = {
  devServer: {
    open: true,
    port: 8080,
    proxy: {
      '/rest': 'http://localhost:3000',
    },
  },
  entry: {
    [process.env.npm_package_name]: `${__dirname}/src/main/frontend/index.tsx`,
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
    path: `${__dirname}/${dist}/frontend`,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'main', 'frontend', 'index.html'),
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
};
