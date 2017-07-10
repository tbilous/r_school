import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from 'reducers';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';

const history = createHistory();
const middleware = routerMiddleware(history);

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    applyMiddleware(middleware)
// eslint-disable-next-line no-underscore-dangle
    , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

  )
);

export default store;
