import React, { DOM, Component } from 'react';
import moment from 'moment';
import update from 'immutability-helper';
import _ from 'lodash';


import BlogList from '../ui/BlogList';
import Chart from '../ui/Chart';


const img_attr = {width: 200, height: 100, alt: 'img'};

const posts = [
  {
    id: 1,
    image: {
      src: 'http://fakeimg.pl/300/ff0000/',
      attr: {
        width: img_attr.width,
        height: img_attr.height,
        alt: img_attr.alt
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
        width: img_attr.width,
        height: img_attr.height,
        alt: img_attr.alt
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

export class BlogPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts
    };
    this.incrementLikes = this.like.bind(this)
  }

  like(post_id) {
    const arr = posts.findIndex((i) => i.id === post_id);
    const newState = update(posts, {
      posts: {
        [arr]: {
          likes: {$apply: (x) => x + 1}
        }
      }
    });
    this.setState(newState);
  }

  render() {
    return (
      DOM.div(null,
        DOM.div(null,
          React.createElement(BlogList, {
            posts: this.state.posts,
            incrementLikes: this.incrementLikes
          })
        ),
        DOM.div(null,
          React.createElement(Chart, {
            columns: _.map(this.state.posts, (post) => ([post.text, post.likes]))
          })
        )
      )
    )
  }
}
