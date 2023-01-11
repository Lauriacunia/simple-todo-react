import React from "react";

function CreateTodoButton(props) {
    return (
        <button
        onClick={props.setOpenModal}
        >
        +
        </button>
    );
}

export { CreateTodoButton }