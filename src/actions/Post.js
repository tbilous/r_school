import request from 'superagent';

const settings = require('../../initializers/settings');

import * as types from '../constants/actionTypes/PostActionTypes';

const requestPost = (id) => ({
  type: types.FETCH_POST_REQUEST,
  id
});

const receivePost = (response) => ({
  type: types.FETCH_POST_SUCCESS,
  response
});

const errorPost = () => ({
  type: types.FETCH_POST_ERROR
});

export function fetchPost(id) {
  const queryObject = { id };

  return (dispatch) => {
    dispatch(receivePost(queryObject));

    return request
      .get(`${settings.dataServer}/posts/${id}`)
      .end((err, response) => {
        err ? dispatch(errorPost()) : dispatch(requestPost(response.body));
      });
  };
}
