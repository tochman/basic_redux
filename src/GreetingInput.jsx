import React from 'react'
import { Button, Input } from 'semantic-ui-react'
import { connect } from 'react-redux'
import * as greetingActions from './state/actions/greetingActions'
import { bindActionCreators } from 'redux'

const GreetingInput = (props) => {
  let { setGreeting, changeGreeting } = props

  return (
    <>
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
    </>
  )
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(greetingActions, dispatch)
}

export default connect(null, mapDispatchToProps)(GreetingInput);