import React, { DOM } from 'react';
import _ from 'lodash';
import moment from 'moment';

import BlogItem from '../ui/BlogItem';

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

export default class BlogList extends React.Component {
  render() {
    return DOM.div(
      null,
      _.map(
        posts,
        (post) => (
          React.createElement(
            BlogItem,
            {key: post.id.toString(), post}
          )
        )
      )
    )
  }
}
