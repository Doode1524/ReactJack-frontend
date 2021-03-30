import React from 'react'
import { shuffleDeck } from '../actions'
import { connect } from 'react-redux'
import Test from './Test'
import { Router, Route, Switch } from 'react-router-dom'

const App = () => {
  
    return (
        <div>
            Welcome! Click to get started!
            <Test />
        </div>
    )
}

export default connect(null, { shuffleDeck })(App)
