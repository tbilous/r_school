import React, {Component} from 'react';
import Immutable from 'immutable';
import {map, bind, size, ceil} from 'lodash';
import {Col, Row, Container} from 'react-materialize';
import request from 'superagent';
import BlogList from '../ui/BlogList';
import PieChart from '../ui/PieChart';
import Pagination from '../widgets/Pagination';

const settings = require('../../../initializers/settings');

export default class BlogPage extends Component {
  constructor(props) {
    super(props);
    this.state = {offset: 0};
    this.handlePageClick = bind(this.handlePageClick, this);
    this.fetchPosts = bind(this.fetchPosts, this);
    this.incrementLikes = this.like.bind(this);
  }

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts() {
    request.get(
      settings.dataServer,
      {},
      (err, res) => this.parseResponse(res)
    );
  }

  parseResponse(response) {
    const {posts, meta} = response.body;
    this.setState({
      posts: posts.slice(this.state.offset, (this.state.offset + meta.perPage)),
      perPage: meta.perPage,
      countPages: ceil(size(posts) / meta.perPage)
    });
  }

  handlePageClick(page) {
    this.setState({
      offset: Math.ceil(page.selected * 10)
    });
    this.fetchPosts();
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
    const {posts, countPages} = this.state;
    return (
      <Container>
        <Row>
          <Col s={12} m={9}>
            <BlogList posts={posts} incrementLikes={this.incrementLikes}/>
            <Pagination onPageChange={this.handlePageClick} pageCount={countPages} />
          </Col>
          <Col s={12} m={3}>
            <PieChart columns={map(posts, (post) => ([post.text, post.likes]))}/>
          </Col>
        </Row>
      </Container>
    );
  }
}
