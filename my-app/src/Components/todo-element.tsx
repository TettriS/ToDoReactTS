import React from "react";

interface IToDoObject {
  value: string;
  id: string;
  time?: object;
}

interface IToDoElement {
  todo: IToDoObject;
  callback?: (key:string, value:string) => void;
}

function ToDoElement({todo, callback}: IToDoElement): JSX.Element {
  const [isDisabled, setIsDisabled] = React.useState(true);
  const inputContainer = React.useRef<HTMLInputElement>(null);
  const toggleDisabled = ():void => setIsDisabled(!isDisabled);
  const onBlur = () => {
    toggleDisabled();
    if (callback instanceof Function && inputContainer && inputContainer.current) callback(todo.id, inputContainer.current.value);
  }
  const onClick = () => {
    toggleDisabled();
    if (inputContainer && inputContainer.current) inputContainer.current.focus();
    console.dir(inputContainer)
  }

  return (
    <li
      className='todo-element'
      onClick={onClick}
    >
      <input
        title={'click here'}
        className='todo-input'
        disabled={isDisabled}
        defaultValue={todo.value || 'ToDo: Something'}
        ref={inputContainer}
        onBlur={onBlur}
      />
    </li>
  );
}

export default ToDoElement;