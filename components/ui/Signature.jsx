import React, { DOM } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

class Signature extends React.Component {
  render() {
    const { signature } = this.props;
    return ( DOM.ul(
      null,
      DOM.li(null, `author: ${signature.author || Signature.defaultProps.signature.author}`),
      DOM.li(null, `created: ${signature.created_at || Signature.defaultProps.signature.created_at}`),
      DOM.li(null, `updated: ${signature.updated_at || Signature.defaultProps.signature.updated_at}`),
      )
    )
  }
}

Signature.defaultProps = {
  signature:{
    author: 'John Doe Jn.',
    created_at: moment().startOf('day').fromNow(),
    updated_at: moment().startOf('day').fromNow()
  },
};

Signature.propTypes = {
  signature: PropTypes.shape({
    author: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
    updated_at: PropTypes.string.isRequired
  }),
};
export default Signature
