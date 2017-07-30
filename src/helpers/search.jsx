const searchPath = ({ searchTerm }) => {
  let searchParam = '';

  if (searchTerm) {
    searchParam = `?search=${searchTerm}`;
  }

  return `/posts${searchTerm ? searchParam : ''}`;
};

export { searchPath };
