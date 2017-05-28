import React, {DOM} from 'react';
import PropTypes from 'prop-types';
import {assign} from 'lodash/object'

import Image from '../ui/Image';
import TextBox from '../ui/TextBox';
import Signature from '../ui/Signature';
import Liking from '../ui/Liking';

class BlogItem extends React.Component {
  render() {
    const { post } = this.props;
    return (  DOM.ul(
        {
          style: {
            listStyle: 'none',
            border: '1px solid red',
            padding: '5px',
            textAlign: 'center'
          }
        }
        ,
        DOM.li(null, React.createElement(TextBox, {text: post.text})),
        DOM.li(null, React.createElement(Image, assign({}, post.image))),
        DOM.li(null, React.createElement(Signature, assign({}, post.signature))),
        DOM.li(null, React.createElement(Liking, {likes: post.likes}))
      )

    )
  }
};

BlogItem.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    signature: PropTypes.shape({
      author: PropTypes.string,
      created_at: PropTypes.string,
      updated_at: PropTypes.string
    }),
    likes: PropTypes.number,
    image: PropTypes.shape({
      src: PropTypes.string.isRequired,
      attr: PropTypes.shape({
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
        alt: PropTypes.string.isRequired
      })
    })
  })
};

export default BlogItem
