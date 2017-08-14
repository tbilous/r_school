/* eslint-disable no-console */
const path = require('path');
require('app-module-path').addPath(path.join(process.cwd(), 'src'));
require('./globals');
require('babel-core/register');
require.extensions['.css'] = () => { // eslint-disable-line
  return;
};
const morgan = require('morgan');
const express = require('express');
const webpack = require('webpack');
const config = require('../../webpack.config').default;
const webpackDev = require('webpack-dev-middleware');
const webpackHot = require('webpack-hot-middleware');
const compiler = webpack(config);
const hostConfig = require('../settings');
const host = hostConfig.host;
const port = hostConfig.port;
const application = express();
application.use(morgan('combined'));
application.use(express.static('dist'));
application.set('views', __dirname);

application.set('view engine', 'ejs');

application.use(
  webpackDev(
    compiler,
    {
      hot: true,
      publicPath: config.output.publicPath,
      stats: { colors: true }
    }
  )
);
application.use(webpackHot(compiler));

application.get('*', require('./render').default);

application.listen(port, host, function () {
  console.log(`Server listening on http://${host}:${port}`);
});
