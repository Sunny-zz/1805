const state = {
  carts: []
}

const mutations = {
  addToCart(state, newCart) {
    const isInCart =
      state.carts.findIndex(t => t.id === newCart.id) === -1 ? false : true
    if (isInCart) {
      state.carts.find(t => t.id === newCart.id).count++
    } else {
      state.carts.push({ ...newCart, count: 1 })
    }
  },
  subCountNum(state, id) {
    state.carts.find(t => t.id === id).count--
  }
}
const getters = {
  getFoodNum(state) {
    return function(id) {
      return state.carts.find(t => t.id === id)
        ? state.carts.find(t => t.id === id).count
        : 0
    }
  }
}
const carts = {
  state,
  mutations,
  getters
}

export default carts
