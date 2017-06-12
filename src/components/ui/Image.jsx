import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-materialize';

const Image = (props) => (
  <Col m={3} s={5}>
    <img className="responsive-img"
      src={props.src}
      // width={props.width}
      // height={props.height}
      alt={props.alt}
    />
  </Col>
);

Image.defaultProps = {
  src: 'http://fakeimg.pl/300/ff0000/', width: 200, height: 100, alt: 'No Image'
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Image;
