const state = {
  filter: 'all'
}

const mutations = {
  filterTodos(state, filter) {
    if (state.filter !== filter) {
      state.filter = filter
    }
  }
}

const filter = {
  state,
  mutations
}

export default filter
