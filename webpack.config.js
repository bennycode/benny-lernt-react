const webpack = require('webpack');

const dist = 'dist';

module.exports = {
  devServer: {
    open: true,
    port: 8080,
    // Make sure `publicPath` always starts and ends with a forward slash.
    publicPath: `/${dist}/`,
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
      }
    ]
  },
  output: {
    filename: `[name].bundle.js`,
    path: `${__dirname}/${dist}`,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
