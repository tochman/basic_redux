
const quoteReducer = (state = {quote: ''}) => {
  let quote = {content: "I'm saying soooo smart things....", origin: 'Thomas' }
  return {
    ...state,
    quote: quote
  }
}

export default quoteReducer

