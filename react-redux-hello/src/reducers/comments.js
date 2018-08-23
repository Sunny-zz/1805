const inistialState = [
  {
    id: '12321',
    comment: 'hahahaajghdaskj',
    topicId: '1'
  }
]

const comments = (state = inistialState, action) => {
  switch (action.type) {
    case 'ADD_COMMENT':
      const { comment } = action
      return [...state, comment]
    default:
      return state
  }
}
export default comments
