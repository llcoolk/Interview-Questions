import cards from './data.json'

const initialState = {
  cards,
  current: {
    id: 0,
    flipped: false,
    question: '',
    answer: '',
    type: 'question',
    set: 'python'
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CURRENT': {
      const { answer, flipped, id, question, cardType } = action
      return { ...state, current: { answer, flipped, id, question, type: cardType } }
    }
    case 'NEXT':
      return { ...state, current: { ...state.current, id: action.id } }
    case 'PREV':
      return { ...state, current: { ...state.current, id: action.id } }
    default:
      return state
  }
}
