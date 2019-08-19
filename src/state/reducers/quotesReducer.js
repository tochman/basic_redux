

const quoteReducer = (state = { quote: '' }, action) => {
  // let quote = {content: "I'm saying soooo smart things....", origin: 'Thomas' }

  if (action.type === 'SET_QUOTE') {
    debugger
    return {
      ...state,
      quote: action.payload
    }
  } else {
    return state
  }

}

export default quoteReducer

