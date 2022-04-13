import React from "react";
import ToDoElement from './todo-element';

interface IToDo {
  className: string;
  name?: string | JSX.Element;
}

function ToDo({className, name}: IToDo): JSX.Element {
  const [todos, setTodos] = React.useState([
    {
      value: 'text',
      id: 'first',
    },
    {
      value: 'text2',
      id: 'second',
    }
  ]);
  const updateTodos = (key:string, value:string):void => {
    setTodos(todos.map((todo) => {
      if (todo.id === key)  todo.value = value;
      return todo;
    }));
  }

  return (
    <div className={className}>
      {name ? <h2 className='todo-title'>{name}</h2> : null}
      <ul>{
        todos.map(
          (todo) => (
            <ToDoElement
              key={todo.id}
              todo={todo}
              callback={updateTodos}
            />
          )
        )
      }</ul>
    </div>
  );
}

export default ToDo;