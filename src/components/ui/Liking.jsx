import React from 'react';
import PropTypes from 'prop-types';
import {Button, Chip} from 'react-materialize';

const Liking = ({likes, incrementLikes, id}) => (
  <div>
    <Chip className='teal'>{likes}</Chip>
    <Button waves="light" icon="star" floating onClick={() => incrementLikes(id)}/>
  </div>
);

Liking.defaultProps = {
  likes: 99
};

Liking.propTypes = {
  likes: PropTypes.number.isRequired,
  incrementLikes: PropTypes.func,
  id: PropTypes.number.isRequired
};

export default Liking;
