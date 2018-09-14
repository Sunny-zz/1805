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
    if (state.carts.find(t => t.id === id).count === 0) {
      state.carts.splice(state.carts.findIndex(t => t.id === id), 1)
    }
  }
}
const getters = {
  getFoodNum(state) {
    return function(id) {
      return state.carts.find(t => t.id === id)
        ? state.carts.find(t => t.id === id).count
        : 0
    }
  },
  getTotalObj(state) {
    return state.carts.reduce(
      (obj, food) => ({
        allCount: obj.allCount + food.count,
        total: obj.total + food.price * food.count
      }),
      {
        allCount: 0,
        total: 0
      }
    )
  }
}
const carts = {
  state,
  mutations,
  getters
}

export default carts
