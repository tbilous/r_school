/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from 'blog_reducers/index';
import DevTools from 'components/containers/DevTools';
import APIMiddleware from 'middleware/API';


const store = (initialState) => createStore(
  reducers,
  initialState,
  compose(
    applyMiddleware(APIMiddleware)
    , DevTools.instrument()
  )
);
export default store;
