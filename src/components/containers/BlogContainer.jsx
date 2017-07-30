import { connect } from 'react-redux';

import BlogPage from '../ui/BlogPage';

const mapStateToProps = (state) => ({
  posts: state.posts.posts,
  meta: state.posts.meta,
  isLoading: state.posts.isLoading,
  error: state.posts.error
});

export default connect(mapStateToProps)(BlogPage);
