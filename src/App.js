import React from 'react';
import { AppUI } from './AppUI';

function useLocalStorage(itemName, initialValue){
  
// localStorage
  let localStorageItem = localStorage.getItem(itemName);
  let parsedItem;
  //console.log('localStorageItem', localStorageItem)

  if(!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = [];
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }
   
  const [item, setItem] = React.useState(parsedItem);

   // save Item in localStorage
   const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    console.log('saved item', stringifiedItem)
    setItem(newItem);
  }

  return [
    item,
    saveItem
  ]

}


function App(props) {

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

  return (
    <>
      <AppUI
        totalItem={totalItem}
        completedItem={completedItem}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        serchedItem={serchedItem}
        completeTodo={completeTodo}
        uncompleteTodo={uncompleteTodo}
        deleteTodo={deleteTodo}
      />
    </>
  );
}

export default App;
