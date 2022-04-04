import React from "react";
import ToDoElement from './todo-element';

interface IToDo {
  className: string;
  name?: string | JSX.Element;
  children?: string | JSX.Element | JSX.Element[];
}

function ToDo({ className, name, children }: IToDo): JSX.Element {
  const [user, setUser] = React.useState([
    { value: 'text' },
    { value: 'text2' }
  ]);

  return (
    <div className={className}>
      { name ? <h2 className='todo-title'>{name}</h2> : null }
      <ul>{
        user.map(
          (todo, index) => (
            <ToDoElement
              className={'todo-element'}
              id={ index.toString() }
              todo={ todo }
            />
          )
        )
      }</ul>
    </div>
  );
}

export default ToDo;