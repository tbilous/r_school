import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-materialize';

const TextBox = ({children}) => (
  <Col m={9} s={7}>
    <span> { children } </span>
  </Col>
);

TextBox.defaultProps = {
  children: 'have no thinks'
};

TextBox.propTypes = {
  children: PropTypes.string.isRequired,
};

export default TextBox;
