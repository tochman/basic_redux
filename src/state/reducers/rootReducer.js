import { combineReducers } from 'redux'
import greetingReducer from './greetingReducer'

const rootReducer = combineReducers({helloWorld: greetingReducer})

export default rootReducer