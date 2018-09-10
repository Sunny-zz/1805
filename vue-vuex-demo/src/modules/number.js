const state = {
  number: 1
}
const mutations = {
  incrementNumber(state) {
    state.number++
  }
}
const number = {
  state,
  mutations
}
export default number
