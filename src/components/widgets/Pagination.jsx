import React from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';

const Pagination = ({onPageChange, pageCount}) => (
  <ReactPaginate previousLabel={'previous'}
                 nextLabel={'next'}
                 breakLabel={<a href="">...</a>}
                 breakClassName={'break-me'}
                 pageCount={pageCount}
                 marginPagesDisplayed={2}
                 pageRangeDisplayed={5}
                 onPageChange={onPageChange}
                 containerClassName={'pagination'}
                 subContainerClassName={'pages pagination'}
                 activeClassName={'active'}/>
);

Pagination.defaultProps = {
  pageCount: 1
};

Pagination.propTypes = {
  onPageChange: PropTypes.func,
  pageCount: PropTypes.number.isRequired
};
export default Pagination;
