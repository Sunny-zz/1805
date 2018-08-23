import shortId from 'shortid'
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
      // console.log(action.comment)
      const { comments } = state
      return {
        comments: [...comments, { comment: action.comment, id: shortId() }]
      }
    default:
      return state
  }
}

export default rootReducer
