import React from 'react';
import { Container, Divider } from 'semantic-ui-react'
import { connect } from 'react-redux'
import axios from 'axios'

import Greeting from './Greeting'
import GreetingInput from './GreetingInput'
import QuoteOfTheDay from './QuoteOfTheDay'


const App = (props) => {
  debugger
  props.fetchQuote()
  return (
    <>
      <Container>
        <Greeting />
        <GreetingInput />
        <Divider />
        <QuoteOfTheDay />
      </Container>
    </>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchQuote: async () => {
      let response = await axios.get('https://api.myjson.com/bins/1gsdrn')
      dispatch({ type: 'SET_QUOTE', payload: response.data.data })
    }
  }
}

export default connect(null, mapDispatchToProps)(App);

