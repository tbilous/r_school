import BlogPage from 'components/containers/BlogPage';
import { rootPath } from '../helpers/routes';
import { fetchPosts } from '../actions/Posts';

const BlogPageRoute = {
  exact: true,
  path: rootPath(),
  component: BlogPage,
  prepareDate: (store) => {
    store.dispatch(fetchPosts());
  }
};

export default BlogPageRoute;
