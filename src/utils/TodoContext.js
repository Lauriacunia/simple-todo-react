import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();
// contiene Provider y Consumer

function TodoProvider(props) {


  const defaultTodos = [
    { text: "Cortar cebolla", completed: true },
    { text: "Tomar el curso de intro a React", completed: false },
    { text: "Llorar con la llorona", completed: false },
  ];
  
  const [Item, saveItem] = useLocalStorage("TODOS_V1", defaultTodos);

  const [searchValue, setSearchValue] = React.useState("");
 

  const completedItem = Item.filter(todo => !!todo.completed).length; // true
  const totalItem = Item.length;

  // Buscar Item y mostrarlos
  let serchedItem = [];
  if(!searchValue.length >= 1) {
    serchedItem = Item;
  } else {
    serchedItem = Item.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

 
  // Marcar Item como completados
  const completeTodo = (text) => {
    const todoIndex = Item.findIndex(todo => todo.text === text);
    const newItem = [...Item];
    newItem[todoIndex].completed = true;
    saveItem(newItem);
  }
  // desmarcar Item como completados
  const uncompleteTodo = (text) => {
    const todoIndex = Item.findIndex(todo => todo.text === text);
    const newItem = [...Item];
    newItem[todoIndex].completed = false;
    saveItem(newItem);
  }
  // borrado de Item
  const deleteTodo = (text) => {
    const todoIndex = Item.findIndex(todo => todo.text === text);
    const newItem = [...Item];
    newItem.splice(todoIndex, 1);
    saveItem(newItem);
  }
  
  React.useEffect(() => {
    console.log('Use Effect-> watch Item', Item)
  }, [Item])


// el contexto va a envolver a otros componenetes 
// y va a proveerles el valor que le pasemos
    return (
        <TodoContext.Provider value={
            {
                totalItem,
                completedItem,
                searchValue,
                setSearchValue,
                serchedItem,
                completeTodo,
                uncompleteTodo,
                deleteTodo
            }
        }>
            {props.children}
        </TodoContext.Provider>
    )
}





export { TodoContext, TodoProvider };