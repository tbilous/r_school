import React from 'react';
import PropTypes from 'prop-types';

const Image = (props) => (
  <img className="responsive-img"
       src={props.src}
       alt={props.alt}
  />
);

Image.defaultProps = {
  src: 'http://fakeimg.pl/300/ff0000/', width: 200, height: 100, alt: 'No Image'
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Image;
