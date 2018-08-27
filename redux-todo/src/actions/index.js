import {
  ADD_TODO,
  SET_FILTER,
  COMPLETED_TODO,
  GET_TODOS
} from '../constants/actionTypes'
import axios from 'axios'
export const addTodo = todoText => dispatch => {
  const uri = 'http://localhost:3008/todos'
  axios.post(uri, { todoText, isCompleted: false }).then(res => {
    dispatch({
      type: ADD_TODO,
      todo: res.data
    })
  })
}
export const setFilter = filter => ({
  type: SET_FILTER,
  filter
})
export const completedTodo = (id, todos) => dispatch => {
  const uri = `http://localhost:3008/todos/${id}`
  axios
    .patch(uri, {
      isCompleted: !todos.find(todo => todo.id === id).isCompleted
    })
    .then(res => {
      dispatch({
        type: COMPLETED_TODO,
        newTodo: res.data
      })
    })
}
export const getTodos = () => dispatch => {
  const uri = 'http://localhost:3008/todos'
  axios.get(uri).then(res => {
    dispatch({
      type: GET_TODOS,
      todos: res.data
    })
  })
}
