/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from 'reducers';
// import DevTools from 'components/containers/DevTools';
import APIMiddleware from '../middleware/API';


const store = createStore(
  reducers,
  compose(
    applyMiddleware(APIMiddleware)
    , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    // , DevTools.instrument()
  )
);
export default store;
