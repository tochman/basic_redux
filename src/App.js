import React, { Component } from 'react';
import { Container, Header, Button, Input } from 'semantic-ui-react'
import { connect } from 'react-redux'

class App extends Component {
  render() {
    let { setGreeting, changeGreeting } = this.props

    return (
      <>
        <Container>
          <Header as="h1">{this.props.greeting}</Header>
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
const mapStateToProps = (state) => {
  return {
    greeting: state.greeting
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeGreeting: () => {
      dispatch({ type: 'CHANGE_GREETING' })
    },

    setGreeting: value => {
      dispatch({ type: 'PROPOSE_GREETING', payload: value })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
