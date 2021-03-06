// const path = require('path');
// const webpack = require('webpack');
// const hostConfig = require(path.join(__dirname, 'initializers') + '/settings');

import path from 'path';
import webpack from 'webpack';

export default {
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    './src/index.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)?$/,
        use: [ 'babel-loader' ],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              includePaths: [path.join(__dirname, 'dist/stylesheets/utils')]
            }
          }
        ]
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
  plugins: [
    new webpack.DefinePlugin({
      __SERVER__: false,
      __CLIENT__: true,
      __DEVELOPMENT__: true
    }),

    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
};
