const inistialState = {
  comments: [
    {
      id: '12sda',
      comment: 'git nice'
    }
  ]
}
// rootReducer 函数内 有两个参数 第一个是 state ，第二个是 action (action 是用来修改 state 的)
const rootReducer = (state = inistialState, action) => state

export default rootReducer
