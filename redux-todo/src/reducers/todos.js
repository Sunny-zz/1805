import { ADD_TODO, COMPLETED_TODO, GET_TODOS } from '../constants/actionTypes'

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.todo]
    case COMPLETED_TODO:
      return state.map(
        todo => (todo.id === action.newTodo.id ? action.newTodo : todo)
      )
    case GET_TODOS:
      return action.todos
    default:
      return state
  }
}

export default todos
