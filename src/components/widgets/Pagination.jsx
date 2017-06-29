import React from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';

const Pagination = ({perPage,countEl, onPageChange, pageCount}) => (
  countEl > perPage ?
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
   : <div/>
);

Pagination.defaultProps = {
  pageCount: 1,
  perPage: 10,
  countEl: 10
};

Pagination.propTypes = {
  onPageChange: PropTypes.func,
  pageCount: PropTypes.number.isRequired,
  perPage: PropTypes.number.isRequired,
  countEl: PropTypes.number.isRequired
};

export default Pagination;
