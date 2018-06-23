const pkg = require('./package.json');

module.exports = {
  devServer: {
    hot: true,
    open: true,
  },
  entry: {
    [pkg.name]: `${__dirname}/${pkg.main}`,
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-react']
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
