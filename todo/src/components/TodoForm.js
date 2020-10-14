import React, {useState} from 'react'

export const TodoForm = (props) => {

    const [newTodo, setNewTodo] = useState("");

    const onChangeHandler = (e) => {
        e.preventDefault()
        setNewTodo(e.target.value)
    }

    const addTodo = (e) => {
        e.preventDefault()
        props.dispatch({type: "ADD_TODO", payload: {item: newTodo, completed: false,  id: Date.now()}})
        setNewTodo("")
    }

    const clearTodos = (e) =>{
        e.preventDefault()
        props.dispatch({type: "CLEAR_TODOS"})
    }
    return (
        <form>
            <input
            className="add-todo"
            type="text"
            name="newTodo"
            value={newTodo}
            onChange={onChangeHandler}>
            </input>

            <button onClick={addTodo}>Add Todo</button>
            <button onClick={clearTodos}>Clear Todos</button>
        </form>
    )
}