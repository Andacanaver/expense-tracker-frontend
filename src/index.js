import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import STORE from './STORE'
import { ExpenseProvider } from '../src/contexts/ExpenseContext'

ReactDOM.render(
  <BrowserRouter>
    <ExpenseProvider>
      <App store={STORE} />
    </ExpenseProvider>
  </BrowserRouter>,
  document.getElementById('root')
);