import React, {Component}  from 'react';
import PropTypes from 'prop-types';

import request from 'superagent';
import {Container, Row, Col} from 'react-materialize';

import Image from 'components/ui/Image';
import TextBox from 'components/ui/TextBox';
import PreloaderBlock from 'components/shared/Preloader';


const settings = require('../../../initializers/settings');

export default class PostShow extends Component {
  constructor(props) {
    super(props);
    this.state = {post: null};
  }

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts() {
    request.get(
      `${settings.dataServer}posts/${this.props.id}`,
      {},
      (err, res) => this.setState({post: res.body})
    );
  }

  render() {
    const {post} = this.state;

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
