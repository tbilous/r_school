import React, {DOM} from 'react';
import PropTypes from 'prop-types';

import Image from '../ui/Image';
import TextBox from '../ui/TextBox';
import Signature from '../ui/Signature';
import Liking from '../ui/Liking';

class BlogItem extends React.Component {
  render() {
    const {post} = this.props;
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
        DOM.li(null, React.createElement(Image, {image: post.image})),
        DOM.li(null, React.createElement(Signature, {signature: post.signature})),
        DOM.li(null, React.createElement(Liking, {likes: post.likes}))
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

export default BlogItem
