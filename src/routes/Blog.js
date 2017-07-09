import BlogPage from 'components/containers/BlogPage';
import { rootPath } from '../helpers/routes';

const BlogPageRoute = {
  exact: true,
  path: rootPath(),
  component: BlogPage
};

export default BlogPageRoute;
