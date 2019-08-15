import React, { Component } from 'react';
import { Container, Header, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'

class App extends Component {
  render() {
    return (
      <>
        <Container>
          <Header as="h1">{this.props.greeting}</Header>
          <Button
            primary
            onClick = {() =>{
              this.props.dispatch({type: 'CHANGE_GREETING', payload: 'New Hello World'})
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
