import React from "react";

function TodoItem(props) {
    const onChangeTodo = (event) => {
        console.log(event.target.checked);
        if(event.target.checked){
            console.log("Completado");
            props.onComplete();
        }else {
            console.log("Descompletado");
            props.onUncomplete();
        }
             
    };


    const style = {
        marginRight: "1rem",
    };

    return (

        <li>
        <label style= {style}>
            <input type="checkbox" 
            defaultChecked={props.completed} 
            onChange={ onChangeTodo } 
            />
            {props.text}
        </label>
        <i className="fa-solid fa-trash"
           onClick={props.onDelete}
        ></i>
        </li>
        
    );
}

export { TodoItem }