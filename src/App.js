import React from 'react';
import { Container } from 'semantic-ui-react'
import Greeting from './Greeting'
import GreetingInput from './GreetingInput'


const App = () => {
  return (
    <>
      <Container>
        <Greeting />
        <GreetingInput />
      </Container>
    </>
  )
}

export default App;

