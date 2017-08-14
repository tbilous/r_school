/* eslint-disable import/max-dependencies */
import React from 'react';
import ReactDOM from 'react-dom';

require('stylesheets/main.scss');

import {
  Switch,
  matchPath,
} from 'react-router-dom';

import { identity, assign} from 'lodash';
import { parse } from 'qs';
import {Provider} from 'react-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import { ConnectedRouter } from 'react-router-redux';

import createRoutes from 'routes';
import MainLayout from 'components/layouts/MainLayout';
import RouteWithSubRoutes from 'helpers/routes/RouteWithSubRoutes';
// import store from 'store/index';
import createStore from 'store';
const store = createStore(window.__INITIAL_STATE__);

import DevTools from 'components/containers/DevTools';

import prepareData from 'helpers/prepareData';

const history = createBrowserHistory();

class App extends React.Component {
  render() {
    const routes = createRoutes();

    function historyCb(location, action) {
      const state = {location, params: {}, routes: [], query: {}};

      routes.some(route => {
        const match = matchPath(location.pathname, route);

        if (match) {
          state.routes.push(route);
          assign(state.params, match.params);
          assign(state.query, parse(location.search.substr(1)));
        }
        return match;
      });


      const withoutScroll = (location.state || {}).withoutScroll;
      const nonPush = action !== 'PUSH';

      prepareData(store, state);
      store.subscribe(
        identity,
        identity,
        () => nonPush || withoutScroll || window.scrollTo(0, 0)
      );
    }

    history.listen(historyCb);

    historyCb(window.location);

    return (
      <Provider store={store}>
        <ConnectedRouter history={history} >
          <MainLayout>
            <Switch>
              {
                routes.map((route, i) => (
                  <RouteWithSubRoutes key={i} {...route} />
                ))
              }
            </Switch>
          </MainLayout>
        </ConnectedRouter>
      </Provider>
    );
  }
}

ReactDOM.render(
  <DevTools store={store}/>,
  document.getElementById('devTools'),
  () => {
    delete window.__INITIAL_STATE__;
  }
);
export default App;
