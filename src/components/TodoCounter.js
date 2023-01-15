import React from "react";
import "./TodoCounter.css";
// Estilos en línea -> se interpolan en el componente
const misEstilos = {
  color: "red",
  fontSize: "20px",
};

function TodoCounter(props) {
  const { total, completed } = props; // Destructuring -> puede hacerse tambien en la declaración de la función

  return (
    <>
      <h1 className="title">Mi lista de tareas</h1>
      <h2 style={misEstilos}>Has completado { completed } de { total } TODOs</h2>
    </>
  );
}

export { TodoCounter };
