import { combineReducers } from 'redux';

import posts from 'blog_reducers/Posts';
import post from 'blog_reducers/Post';

export default combineReducers({
  posts,
  post
});
