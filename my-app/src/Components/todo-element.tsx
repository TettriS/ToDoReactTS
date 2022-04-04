import React from "react";

interface IToDoObject {
  value: string;
  closable?: boolean;
  time?: object;

}

interface IToDoElement {
  children?: string | JSX.Element | JSX.Element[];
  key: string;
  todo: IToDoObject;
}

function ToDoElement({todo, key}: IToDoElement): JSX.Element {
  return (
    <li
      className={'todo-element'}
      key={key}
    >
      {todo.value}
    </li>
  );
}

export default ToDoElement;