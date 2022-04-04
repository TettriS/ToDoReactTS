import React from "react";

interface ImageProps {
  className: string;
  src: string;
  alt: string;
}

function Image(props: ImageProps): JSX.Element {
  return (
    <img
      className={props.className}
      src={props.src}
      alt={props.alt}
    />
  );
}

export default Image;