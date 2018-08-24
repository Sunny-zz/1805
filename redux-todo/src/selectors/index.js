// 用来计算衍生数据（有 store 中的数据经过计算出来的数据）
export const getCurrentTodos = (state, filter) => {
  switch (filter) {
    case 'all':
      return state
    case 'active':
      return state.filter(todo => !todo.isCompleted)
    case 'completed':
      return state.filter(todo => todo.isCompleted)
    default:
      return null
  }
}
