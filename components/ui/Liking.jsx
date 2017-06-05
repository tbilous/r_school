import React from 'react';
import PropTypes from 'prop-types';

const Liking = ({likes, incrementLikes, id}) => (
  <span>
    <span>{likes}</span>
    <button onClick={(e) => incrementLikes(id)}>+</button>
  </span>
);

Liking.defaultProps = {
  likes: 99
};

Liking.propTypes = {
  likes: PropTypes.number.isRequired
};

export default Liking
