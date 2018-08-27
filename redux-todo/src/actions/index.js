import {
  ADD_TODO,
  SET_FILTER,
  COMPLETED_TODO,
  GET_TODOS
} from '../constants/actionTypes'
import axios from 'axios'
export const addTodo = todo => ({
  type: ADD_TODO,
  todo
})
export const setFilter = filter => ({
  type: SET_FILTER,
  filter
})
export const completedTodo = id => ({
  type: COMPLETED_TODO,
  id
})
export const getTodos = () => dispatch => {
  const uri = 'http://localhost:3008/todos'
  axios.get(uri).then(res => {
    dispatch({
      type: GET_TODOS,
      todos: res.data
    })
  })
}
