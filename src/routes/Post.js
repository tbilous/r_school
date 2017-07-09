import PostShow from 'components/containers/PostShow';
import { postPath } from '../helpers/routes';

const PostShowRoute = {
  path: postPath(),
  component: PostShow,
};

export default PostShowRoute;
