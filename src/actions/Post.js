import request from 'superagent';

import {postsPath} from 'helpers/routes/posts';

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

// export function fetchPosts(searchTerm) {
//   const querryObject = {searchTerm, BASE_URL: SERVER_ENDPOINT};
//
//   return (dispatch) => {
//     dispatch(requestPosts());
//
//     return axios
//       .get(postsPath(querryObject))
//       .then(response => {
//         dispatch(recievePosts(response.data));
//       })
//       .catch(() => {
//         dispatch(errorPosts());
//       });
//   };
// }
// function parseResponse(response) {
//   this.setState({
//     posts: response.body.posts,
//     +erPage: response.body.meta.perPage
//   });
// }

export function fetchPosts(searchTerm) {
// eslint-disable-next-line prefer-const
  let queryObject = {searchTerm};

  return (dispatch) => {
    dispatch(requestPosts());

    return request
      .get(postsPath(queryObject))
      .end((err, response) => {
        err ? dispatch(errorPosts()) : dispatch(recievePosts(response));
      });
  };
}
