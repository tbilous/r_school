import { connect } from 'react-redux';
import { likePost } from 'actions/Posts';

import Liking from 'components/ui/Liking';

const mapDispatchToProps = (dispatch, ownProps) => ({
  likePost: (posts) => dispatch(likePost(posts, ownProps.id))
});

const mapStateToProps = (state) => ({
  posts: Posts(state).posts
});

const Posts  = (arr) => ({
  posts: arr.posts.posts ? arr.posts.posts : arr.posts
});

const mergeProps = (stateProps, dispatchProps, ownProps) => (
  console.log(ownProps),
  Object.assign({}, ownProps, {
    likes: Posts(stateProps).posts
      .find(post => post.id === ownProps.id).likes,
    likePost: () => dispatchProps.likePost(Posts(stateProps).posts, ownProps.id)
  })
);

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Liking);
