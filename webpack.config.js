const path = require('path');
// eslint-disable-next-line no-unused-vars
const webpack = require('webpack');

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)?$/,
        use: [ 'babel-loader' ],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    modules: [
      path.join(process.cwd(), 'src'),
      'node_modules'
    ],
    extensions: ['.js', '.jsx'],
  },
};
