const settings = require('../../../initializers/settings');

const postsPath = ({ searchTerm }) => {
  let searchParam = '';

  if (searchTerm) {
    searchParam = `?search=${searchTerm}`;
  }

  return `${settings.dataServer}posts${searchTerm ? searchParam : ''}`;
};

export { postsPath };
