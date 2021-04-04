import React from 'react'
import history from '../history'
import { Router, Route, Switch } from 'react-router-dom'
import { shuffleDeck } from '../actions'
import { connect } from 'react-redux'
import Welcome from './Welcome'
import Draw from './Draw'
import SignUp from './SignUp'
import SignIn from './SignIn'
import Footer from './Footer';
import '../app.css'

const App = () => {
  
    return (
        <Router history={history}>
            <div className='app'>
                <Switch>
                    <Route path='/' exact component={SignIn} />
                    <Route path='/new' exact component={SignUp} />
                    <Route path='/start' exact component={Welcome} />
                    <Route path='/play' exact component={Draw} />
                </Switch>
            </div>
                <Footer />
        </Router>
    )
}

export default connect(null, { shuffleDeck })(App)
