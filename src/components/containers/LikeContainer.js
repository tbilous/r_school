import { connect } from 'react-redux';
import { likePost } from '../../actions/Posts';

import Liking from '../ui/Liking';

const mapDispatchToProps = (dispatch, ownProps) => ({
  likePost: (posts) => dispatch(likePost(posts, ownProps.id))
});

const mapStateToProps = (state) => ({
  posts: state.posts.posts
});

const mergeProps = (stateProps, dispatchProps, ownProps) => (
  Object.assign({}, ownProps, {
    likes: stateProps.posts
      .find(post => post.id === ownProps.id).likes,
    likePost: () => dispatchProps.likePost(stateProps.posts, ownProps.id)
  })
);

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Liking);
