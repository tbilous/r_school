import PostShow from '../components/containers/PostContainer';
import { postPath } from '../helpers/routes';
import { fetchPost } from '../actions/Post';
import initialLoad from 'helpers/initialLoad';

const PostShowRoute = {
  path: postPath(),
  component: PostShow,
  prepareData: (store, query, params) => {
    if (initialLoad()) return;
    return store.dispatch(fetchPost(params.id));
  }
};
export default PostShowRoute;
