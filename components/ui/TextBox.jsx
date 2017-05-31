import React, { DOM } from 'react';
import PropTypes from 'prop-types';

const TextBox =({children}) => (
  DOM.span(
    null,
    children || TextBox.defaultProps.children
  )
);

TextBox.defaultProps = {
  children: "have no thinks"
};

TextBox.propTypes = {
  children: PropTypes.string.isRequired,
};

export default TextBox

