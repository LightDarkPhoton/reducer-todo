import React from 'react';

export const Todo = (props) => {

    const toggleTodo = (id) => {
        props.dispatch({type: "TOGGLE_TODO", payload: id})
    }

    return(
        <div
            className={`todo ${props.todo.completed ? "completed" : ""}`}
            onClick={()=> toggleTodo(props.todo.id)}
        >
            <p>{props.todo.item}</p>
        </div>
    )
}