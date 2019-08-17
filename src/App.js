import React from 'react';
import { Container, Divider } from 'semantic-ui-react'
import Greeting from './Greeting'
import GreetingInput from './GreetingInput'
import QuoteOfTheDay from './QuoteOfTheDay'


const App = () => {
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

export default App;

