import BlogPage from '../components/containers/BlogContainer';
import { rootPath } from '../helpers/routes';
import { fetchPosts } from '../actions/Posts';
import initialLoad from 'helpers/initialLoad';

const BlogPageRoute = {
  exact: true,
  path: rootPath(),
  component: BlogPage,
  prepareData: (store) => {
    if (initialLoad()) return;
    store.dispatch(fetchPosts());
  }
};

export default BlogPageRoute;
