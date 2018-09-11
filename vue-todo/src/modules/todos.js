const state = []

const mutations = {
  addTodo(state, todo) {
    state.push({ id: state.length + 1, todo, completed: false })
  },
  completedTodo(state, id) {
    state.find(t => t.id === id).completed = !state.find(t => t.id === id)
      .completed
  }
}

const todos = {
  state,
  mutations
}

export default todos
