import React from "react";

const TodoContext = React.createContext();
// contiene Provider y Consumer

function TodoProvider(props) {
// el contexto va a envolver a otros componenetes 
// y va a proveerles el valor que le pasemos
    return (
        <TodoContext.Provider value={props.value}>
            {props.children}
        </TodoContext.Provider>
    )
}
<TodoContext.Consumer></TodoContext.Consumer>




export { TodoContext };