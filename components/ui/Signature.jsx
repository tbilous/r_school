import React, { DOM } from 'react';

class Signature extends React.Component {
  render() {
    const {author, created_at, updated_at} = this.props;
    return (  DOM.ul(
      null,
      DOM.li(null, 'author: ' + author),
      DOM.li(null, 'created: ' + created_at),
      DOM.li(null, 'updated: ' + updated_at),
      )
    )
  }
}
export default Signature
