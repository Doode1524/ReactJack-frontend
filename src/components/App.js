import React from 'react'
import { shuffleDeck } from '../actions'
import { connect } from 'react-redux'
import Test from './Test'
import { Router, Route, Switch } from 'react-router-dom'

const App = () => {
  
    return (
        <div>
            <Test />
            Hello Blackjack App!
        </div>
    )
}

export default connect(null, { shuffleDeck })(App)
