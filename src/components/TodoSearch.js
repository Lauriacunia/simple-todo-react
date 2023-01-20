import React from 'react';
import { TodoContext } from '../utils/TodoContext';


function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);
  
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <input
      placeholder="Cebolla"
      value={searchValue}
      onChange={onSearchValueChange}
    />
  );
}

export { TodoSearch };