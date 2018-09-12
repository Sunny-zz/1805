import axios from 'axios'
const state = []

const mutations = {
  addTodo(state, todo) {
    state.push({ id: state.length + 1, todo, completed: false })
  },
  completedTodo(state, id) {
    state.find(t => t.id === id).completed = !state.find(t => t.id === id)
      .completed
  },
  getTodos(state, todos) {
    state.push(...todos)
    // vue 提倡直接修改 state
  },
  delTodo(state, id) {
    state.splice(state.findIndex(t => t.id === id), 1)
  }
}
// 由于可能需要异步修改状态，我们通常将异步请求写在模块下的 actions 内，actions 函数并不能直接修改 state ，而是会触发 mutations 从而修改 state。通常 actions 函数名和对应的 mutations 函数名相同。actions 函数要接收其他负载参数的话，函数内的第二个参数就是 dispatch 传递过来的对象。

const actions = {
  getTodos({ commit }) {
    axios.get('http://localhost:3008/todos').then(res => {
      commit('getTodos', res.data)
    })
  },
  delTodo({ commit }, { id }) {
    // console.log(context)
    axios.delete(`http://localhost:3008/todos/${id}`).then(() => {
      commit('delTodo', id)
    })
  }
}
const getters = {
  activeNum(state) {
    return state.filter(t => !t.completed).length
  },
  filterTodos(state) {
    return function(filter) {
      return state.filter(
        todo =>
          filter === 'active'
            ? !todo.completed
            : filter === 'completed'
              ? todo.completed
              : true
      )
    }
  }
}

const todos = {
  state,
  mutations,
  getters,
  actions
}

export default todos
