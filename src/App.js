import React from 'react';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton';
//import './App.css';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: false },
  { text: 'Tomar el curso de intro a React', completed: false },
  { text: 'Llorar con la llorona', completed: false }
];

function App(props) {
  const [searchValue, setSearchValue] = React.useState("");
  const [todos, setTodos] = React.useState(defaultTodos);

  const completedTodos = todos.filter(todo => !!todo.completed).length; // true
  const totalTodos = todos.length;

  // Buscar todos y mostrarlos
  let serchedTodos = [];
  if(!searchValue.length >= 1) {
    serchedTodos = todos;
  } else {
    serchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  // Marcar todos como completados
  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    console.log(newTodos)
    setTodos(newTodos);
  }
  // desmarcar todos como completados
  const uncompleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = false;
    console.log(newTodos)
    setTodos(newTodos);
  }
  // borrado de todos
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    console.log(newTodos)
    setTodos(newTodos);
  }

  return (
    <>
      <TodoCounter 
       total={totalTodos}
       completed={completedTodos}
      />
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList >   {/*Accedo a la lista con props.children */}
        {serchedTodos.map(todo => (
          <TodoItem 
            key={todo.text}     
            text={todo.text}
            completed={todo.completed}
            onComplete={() => {
              completeTodo (todo.text);
            }}
            onUncomplete={() => {
              uncompleteTodo (todo.text);
            }}
            onDelete={() => {
              deleteTodo (todo.text);
            }}
          />
        ))}
      </TodoList >
      <CreateTodoButton />
    </>
  );
}

export default App;
