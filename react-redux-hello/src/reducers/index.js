const inistialState = {
  comments: [
    {
      id: '12sda',
      comment: 'git nice'
    }
  ]
}
// rootReducer 函数内 有两个参数 第一个是 state ，第二个是 action (action 是用来修改 state 的)
// 通常 action 的类型必须要写成大写的 使用下划线连接单词
const rootReducer = (state = inistialState, action) => {
  switch (action.type) {
    case 'ADD_COMMENT':
      console.log(action.comment)
      return {
        comments: [
          { id: '12sda', comment: 'git nice' },
          { id: '122sd', comment: 'git asdasd' }
        ]
      }
    default:
      return state
  }
}

export default rootReducer
