const BlogItem = ({posts}) => (
  DOM.div(
    null,
    _.map(
      posts,
      (post, key) => (
        React.createElement(
          Segment,
          {key},
          DOM.li(null, React.createElement(TextBox, {post})),
          DOM.li(null, React.createElement(Image, {post}))
        )
      )
    )
  )
);
