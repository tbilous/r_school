const posts = [
  {
    image: {src: 'http://fakeimg.pl/300/ff0000/'},
    text: 'Bla'
  },
  {
    image: {src: 'http://fakeimg.pl/300/FFFF00/'},
    text: 'Bla'
  }
];

class BlogList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {posts}
  }

  render() {
    const {posts} = this.state;
    return React.createElement(BlogItem, {posts});
  }
}

ReactDOM.render(
  React.createElement(BlogList),
  document.getElementById('app')
);
