import PostShow from 'components/containers/PostShow';
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
