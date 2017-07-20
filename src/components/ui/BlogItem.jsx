import React from 'react';
import PropTypes from 'prop-types';
import {Card, Row, Col} from 'react-materialize';
import {Link} from 'react-router-dom';


import Image from './Image';
import TextBox from './TextBox';
import Signature from './Signature';
import Liking from './Liking';

const BlogItem = ({post}) => (
  <Card>
    <Row>
      <Col m={3} s={5}>
        <Link to={`/posts/${post.id}`}>
          <Image image={post.image}/>
        </Link>
      </Col>
      <Col m={9} s={7}>
        <TextBox>{post.text}</TextBox>
      </Col>
    </Row>
    <Row className='card-action'>
      <Col s={12} m={3}>
        <Liking
          likes={post.likes}
          // incrementLikes={incrementLikes}
          id={post.id}/>
      </Col>
      <Col s={12} m={9}>
        <Signature signature={post.signature}/>
      </Col>
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
  }),
  // incrementLikes: Liking.propTypes.incrementLikes
};

export default BlogItem;
