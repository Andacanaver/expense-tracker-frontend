import React, {Component} from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Header from '../Header/Header'
import LandingPage from '../../pages/LandingPage/LandingPage';
import LoginPage from '../../pages/LoginPage/LoginPage'
import RegistrationPage from '../../pages/RegistrationPage/RegistrationPage'
import ExpenseListPage from '../../pages/ExpenseListPage/ExpenseListPage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';



class App extends Component {

  state = {
    hasError: false,
    isLoggedIn: null,
    userId: null
  }
  static getDerivedStateFromError(error) {
    return { hasError: true }
  }
  //used to log out the user
  handleLogout = () => {
    this.setState({ isLoggedIn: false })
  }
  //used to get the users id and mark logged in
  handleLogin = userId => {
    this.setState({ isLoggedIn: true, userId: userId})
  }
  render() {
    return (
      <div className="App">
        <header className="App__header">
          <Header logout={this.handleLogout} />
        </header>
        <main className="App__main">
          <div role='alert'>
            {this.state.hasError && <p className='red'>There was an error!</p>}
          </div>
          <Switch>
            <Route exact path={'/'} component={LandingPage} />
            <Route path={'/login'} render={(props)=>{return <LoginPage login={this.handleLogin} {...props}/>}} />
            <Route path={'/register'} render={(props) => { return <RegistrationPage login={this.handleLogin} {...props} /> }}/>
            <Route path={'/expenses'} component={ExpenseListPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
