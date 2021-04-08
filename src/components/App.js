import React from 'react'
import history from '../history'
import { Router, Route, Switch } from 'react-router-dom'
import { shuffleDeck, currentUser, userWallet } from '../actions'
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

    handleClick = async () => {
        axios
          .delete("http://localhost:3001/logout", { withCredentials: true })
          .then((response) => {
            this.handleLogout();
            history.push("/");
          })
          .catch((error) => console.log(error));
        };
        
         handlePatch = async () => {
            this.props.userWallet(this.props.wallet[0])
            let user = {
                wallet: this.props.wallet[0]
              }

            axios
              .patch("http://localhost:3001/users/" + this.state.user.id, {user}, { withCredentials: true })
              .then((response) => {
                this.handleLogout();
                history.push("/");
              })
              .catch((error) => console.log(error));
        }

    handleLogin = (data) => {
        this.setState ({
            isLoggedIn: true,
            user: data.user
        })
        this.props.currentUser(this.state.user)
        
    }

    handleLogout = () => {
        this.setState({
            isLoggedIn: false,
            user: {}
        })
        history.push('/')
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

    componentWillMount() {
        return this.props.loggedInStatus ? this.redirect() : null
    }

    render() {
    return (
        <Router history={history}>
            <div className='app'>
                <Switch>
                    <Route exact path='/' render={props => (
                        <Home {...props} handleLogout={this.handleLogout} loggedInStatus={this.state.isLoggedIn}/>
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
                    <Route exact path='/play' render={props => (
                        <Draw {...props} handleLogout={this.handleLogout} handleClick={this.handleClick} handlePatch={this.handlePatch}
                        loggedInStatus={this.state.isLoggedIn} />
                    )} />
                </Switch>
            </div>
                <Footer />
        </Router>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        wallet: state.user.wallet,
    }
}

export default connect(mapStateToProps, { shuffleDeck, currentUser, userWallet })(App)
