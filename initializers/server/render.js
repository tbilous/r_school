/* eslint-disable import/max-dependencies */
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';
import { Switch, StaticRouter, matchPath } from 'react-router-dom';
import Helmet from 'react-helmet';
import url from 'url';
import { parse } from 'qs';
import { compact } from 'lodash/array';
import { assign } from 'lodash/object';
import prepareData from 'helpers/prepareData';

import createStore from 'store';

const store = createStore();
// import store from 'store'
import createRoutes from 'routes';
const routes = createRoutes();

import RouteWithSubRoutes from 'helpers/routes/RouteWithSubRoutes';
import MainLayout from 'components/layouts/MainLayout';


function historyCb(location) {
  const routeState = { location, params: {}, routes: [], query: {}};

  routes.some(route => {
    const match = matchPath(location.pathname, route);

    if (match) {
      routeState.routes.push(route);
      assign(routeState.params, match.params);
      const query = location.search ? parse(location.search.substr(1)) : {};
      assign(routeState.query, query);
    }

    return match;
  });

  return routeState;
}

export default (req, res) => {
  const location = url.parse(req.url);
  const routeState = historyCb(location);
  if (routeState.routes.length == 0) {
    res.status(404);
    res.render('404');
  } else {
    Promise.all(
      compact(prepareData(store, routeState))
    ).then(() => {
      const context = {};
      const initialState = JSON.stringify(store.getState());

      const content = ReactDOMServer.renderToString(
        <Provider store={store}>
          <StaticRouter location={req.url} context = {context} >
            <MainLayout>
              <Switch>
                {
                  routes.map((route, i) => (
                    <RouteWithSubRoutes key={i} {...route} />
                  ))
                }
              </Switch>
            </MainLayout>
          </StaticRouter>
        </Provider>
        );

      const head = Helmet.rewind();

      res.status(200);
      res.render(
          'index',
          { initialState, content, head }
        );
    },
      () => {
        res.status(500);
        res.render('500');
      });
  }
};
