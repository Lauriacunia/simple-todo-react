import React from "react";

import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";
import { TodoContext } from "./utils/TodoContext";
import { Modal } from "./components/Modal";
import { TodoForm } from "./components/TodoForm";

function AppUI() {
  const {
    serchedItem,
    completeTodo,
    uncompleteTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);
  return (
    <>
      <TodoCounter />
      <TodoSearch />

      {/* <TodoContext.Consumer> */}
        {/* Sintaxis de render props. Se envia un callback que recibe el valor del contexto */}
        {/* { ({ serchedItem, completeTodo, uncompleteTodo, deleteTodo }) => ( */}
          <TodoList>
          {/*Accedo a la lista con props.children */}
          {serchedItem.map((todo) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => {
                completeTodo(todo.text);
              }}
              onUncomplete={() => {
                uncompleteTodo(todo.text);
              }}
              onDelete={() => {
                deleteTodo(todo.text);
              }}
            />
          ))}
        </TodoList>
        {/* )} */}
      {/* </TodoContext.Consumer> */}

      {openModal && (
        <Modal >
           <TodoForm></TodoForm>
        </Modal>
      )}
      <CreateTodoButton 
        setOpenModal={setOpenModal}
      />
    </>
  );
}

export { AppUI };
