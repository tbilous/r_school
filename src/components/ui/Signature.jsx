import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import {DEFAULT_DATE_FORMAT} from '../../constants/Date';
import {Col} from 'react-materialize';

function formatDate(date) {
  return moment(date).format(DEFAULT_DATE_FORMAT);
}

const Signature = ({signature}) => (
  <Col s={12} m={9}>
    <div className="m__card-footer">
      <span>{signature.author}/</span>
      <span>{formatDate(signature.createdAt)}/</span>
      <span>{formatDate(signature.updatedAt)}</span>
    </div>
  </Col>
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
