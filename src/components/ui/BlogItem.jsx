import React from 'react';
import PropTypes from 'prop-types';

import Image from './Image';
import TextBox from './TextBox';
import Signature from './Signature';
import Liking from './Liking';

const BlogItem = ({post, incrementLikes}) => (
  <div>
    <Image image={post.image} />
    <TextBox>{post.text}</TextBox>
    <Signature signature={post.signature} />
    <Liking
      likes={post.likes}
      incrementLikes={incrementLikes}
      id={post.id} />
  </div>
);

BlogItem.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    signature: Signature.propTypes.signature,
    likes: PropTypes.number,
    image: Image.propTypes.image
  })
};

export default BlogItem;
