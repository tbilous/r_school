import React from 'react';
import PropTypes from 'prop-types';


class Liking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: this.props.likes || Liking.defaultProps.likes
    };
    this.incrementLikes = this.incrementLikes.bind(this)
  }

  incrementLikes() {
    this.setState({ likes: this.state.likes + 1 })
  }

  render() {
    return (
      <span>
        <span>{this.state.likes}</span>
        <button onClick={this.incrementLikes} >+</button>
      </span>
    );
  }
}

Liking.defaultProps = {
  likes: 99
};

Liking.propTypes = {
  likes: PropTypes.number.isRequired
};

export default Liking
