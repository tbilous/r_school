import React from 'react';
import PropTypes from 'prop-types';
import {map} from 'lodash/collection';

import BlogItem from './BlogItem';

const BlogList = (props) => (
  <div>
    {
      map(props.posts, (post) => <BlogItem
        key={post.id}
        post={post}
        incrementLikes={props.incrementLikes}/>)
    }
  </div>
);

BlogList.propTypes = {
  posts: PropTypes.array,
  incrementLikes: PropTypes.func
};

export default BlogList;
