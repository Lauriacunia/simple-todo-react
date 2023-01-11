import React from 'react';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton';
//import './App.css';

const todos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el curso de intro a React', completed: false },
  { text: 'Llorar con la llorona', completed: false }
];

function App(props) {
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList >   {/*Accedo a la lista con props.children */}
        {todos.map(todo => (
          <TodoItem 
            key={todo.text}     
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList >
      <CreateTodoButton />
    </>
  );
}

export default App;
