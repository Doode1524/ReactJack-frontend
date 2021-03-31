import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { shuffleDeck } from '../actions'
import { connect } from 'react-redux'
import Welcome from './Welcome'
import Draw from './Draw'

const App = () => {
  
    return (
        <Router>
            <>
            <Switch>
                <Route path='/' exact component={Welcome} />
                <Route path='/play' exact component={Draw} />
            </Switch>
            </>
        </Router>
    )
}

export default connect(null, { shuffleDeck })(App)
