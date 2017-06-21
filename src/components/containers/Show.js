import React, { Component }  from 'react';
import PropTypes from 'prop-types';

// import request from 'superagent';

import Image from './../ui/Image';
import TextBox from './../ui/TextBox';
// import Signature from './../ui/Signature';

// const settings = require('../../../initializers/settings');

export default class BlogShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {},
      isLoading: true,
      error: ''
    };
  }

  componentDidMount() {

  }

  render() {
    const { post } = this.state;

    return (
      <div>
          <TextBox>{post.text}</TextBox>,
          <Image image={post.image} />
      </div>
    );
  }
}

BlogShow.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    image: Image.propTypes.image
  })
};
