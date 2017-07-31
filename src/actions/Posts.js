import { API_CALL } from '../middleware/API';
import {searchPath} from '../helpers/search';
import * as types from '../constants/actionTypes/PostsActionTypes';
export const likePost = (id) => (
  {
    id,
    type: types.LIKE_POST
  }
);

export function fetchPosts(searchTerm) {
  const queryObject = {searchTerm};
  return {
    [API_CALL]: {
      endpoint: searchPath(queryObject),
      method: 'GET',
      query: {},
      types: [
        types.FETCH_POSTS_REQUEST,
        types.FETCH_POSTS_SUCCESS,
        types.FETCH_POSTS_ERROR
      ]
    }
  };
}
