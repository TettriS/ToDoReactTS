import React from "react";
import EditableInput from './editable-input';

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
      <EditableInput
        className={'todo-text'}
        placeholder={'click here'}
        isEditable={false}
        defaultValue={'ToDo: Something'}
      />
    </li>
  );
}

export default ToDoElement;