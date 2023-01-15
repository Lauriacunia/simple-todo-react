import React from "react";

function TodoItem(props) {
    const onChangeTodo = (event) => {
        if(event.target.checked){
            props.onComplete();
        }else {
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