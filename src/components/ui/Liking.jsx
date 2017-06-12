import React from 'react';
import PropTypes from 'prop-types';
import { Button, Chip, Col, Icon } from 'react-materialize';

const Liking = ({likes, incrementLikes, id}) => (
  <Col s={12} m={3}>
    <Chip className='teal'>{likes}</Chip>
    <Button waves="light" icon="star" floating onClick={() => incrementLikes(id)}/>
  </Col>
);

Liking.defaultProps = {
  likes: 99
};

Liking.propTypes = {
  likes: PropTypes.number.isRequired
};

export default Liking;
