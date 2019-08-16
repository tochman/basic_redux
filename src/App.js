import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import Greeting from './Greeting'
import GreetingInput from './GreetingInput'


class App extends Component {
  render() {

    return (
      <>
        <Container>
          <Greeting />
          <GreetingInput />
        </Container>
      </>
    )
  }
}

export default App;

