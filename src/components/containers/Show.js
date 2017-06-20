import React, { Component }  from 'react';
import PropTypes from 'prop-types';
// import posts from '../../constants/static/posts';
import axios from 'axios';

import Image from './../ui/Image';
import TextBox from './../ui/TextBox';
// import Signature from './../ui/Signature';

const hostConfig = require('../../../initializers/settings');

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
    axios.get(`http://${hostConfig.host}:${hostConfig.port}/posts/${this.props.id}`)
      .then(response => {
        this.setState({
          post: response.data,
          isLoading: false,
        });
      })
      .catch(error => {
        this.setState({
          error: error.message,
          isLoading: false
        });
      });
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
