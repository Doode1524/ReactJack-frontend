import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { shuffleDeck } from '../actions'
import { connect } from 'react-redux'
import Welcome from './Welcome'
import Draw from './Draw'
import User from './User'
import '../app.css'

const App = () => {
  
    return (
        <Router>
            <div className='app'>
                <Switch>
                    <Route path='/' exact component={User} />
                    <Route path='/start' exact component={Welcome} />
                    <Route path='/play' exact component={Draw} />
                </Switch>
            </div>
        </Router>
    )
}

export default connect(null, { shuffleDeck })(App)
