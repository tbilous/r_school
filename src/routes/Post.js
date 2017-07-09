import PostShow from 'components/containers/PostShow';
import { postPath } from '../helpers/routes';
import { fetchPost } from '../actions/Post';

const PostShowRoute = {
  path: postPath(),
  component: PostShow,
  // render: ({match}) => (
  //   <PostShow id={match.params.id}/>
  // )
  prepareData: (store, query, params) => {
    store.dispatch(fetchPost(params.id));
  }
};
export default PostShowRoute;
