import { combineReducers } from 'redux'
import greetingReducer from './greetingReducer'
import quoteReducer from './quotesReducer'

const rootReducer = combineReducers({
  helloWorld: greetingReducer,
  quotes: quoteReducer
})

export default rootReducer