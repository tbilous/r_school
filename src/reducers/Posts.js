import { assign } from 'lodash';
import Immutable from 'immutable';

import * as types from '../constants/actionTypes/PostsActionTypes';

const initialState = {
  isLoading: false,
  error: false,
  posts: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_POSTS_REQUEST:
      return assign({}, initialState, { isLoading: true });
    case types.FETCH_POSTS_ERROR:
      return assign({}, initialState, { error: true });
    case types.FETCH_POSTS_SUCCESS:
      return assign({}, initialState, { posts: action.response.posts });
    case types.LIKE_POST:
      return assign({}, initialState, {
        posts: incrementLike(state.posts, action.id)
      });
    default: return state;
  }
}

const incrementLike = (posts, postId) => {
  const arr = posts.findIndex((i) => i.id === postId);
  const origPost = Immutable.fromJS(posts);
  let updatedPosts;

// eslint-disable-next-line prefer-const
  updatedPosts = {
    posts: origPost
      .setIn([arr, 'likes'], posts[arr].likes + 1)
      .toJS()
  };
  return updatedPosts.posts;
};
