import React, {Component} from 'react';
import Immutable from 'immutable';
import {map} from 'lodash/collection';

import request from 'superagent';

const settings = require('../../../initializers/settings');

import BlogList from '../ui/BlogList';
import PieChart from '../ui/PieChart';
import {Col, Row, Container} from 'react-materialize';

export default class BlogPage extends Component {
  constructor(props) {
    super(props);
    this.state = { posts: []};
    this.incrementLikes = this.like.bind(this);
  }

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts() {
    request.get(
      settings.dataServer,
      {},
      (err, res) => this.setState({ posts: res.body })
    );
  }

  like(postId) {
    const posts = this.state.posts;
    const arr = posts.findIndex((i) => i.id === postId);
    const origPost = Immutable.fromJS(posts);

    this.setState({
      posts: origPost
        .setIn([arr, 'likes'], posts[arr].likes + 1)
        .toJS()
    });
  }

  render() {
    const posts = this.state.posts;
    return (
      <Container>
        <Row>
          <Col s={12} m={9}>
            <BlogList posts={posts} incrementLikes={this.incrementLikes}/>
          </Col>
          <Col s={12} m={3}>
            <PieChart columns={ map(posts, (post) => ([post.text, post.likes]))}/>
          </Col>
        </Row>
      </Container>
    );
  }
}
