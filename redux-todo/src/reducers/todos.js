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
    default:
      return state
  }
}

export default todos
