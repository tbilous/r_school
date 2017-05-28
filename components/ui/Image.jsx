import React from 'react';

class Image extends React.Component {
  render() {
    const { src, attr } = this.props;
    return(
      <img
        src={src}
        width={attr.width}
        height={attr.height}
        alt={attr.alt}
      />
    )
  }
}

export default Image
