import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const Signature = ({signature}) => (
  <div className="m__card-footer">
    <span>{signature.author}/</span>
    <span>{signature.createdAt}/</span>
    <span>{signature.updatedAt}</span>
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
