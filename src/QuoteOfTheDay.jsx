import React from 'react'
import { Segment } from 'semantic-ui-react'
import { connect } from 'react-redux';

const QuoteOfTheDay = (props) => {
  return (
    <>
      <Segment raised>
        <i>
          {props.quote.content}
        </i>
        <p>
          <small>{props.quote.origin}</small>
        </p>
      </Segment>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    quote: state.quotes.quote
  }
}



export default connect(mapStateToProps)(QuoteOfTheDay)
