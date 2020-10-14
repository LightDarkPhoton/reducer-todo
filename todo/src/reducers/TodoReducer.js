

export const initialState = {
    todos: [
        {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
      }
    ]
}
export const todoReducer = (state, action) => {

    switch (action.type) {
        
        case "ADD_TODO":
            return {...state, todos:[...state.todos, action.payload]}
        case "TOGGLE_TODO":
            return {...state, todos: state.todos.map(elem => {
                if (elem.id === action.payload) {
                    return ({...elem, completed: !elem.completed})
                } else {
                    return elem
                }
            })}
        case "CLEAR_TODOS":
            return {...state, todos: state.todos.filter(elem => !elem.completed)}

        default:
            return state
    }
}