import React from 'react';
import {map} from 'lodash';
import {Col, Row, Container} from 'react-materialize';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import BlogList from '../ui/BlogList';
import PieChart from '../ui/PieChart';

import SearchContainer from '../containers/SearchContainer';

const BlogPage = (props) => (
  <Container>
    <Row>
      <Col s={12} m={9}>
        <BlogList {...props.posts} />
      </Col>
      <Col s={12} m={3}>
        <SearchContainer {...props} />
        <PieChart columns={map(props.posts, (post) => ([post.text, post.likes]))}/>
      </Col>
    </Row>
    <Helmet title='Rect School'>
      <meta name="description" content="Helmet application" />
    </Helmet>
  </Container>
);

BlogPage.propTypes = {
  isLoading: PropTypes.bool,
  error: PropTypes.bool,
  posts: PropTypes.array,
};

export default BlogPage;
