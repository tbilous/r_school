const imgAttr = {width: 200, height: 100, alt: 'img'};

const posts = [
  {
    id: 1,
    image: {
      src: 'http://fakeimg.pl/300/ff0000/',
      width: imgAttr.width,
      height: imgAttr.height,
      alt: imgAttr.alt
    },
    text: 'Bla',
    signature: {
      author: 'John Doe',
      createdAt: '2017-06-01',
      updatedAt: '2017-06-01'
    },
    likes: 20,
  },
  {
    id: 2,
    image: {
      src: 'http://fakeimg.pl/300/FFFF00/',
      width: imgAttr.width,
      height: imgAttr.height,
      alt: imgAttr.alt
    },
    text: 'Bla1',
    signature: {
      author: 'John Doe',
      createdAt: '2017-06-01',
      updatedAt: '2017-06-01'
    },
    likes: 10,
  }
];
export default posts;
