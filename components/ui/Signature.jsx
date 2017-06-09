import React, { DOM } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

class Signature extends React.Component {
  render() {
    const {author, created_at, updated_at} = this.props;
    return ( DOM.ul(
        null,
        DOM.li(null, `author: ${author || Signature.defaultProps.author}`),
        DOM.li(null, `created: ${created_at || Signature.defaultProps.createdAt}`),
        DOM.li(null, `updated: ${updated_at || Signature.defaultProps.updatedAt}`),
      )
    )
  }
}

Signature.defaultProps = {
  author: 'John Doe Jn.',
  createdAt: moment().startOf('day').fromNow(),
  updatedAt: moment().startOf('day').fromNow()
};

Signature.propTypes = {
  author: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  updatedAt: PropTypes.string.isRequired
};
export default Signature
