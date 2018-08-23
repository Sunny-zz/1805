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
      return [...state]
    default:
      return state
  }
}
export default comments
