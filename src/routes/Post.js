import PostShow from '../components/containers/PostContainer';
import { postPath } from '../helpers/routes';
import { fetchPost } from '../actions/Post';

const PostShowRoute = {
  path: postPath(),
  component: PostShow,
  prepareData: (store, query, params) => {
    store.dispatch(fetchPost(params.id));
  }
};
export default PostShowRoute;
