import React from "react";
import "./TodoCounter.css";
import { TodoContext } from "../utils/TodoContext";
// Estilos en línea -> se interpolan en el componente
const misEstilos = {
  color: "red",
  fontSize: "20px",
};

function TodoCounter() {
 // const { total, completed } = props; // Destructuring -> puede hacerse tambien en la declaración de la función
  const { totalItem, completedItem } = React.useContext(TodoContext); 

  return (
    <>
      <h1 className="title">Mi lista de tareas</h1>
      <h2 style={misEstilos}>Has completado { completedItem } de { totalItem } TODOs</h2>
    </>
  );
}

export { TodoCounter };
