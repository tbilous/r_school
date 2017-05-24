const Segment = (props) => (
  DOM.ul(
    {
      style: {
        border: '1px solid red',
        padding: '5px',
        textAlign: 'center'
      }
    }
    , props.children
  )
);
