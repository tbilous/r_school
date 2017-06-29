import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Icon, Button, Input, Row} from 'react-materialize';

export default class FormSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    };
    this.updateSearchTerm = this.updateSearchTerm.bind(this);
  }

  updateSearchTerm(e) {
    this.setState({searchTerm: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.searchPosts(this.state.searchTerm, e);
    this.setState({searchTerm: ''});
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit.bind(this) }>
        <Row>
          <Input
            label="Search by text"
            value={ this.state.searchTerm }
            onChange={ this.updateSearchTerm }
          />
        </Row>
        <Button type="submit" waves='light'>
          <span>submit</span>
          <Icon right>send</Icon>
        </Button>
      </form>
    );
  }
}

FormSearch.propTypes = {
  searchPosts: PropTypes.func
};
