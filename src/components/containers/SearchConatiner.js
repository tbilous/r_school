import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/Posts';

import SearchForm from '../widgets/SearchForm';

function mapDispatchToProps(dispatch) {
  return {
    fetchPosts: (searchTerm) => dispatch(fetchPosts(searchTerm))
  };
}
export default connect(null, mapDispatchToProps)(SearchForm);
