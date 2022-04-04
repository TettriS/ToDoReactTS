import React from "react";

interface ParagraphProps {
  children?: React.ReactNode;
}

function Paragraph(props: ParagraphProps): JSX.Element {
  return (<p>{props.children}</p>);
}

export default Paragraph;