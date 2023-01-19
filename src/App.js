import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from './utils/TodoContext';


function App(props) {

  return (
    <TodoProvider>
      {/* Cualquier componente adentro de TodoProvider puede acceder a los datos */}
      <AppUI />
    </TodoProvider>
  );
}

export default App;
