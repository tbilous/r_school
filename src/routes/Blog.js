import BlogPage from '../components/containers/BlogContainer';
import { rootPath } from '../helpers/routes';
import { fetchPosts } from '../actions/Posts';

const BlogPageRoute = {
  exact: true,
  path: rootPath(),
  component: BlogPage,
  prepareData: (store) => store.dispatch(fetchPosts())
};

export default BlogPageRoute;
