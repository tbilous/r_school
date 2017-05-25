const posts = [
  {
    id: 1,
    image: { src: 'http://fakeimg.pl/300/ff0000/' },
    text: 'Bla'
  },
  {
    id: 2,
    image: { src: 'http://fakeimg.pl/300/FFFF00/' },
    text: 'Bla'
  }
];

class BlogPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { posts }
  }
  render() {
    const { posts } = this.state;
    return React.createElement(BlogList, { posts });
  }
}
