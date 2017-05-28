import React, { DOM } from 'react';

class TextBox extends React.Component {
  render() {
    const {text} = this.props;
    return DOM.span(null, text)
  }
}

export default TextBox
