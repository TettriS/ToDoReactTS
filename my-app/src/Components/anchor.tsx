import React from "react";

interface AnchorProps {
  className: string;
  href: string;
  rel: string;
  target: string;
  children?: string | JSX.Element;
}

function Anchor(props: AnchorProps): JSX.Element {
  return (
    <a
      className={props.className}
      href={props.href}
      rel={props.rel}
      target={props.target}
    >
      {props.children}
    </a>
  );
}

export default Anchor;