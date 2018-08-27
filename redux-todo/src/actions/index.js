import { ADD_TODO, SET_FILTER, COMPLETED_TODO } from "../constants/actionTypes";
export const addTodo = todoText => ({
  type: ADD_TODO,
  todoText
});
export const setFilter = filter => ({
  type: SET_FILTER,
  filter
});
export const completedTodo = id => ({
  type: COMPLETED_TODO,
  id
});
