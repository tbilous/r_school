import React, { DOM, Component } from 'react';
import moment from 'moment';
import Immutable from 'immutable';
import { map } from 'lodash/collection';


import BlogList from '../ui/BlogList';
import PieChart from '../ui/PieChart';


const imgAttr = {width: 200, height: 100, alt: 'img'};

const posts = [
  {
    id: 1,
    image: {
      src: 'http://fakeimg.pl/300/ff0000/',
      attr: {
        width: imgAttr.width,
        height: imgAttr.height,
        alt: imgAttr.alt
      }
    },
    text: 'Bla',
    signature: {
      author: 'John Doe',
      created_at: moment().startOf('day').fromNow(),
      updated_at: moment().startOf('day').fromNow()
    },
    likes: 20,
  },
  {
    id: 2,
    image: {
      src: 'http://fakeimg.pl/300/FFFF00/',
      attr: {
        width: imgAttr.width,
        height: imgAttr.height,
        alt: imgAttr.alt
      }
    },
    text: 'Bla',
    signature: {
      author: 'John Doe',
      created_at: moment().startOf('day').fromNow(),
      updated_at: moment().startOf('day').fromNow()
    },
    likes: 10,
  }
];

export default class BlogPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts
    };
    this.incrementLikes = this.like.bind(this)
  }

  like(post_id) {
    const posts = this.state.posts;
    const arr = posts.findIndex((i) => i.id === post_id);
    const origPost = Immutable.fromJS(posts);

    this.setState({
      posts: origPost
        .setIn([ arr, 'likes'], posts[arr].likes + 1)
        .toJS()
    })
  }

  render() {
    const posts = this.state.posts;
    return (
      DOM.div(null,
        DOM.div(null,
          React.createElement(BlogList, {
            posts: posts,
            incrementLikes: this.incrementLikes
          })
        ),
        DOM.div(null,
          React.createElement(PieChart, {
            columns: map(posts, (post) => ([post.text, post.likes]))
          })
        )
      )
    )
  }
}
