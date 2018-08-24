import shortId from 'shortid'
const inistialState = [
  {
    id: '123',
    todoText: '哈哈哈',
    isCompleted: false
  },
  {
    id: '456',
    todoText: '哈哈1221312哈',
    isCompleted: true
  },
  {
    id: '897',
    todoText: 'git',
    isCompleted: false
  }
]

const todos = (state = inistialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        { id: shortId(), todoText: action.todoText, isCompleted: false }
      ]
    case 'COMPLETED_TODO':
      return state.map(
        todo =>
          todo.id === action.id
            ? { ...todo, isCompleted: !todo.isCompleted }
            : todo
      )
    default:
      return state
  }
}

export default todos
