const settings = require('../../initializers/settings');

const searchPath = ({ searchTerm }) => {
  let searchParam = '';

  if (searchTerm) {
    searchParam = `?search=${searchTerm}`;
  }

  return `${settings.dataServer}/posts${searchTerm ? searchParam : ''}`;
};

export { searchPath };
