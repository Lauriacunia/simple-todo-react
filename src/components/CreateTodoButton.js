import React from "react";

function CreateTodoButton(props) {
  const onClickButton = () => {
    console.log("Nuevo TODO");
  };
  return <button onClick={onClickButton}>+</button>;
}

export { CreateTodoButton };
