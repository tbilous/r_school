import React, { DOM, Component } from 'react';
import PropTypes from 'prop-types';

import Image from '../ui/Image';
import TextBox from '../ui/TextBox';
import Signature from '../ui/Signature';
import Liking from '../ui/Liking';

export default class BlogItem extends Component {
  render() {
    const {post, incrementLikes} = this.props;
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
        DOM.li(null, React.createElement(TextBox, {}, post.text)),
        DOM.li(null, React.createElement(Image, post.image)),
        DOM.li(null, React.createElement(Signature, post.signature)),
        DOM.li(null, React.createElement(Liking, {
          likes: post.likes, incrementLikes: incrementLikes, id: post.id
        }))
      )
    )
  }
}
BlogItem.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    signature: Signature.propTypes.signature,
    likes: PropTypes.number,
    image: Image.propTypes.image
  })
};
