/* eslint-disable no-console */
const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');

const config = require('../../webpack.config.js');

const host = '10.0.2.15';
const port = 3001;

new webpackDevServer(webpack(config), {
  contentBase: './dist',
  hot: true,
  publicPath: config.output.publicPath,
  stats: {
    colors: true
  }
}).listen(port, host, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Listening to ${host} on port ${port}`);
  }
});
