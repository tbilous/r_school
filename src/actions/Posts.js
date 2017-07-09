import request from 'superagent';

import {searchPath} from '../helpers/search';

import * as types from '../constants/actionTypes/PostsActionTypes';

const requestPosts = () => ({
  type: types.FETCH_POSTS_REQUEST
});

const recievePosts = (response) => ({
  type: types.FETCH_POSTS_SUCCESS,
  response
});

const errorPosts = () => ({
  type: types.FETCH_POSTS_ERROR
});

export const like = (postId) => (
  {
    postId,
    type: types.LIKE_POST
  }
);


export function fetchPosts(searchTerm) {
// eslint-disable-next-line prefer-const
  let queryObject = {searchTerm};
  return (dispatch) => {
    dispatch(requestPosts());

    return request
      .get(searchPath(queryObject))
      .end((err, response) => {
        err ? dispatch(errorPosts()) : dispatch(recievePosts(response));
      });
  };
}
