import React, { DOM } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

class Signature extends React.Component {
  render() {
    const {author, created_at, updated_at} = this.props;
    return ( DOM.ul(
        null,
        DOM.li(null, `author: ${author || Signature.defaultProps.author}`),
        DOM.li(null, `created: ${created_at || Signature.defaultProps.created_at}`),
        DOM.li(null, `updated: ${updated_at || Signature.defaultProps.updated_at}`),
      )
    )
  }
}

Signature.defaultProps = {
  author: 'John Doe Jn.',
  created_at: moment().startOf('day').fromNow(),
  updated_at: moment().startOf('day').fromNow()
};

Signature.propTypes = {
  author: PropTypes.string.isRequired,
  created_at: PropTypes.string.isRequired,
  updated_at: PropTypes.string.isRequired
};
export default Signature
