import React, {Component} from 'react';
import Immutable from 'immutable';
import {map, size} from 'lodash/collection';
import {ceil} from 'lodash';
import ReactPaginate from 'react-paginate';

import request from 'superagent';

const settings = require('../../../initializers/settings');

import BlogList from '../ui/BlogList';
import PieChart from '../ui/PieChart';
import {Col, Row, Container} from 'react-materialize';
import PaginationMenu from '../widget/Pagination';

export default class BlogPage extends Component {
  constructor(props) {
    super(props);
    this.state = {posts: [], offset: 0};
    this.incrementLikes = this.like.bind(this);
  }

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts() {
    request.get(
      settings.dataServer,
      {},
      (err, res) => this.setState({posts: res.body, pageCount: Math.ceil(res.body.length / 10)})
    );
  }

  pageChangeHandler(page) {
    this.setState({currentPageNumber: page});
    this.fetchPosts(page);
  }

  handlePageClick(data) {
    // () => this.setState({posts: [], offset: Math.ceil(data.selected * 10)});
    // () => this.fetchPosts();
    () => this.setState({offset: Math.ceil(data.selected * 10)}, () => {
      this.fetchPosts();
    });
  }
  // handlePageClick = (data) => {
  //   let selected = data.selected;
  //   let offset = Math.ceil(selected * this.props.perPage);
  //
  //   this.setState({offset: offset}, () => {
  //     this.loadCommentsFromServer();
  //   });
  // };

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
    const {posts, pageCount} = this.state;
    return (
      <Container>
        <Row>
          <Col s={12} m={9}>
            <BlogList posts={posts} incrementLikes={this.incrementLikes}/>
            <ReactPaginate previousLabel={"previous"}
                           nextLabel={"next"}
                           breakLabel={<a href="">...</a>}
                           breakClassName={"break-me"}
                           pageCount={pageCount}
                           marginPagesDisplayed={2}
                           pageRangeDisplayed={5}
                           onPageChange={this.handlePageClick}
                           containerClassName={"pagination"}
                           subContainerClassName={"pages pagination"}
                           activeClassName={"active"} />
          </Col>
          <Col s={12} m={3}>
            <PieChart columns={ map(posts, (post) => ([post.text, post.likes]))}/>
          </Col>
        </Row>
      </Container>
    );
  }
}
