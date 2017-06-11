import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { DEFAULT_DATE_FORMAT } from '../../constants/Date';

function formatDate(date) {
  return moment(date).format(DEFAULT_DATE_FORMAT);
}

const Signature = ({signature}) => (
  <ul className="list-unstyled">
    <li> author: {signature.author}</li>
    <li> created: {formatDate(signature.createdAt)}</li>
    <li> updated: {formatDate(signature.updatedAt)}</li>
  </ul>
);

Signature.defaultProps = {
  author: 'John Doe Jn.',
  createdAt: formatDate('2017-06-01'),
  updatedAt: formatDate('2017-06-01')
};

Signature.propTypes = {
  signature: PropTypes.shape({
    author: PropTypes.string,
    createdAt: PropTypes.string,
    updatedAt: PropTypes.string,
  })
};
export default Signature;
