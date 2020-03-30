import React, {Component} from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import LandingPage from './pages/LandingPage/LandingPage';
import LoginPage from './pages/LoginPage/LoginPage'
import RegistrationPage from './pages/RegistrationPage/RegistrationPage'
import AddExpensePage from './pages/AddExpensePage/AddExpensePage';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header className="App__header">
          <Header />
        </header>
        <main className="App__main">
          <div role='alert'>

          </div>
          <Switch>
            <Route exact path={'/'} component={LandingPage} />
            <Route path={'/login'} component={LoginPage} />
            <Route path={'/register'} component={RegistrationPage} />
            <Route path={'/addExpense'} component={AddExpensePage} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
