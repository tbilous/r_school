import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { formatDate } from 'helpers/date';

const Signature = ({signature}) => (
  <div className="m__card-footer">
    <span>{signature.author}/</span>
    <span>{formatDate(signature.createdAt)}/</span>
    <span>{formatDate(signature.updatedAt)}</span>
  </div>
);

Signature.defaultProps = {
  author: 'John Doe Jn.',
  createdAt: moment(),
  updatedAt: moment()
};

Signature.propTypes = {
  signature: PropTypes.shape({
    author: PropTypes.string,
    createdAt: PropTypes.string,
    updatedAt: PropTypes.string,
  })
};
export default Signature;
