import React, {DOM, Component} from 'react';
import Immutable from 'immutable';
import {map} from 'lodash/collection';

import posts from '../../constants/static/posts';
import BlogList from '../ui/BlogList';
import PieChart from '../ui/PieChart';

export default class BlogPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts
    };
    this.incrementLikes = this.like.bind(this);
  }

  like(postId) {
    const posts = this.state.posts;
    const arr = posts.findIndex((i) => i.id === postId);
    const origPost = Immutable.fromJS(posts);

    this.setState({
      posts: origPost
        .setIn([arr, 'likes'], posts[arr].likes + 1)
        .toJS()
    });
  }

  render() {
    const posts = this.state.posts;
    return (DOM.div(null,
        <BlogList posts={posts} incrementLikes={this.incrementLikes}/>,
        <PieChart columns={ map(posts, (post) => ([post.text, post.likes]))}/>
      )
    );
  }
}
