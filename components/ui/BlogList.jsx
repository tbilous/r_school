import React, { DOM, Component } from 'react';
import _ from 'lodash';

import BlogItem from '../ui/BlogItem';

export default class BlogList extends Component {
  render() {
    const {posts, incrementLikes} = this.props;
    return DOM.div(
      null,
      _.map(
        posts,
        (post) => (
          React.createElement(
            BlogItem,
            {key: post.id.toString(), post, incrementLikes}
          )
        )
      )
    )
  }
}
