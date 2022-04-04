import React from "react";

interface IToDoObject {
  value: string;
}

interface IToDoElement {
  className?: string;
  name?: string | JSX.Element;
  children?: string | JSX.Element | JSX.Element[];
  id?: string;
  todo: IToDoObject;
}

function ToDoElement({ todo, id }: IToDoElement): JSX.Element {
  return (
    <li className={'todo-element'} id={ id }>
      { todo.value }
    </li>
  );
}

export default ToDoElement;