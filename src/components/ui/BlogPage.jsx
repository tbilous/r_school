import React from 'react';
import {map, bind, size, ceil, slice} from 'lodash';
import {Col, Row, Container} from 'react-materialize';
import PropTypes from 'prop-types';

import BlogList from '../ui/BlogList';
import PieChart from '../ui/PieChart';
import Pagination from '../widgets/Pagination';

import SearchContainer from '../containers/SearchConatiner';
import {searchPath} from 'helpers/search';

// export default class BlogPage extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {offset: 0};
//     this.handlePageClick = bind(this.handlePageClick, this);
//     this.fetchPosts = bind(this.fetchPosts, this);
//     this.incrementLikes = this.like.bind(this);
//     this.searchPosts = this.searchPosts.bind(this);
//   }
//
//   componentDidMount() {
//     this.fetchPosts();
//   }
//
//   fetchPosts(searchTerm) {
// // eslint-disable-next-line prefer-const
//     let queryObject = {searchTerm};
//     request.get(
//       searchPath(queryObject),
//       {},
//       (err, res) => this.parseResponse(res)
//     );
//   }
//
//   parseResponse(response) {
//     this.setState({
//       posts: response.body.posts,
//       perPage: response.body.meta.perPage
//     });
//   }
//
//   searchPosts(searchTerm, e) {
//     e.preventDefault();
//     this.fetchPosts(searchTerm);
// // eslint-disable-next-line react/prop-types
//     this.props.history.push({pathname: '/', search: searchTerm});
//   }
//
//   handlePageClick(page) {
//     this.setState({
//       offset: Math.ceil(page.selected * 10)
//     });
//     this.fetchPosts();
//   }
//
//   like(postId) {
//     const posts = this.state.posts;
//     const arr = posts.findIndex((i) => i.id === postId);
//     const origPost = Immutable.fromJS(posts);
//
//     this.setState({
//       posts: origPost
//         .setIn([arr, 'likes'], posts[arr].likes + 1)
//         .toJS()
//     });
//   }
//
//   render() {
//     const {posts, offset, perPage} = this.state;
//     const countEl = size(posts);
//     const pageCount = ceil(countEl / perPage);
//     const paginatedPage = countEl > perPage ? slice(posts, offset, (offset + perPage)) : posts;
//
//     return (
//       <Container>
//         <Row>
//           <Col s={12} m={9}>
//             <BlogList posts={paginatedPage} incrementLikes={this.incrementLikes}/>
//             <Pagination perPage={perPage}
//                         countEl={countEl} onPageChange={this.handlePageClick} pageCount={pageCount}/>
//           </Col>
//           <Col s={12} m={3}>
//             <FormSearch searchPosts={ this.searchPosts } {...this.props} />
//             <PieChart columns={map(posts, (post) => ([post.text, post.likes]))}/>
//           </Col>
//         </Row>
//       </Container>
//     );
//   }
// }

const handlePageClick = (page) => {
  this.setState({
    offset: Math.ceil(page.selected * 10)
  });
  this.fetchPosts();
};

const BlogPage = (props) => (
  <Container>
    <Row>
      <Col s={12} m={9}>
        <BlogList {...props.posts} />
        {/*<Pagination perPage={props.meta}*/}
                                {/*countEl={size(props.posts)}*/}
                    {/*onPageChange={handlePageClick} pageCount={size(props.posts) / props.meta}*/}
        {/*/>*/}
      </Col>
      <Col s={12} m={3}>
        <SearchContainer {...props} />
        <PieChart columns={map(props.posts, (post) => ([post.text, post.likes]))}/>
      </Col>
    </Row>
  </Container>
);

BlogPage.propTypes = {
  isLoading: PropTypes.bool,
  error: PropTypes.bool,
  posts: PropTypes.array,
  // meta: PropTypes.number
};

export default BlogPage;
