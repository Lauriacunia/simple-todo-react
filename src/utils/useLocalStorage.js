import React from "react";

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

export { useLocalStorage };