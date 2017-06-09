import React from 'react';
import PropTypes from 'prop-types';

export default class Image extends React.Component {
  render() {
    const {src, width, height, alt} = this.props;
    return (
      <img
        src={src || Image.defaultProps.src}
        width={width || Image.defaultProps.width}
        height={height || Image.defaultProps.height}
        alt={alt || Image.defaultProps.alt}
      />
    )
  }
}

Image.defaultProps = {
  src: "http://fakeimg.pl/300/ff0000/", width: 200, height: 100, alt: "No Image"
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  alt: PropTypes.string.isRequired,
};
