import React, { DOM, Component } from 'react';
import { map } from 'lodash/collection';

import BlogItem from '../ui/BlogItem';

export default class BlogList extends Component {
  render() {
    const {posts, incrementLikes} = this.props;
    return DOM.div(
      null,
      map(
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
