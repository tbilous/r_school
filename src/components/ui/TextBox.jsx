import React from 'react';
import PropTypes from 'prop-types';

const TextBox = ({children}) => (
  <span> { children } </span>
);

TextBox.defaultProps = {
  children: 'have no thinks'
};

TextBox.propTypes = {
  children: PropTypes.string.isRequired,
};

export default TextBox;
