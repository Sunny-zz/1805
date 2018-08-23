import comments from './comments'
import topics from './topics'
import { combineReducers } from 'redux'
// rootReducer 函数内 有两个参数 第一个是 state ，第二个是 action (action 是用来修改 state 的)
// 通常 action 的类型必须要写成大写的 使用下划线连接单词
const rootReducer = combineReducers({
  comments,
  topics
})

export default rootReducer
