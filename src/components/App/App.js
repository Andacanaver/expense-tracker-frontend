import React, {Component} from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Header from '../Header/Header'
import LandingPage from '../../pages/LandingPage/LandingPage';
import LoginPage from '../../pages/LoginPage/LoginPage'
import RegistrationPage from '../../pages/RegistrationPage/RegistrationPage'
import ExpenseListPage from '../../pages/ExpenseListPage/ExpenseListPage';
import ExpenseContext from '../../contexts/ExpenseContext'
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';



class App extends Component {
  static contextType = ExpenseContext;

  state = {
    hasError: false,
    isLoggedIn: null,
    userId: null,
    user: {}
  }
  static getDerivedStateFromError(error) {
    return { hasError: true }
  }
  
  handleLogout = () => {
    this.setState({ isLoggedIn: false })
  }
  setUser = user => {
    this.setState({ user: user })
  }
  handleLogin = userId => {
    this.setState({ isLoggedIn: true, userId: userId})
  }
  render() {
    return (
      <div className="App">
        <header className="App__header">
          <Header logout={this.handleLogout} userId={this.state.userId} setUser={this.setUser} />
        </header>
        <main className="App__main">
          <div role='alert'>
            {this.state.hasError && <p className='red'>There was an error!</p>}
          </div>
          <Switch>
            <Route exact path={'/'} component={LandingPage} />
            <Route path={'/login'} render={(props)=>{return <LoginPage login={this.handleLogin} {...props}/>}} />
            <Route path={'/register'} component={RegistrationPage} />
            <Route path={'/expenses'} component={ExpenseListPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
