/* eslint-disable no-console */
const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');

const config = require('../../webpack.config.js');
const hostConfig = require('../settings');

const host = hostConfig.host;
const port = hostConfig.port;

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
