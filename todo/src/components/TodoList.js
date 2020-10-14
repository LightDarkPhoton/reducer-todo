import React, {useReducer} from 'react'
import { TodoForm } from "./TodoForm"
import { initialState, todoReducer } from "../reducers/TodoReducer"
import { Todo } from './Todo'

export const TodoList = () => {

    const  [state, dispatch] = useReducer(todoReducer, initialState)

    return (
        <div>
            {state.todos.map(elem => {
                return (
                    // <p key={elem.id}>{elem.item}</p>
                    <Todo key={elem.id} dispatch={dispatch} todo={elem}></Todo>
                )
            })}
            <TodoForm dispatch={dispatch}/>
        </div>
        
    )
}