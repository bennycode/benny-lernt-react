const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const dist = 'dist';

module.exports = {
  devServer: {
    open: true,
    port: 8080,
  },
  entry: {
    [process.env.npm_package_name]: `${__dirname}/${process.env.npm_package_main}`,
  },
  mode: 'development',
  module: {
    rules: [
      {
        exclude: /(bower_components|node_modules)/,
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        exclude: /(node_modules)/,
        test: /\.tsx?$/,
        use: [
          {
            loader: 'awesome-typescript-loader',
            options: {
              sourceMap: true,
              useCache: true,
            },
          },
        ],
      },
    ]
  },
  output: {
    filename: `[name].bundle.js`,
    path: `${__dirname}/${dist}`,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './src/main/index.html',
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
};
