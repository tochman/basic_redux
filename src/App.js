import React, { Component } from 'react';
import { Container, Header, Button, Input } from 'semantic-ui-react'
import { connect } from 'react-redux'

class App extends Component {
  render() {
    return (
      <>
        <Container>
          <Header as="h1">{this.props.greeting}</Header>
          <Input 
            placeholder = 'Type your greeting here'
            onBlur={(event)=> {
              this.props.dispatch({type: 'PROPOSE_GREETING', payload: event.target.value})
            }}
          />
          <Button
            primary
            onClick = {() =>{
              this.props.dispatch({type: 'CHANGE_GREETING'})
            }}
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

export default connect(mapStateToProps)(App);
