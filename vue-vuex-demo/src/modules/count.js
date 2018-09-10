const state = {
  count: 2
}
const mutations = {
  increment(state) {
    state.count++
  }
}
const count = {
  state,
  mutations
}
export default count
