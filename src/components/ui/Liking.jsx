/* eslint-disable react/prefer-stateless-function */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, Chip} from 'react-materialize';


export default class Liking extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Chip className='teal'>{this.props.likes}</Chip>
        <Button waves="light" icon="star"
                floating onClick={() => this.props.likePost()}
        />
      </div>
    );
  }
}

Liking.defaultProps = {
  likes: 0
};

Liking.defaultProps = {
  likes: 99
};

Liking.propTypes = {
  likes: PropTypes.number.isRequired,
  likePost: PropTypes.func,
  id: PropTypes.number.isRequired
};
