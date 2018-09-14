import axios from 'axios'

const state = {
  goods: []
}

const mutations = {
  getGoods(state, goods) {
    state.goods.push(...goods)
  }
}

const actions = {
  getGoods({ commit }) {
    const uri = 'http://pezl7mzdp.bkt.clouddn.com/db.json'
    axios.get(uri).then(res => {
      // console.log(res.data)
      commit('getGoods', res.data.goods)
    })
  }
}

const getters = {
  goodsNameList(state) {
    return state.goods.map(t => t.name)
  }
}

const goods = {
  state,
  mutations,
  actions,
  getters
}

export default goods
