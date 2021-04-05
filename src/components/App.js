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
import axios from 'axios'
import Home from './Home'
import '../app.css'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            isLoggedIn: false,
            user: {}
        };
    }

    componentDidMount() {
        this.loginStatus()
    }

    handleLogin = (data) => {
        this.setState ({
            isLoggedIn: true,
            user: data.user
        })
    }

    handleLogout = () => {
        this.setState({
            isLoggedIn: false,
            user: {}
        })
    }

    loginStatus = () => {
        axios.get('http://localhost:3001/logged_in',
        {withCredentials: true})

        .then(response => {
            if (response.data.logged_in) {
                this.handleLogin(response)
            } else {
                this.handleLogout()
            }
        })
        .catch(error => console.log('api errors:', error))
    }

    render() {
    return (
        <Router history={history}>
            <div className='app'>
                <Switch>
                    <Route exact path='/' render={props => (
                        <Home {...props} loggedInStatus={this.state.isLoggedIn}/>
                    )} />
                    <Route path='/login' render={props => (
                        <SignIn {...props} handleLogin={this.handleLogin}
                        loggedInStatus={this.state.isLoggedIn} />
                    )} />
                    <Route path='/signup' render={props => (
                        <SignUp {...props} handleLogin={this.handleLogin}
                        loggedInStatus={this.state.isLoggedIn} />
                    )} />
                    <Route path='/start' exact component={Welcome} />
                    <Route path='/play' exact component={Draw} />
                </Switch>
            </div>
                <Footer />
        </Router>
        )
    }
}

export default connect(null, { shuffleDeck })(App)
