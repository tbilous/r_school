import { connect } from 'react-redux';

import PostShow from 'components/ui/PostShow';

const mapStateToProps = (state) => ({
  post: state.post.post,
  isLoading: state.post.isLoading,
  error: state.post.error
});

export default connect(mapStateToProps)(PostShow);
