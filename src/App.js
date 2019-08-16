import React, { Component } from 'react';
import { Container, Button, Input } from 'semantic-ui-react'
import { connect } from 'react-redux'
import Greeting from './Greeting'
import * as greetingActions from './state/actions/greetingActions'

class App extends Component {
  render() {
    let { setGreeting, changeGreeting } = this.props

    return (
      <>
        <Container>
          <Greeting />
          <Input
            placeholder='Type your greeting here'
            onBlur={(event) => setGreeting(event.target.value)}
          />
          <Button
            primary
            onClick={() => changeGreeting()}
          >
            Click Me
          </Button>
        </Container>
      </>
    )
  }
}


export default connect(null, greetingActions)(App);
