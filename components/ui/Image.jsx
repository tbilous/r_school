import React from 'react';
import PropTypes from 'prop-types';

class Image extends React.Component {
  render() {
    const { image } = this.props;
    return(
      <img
        src={image.src || Image.defaultProps.image.src}
        width={image.attr.width || Image.defaultProps.image.attr.width}
        height={image.attr.height || Image.defaultProps.image.attr.height}
        alt={image.attr.alt || Image.defaultProps.image.attr.alt}
      />
    )
  }
}

Image.defaultProps = {
  image: {
    src: "http://fakeimg.pl/300/ff0000/",
    attr: {width: 200, height: 100, alt: "No Image"}
  }
};

Image.propTypes = {
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    attr: PropTypes.shape({
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired,
      alt: PropTypes.string.isRequired,
    })
  })
};

export default Image
