import React from 'react';
import PropTypes from 'prop-types';

const Liking = ({likes, incrementLikes, id}) => (
  <div className="text-center">
    <span>{likes}</span>
    <button onClick={() => incrementLikes(id)}>+</button>
  </div>
);

Liking.defaultProps = {
  likes: 99
};

Liking.propTypes = {
  likes: PropTypes.number.isRequired
};

export default Liking;
