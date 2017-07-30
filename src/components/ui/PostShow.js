/* eslint-disable react/prefer-stateless-function */
import React, {Component}  from 'react';
import PropTypes from 'prop-types';

import {Container, Row, Col} from 'react-materialize';

import Image from './Image';
import TextBox from './TextBox';
import PreloaderBlock from '../shared/Preloader';


export default class PostShow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {post} = this.props;

    if (!post) {
      return <PreloaderBlock/>;
    }

    return (
      <Container>
        <Row>
          <Col s={5} m={3}>
            <Image image={post.image}/>
          </Col>
          <Col s={7} m={9}>
            <TextBox>{post.text}</TextBox>
          </Col>
        </Row>
      </Container>
    );
  }
}

PostShow.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    image: Image.propTypes.image
  }),
  id: PropTypes.number
};

PostShow.propTypes = {
  params: PropTypes.object
};
