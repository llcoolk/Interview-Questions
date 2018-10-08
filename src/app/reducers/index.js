import data from './data.json'

const initialState = {
  cards: {
    python: data,
    javascript: [],
    programming: []
  },
  current: {
    id: 0,
    question: '',
    answer: '',
    set: 'python'
  }
}

export default (state = initialState, action) => {
  let { id, set } = state.current

  switch (action.type) {
    case 'NEXT':
      // console.log(id, state.cards[set].length)
      if (id < state.cards[set].length - 1) {
        id += 1
      }
      return { ...state, current: { ...state.current, id } }
    case 'PREV':
      if (id > 0) {
        id -= 1
      }
      return { ...state, current: { ...state.current, id } }
    default:
      return state
  }
}
