import React from "react";

function TodoItem(props) {
    return (
        <li>
        <label>
            <input type="checkbox" defaultChecked={props.completed} />
            {props.text}
        </label>
        </li>
    );
}

export { TodoItem }