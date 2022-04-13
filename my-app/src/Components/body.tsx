import React from "react";
import ToDo from './todo';

interface BodyProps {
  className: string;
  children?: string | JSX.Element | JSX.Element[];
}

function Body(props: BodyProps): JSX.Element {
  return (
    <div
      className={ props.className }
    >
      <ToDo className='todo'></ToDo>
    </div>
  );
}

export default Body;