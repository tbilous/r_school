const style =  {width: 200, height: 100, alt: 'img'};

const BlogList = ({posts}) => (
  DOM.div(
    null,
    _.map(
      posts,
      (post, key) => (
        React.createElement(
          BlogItem,
          {key: post.id.toString()},
          DOM.li(null, React.createElement(TextBox, {text: post.text})),
          DOM.li(null,
            React.createElement(Image,
              {
                image: post.image.src,
                width: style.width,
                height: style.height,
                alt: style.alt
              }
            )
          )
        )
      )
    )
  )
);
