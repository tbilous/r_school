import React from 'react';
import PropTypes from 'prop-types';

class Image extends React.Component {
  render() {
    const {src, attr} = this.props;
    return (
      <img
        src={src || Image.defaultProps.src}
        width={attr.width || Image.defaultProps.attr.width}
        height={attr.height || Image.defaultProps.attr.height}
        alt={attr.alt || Image.defaultProps.attr.alt}
      />
    )
  }
}

Image.defaultProps = {
  src: "http://fakeimg.pl/300/ff0000/",
  attr: {width: 200, height: 100, alt: "No Image"}
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  attr: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    alt: PropTypes.string.isRequired,
  })
};

export default Image
