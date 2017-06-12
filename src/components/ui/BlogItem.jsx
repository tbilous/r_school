import React from 'react';
import PropTypes from 'prop-types';
import {  Card, Row, Col } from 'react-materialize';

import Image from './Image';
import TextBox from './TextBox';
import Signature from './Signature';
import Liking from './Liking';

const BlogItem = ({post, incrementLikes}) => (
  <Card>
    <Row className='card-content'>
      <Image image={post.image} />
      <TextBox>{post.text}</TextBox>
    </Row>
    <Row className='card-action'>
      <Liking
        likes={post.likes}
        incrementLikes={incrementLikes}
        id={post.id} />
      <Signature signature={post.signature} />
    </Row>
  </Card>
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
