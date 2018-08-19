const HtmlWebpackPlugin = require('html-webpack-plugin');
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
              configFileName: 'tsconfig.frontend.json',
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
    path: `${__dirname}/${dist}/frontend`,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './src/main/frontend/index.html',
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
};
