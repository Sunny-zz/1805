import { createStore } from 'redux'
import rootReducer from '../reducers'
// const initialState = () => 'hello'
// createStore 方法需要接收一个参数 将该参数作为 state 创建到 store中
// 这个参数是一个函数需要返回一个 state
// 也就是我们将需要 store 存储的 state 写到这个函数的返回值中
// redux 中将这个函数命名为 reducers
const store = createStore(rootReducer)

export default store
