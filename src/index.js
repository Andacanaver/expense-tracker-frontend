import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import {BrowserRouter} from 'react-router-dom'
import { ExpenseProvider } from '../src/contexts/ExpenseContext'

ReactDOM.render(
  <BrowserRouter>
    <ExpenseProvider>
      <App />
    </ExpenseProvider>
  </BrowserRouter>,
  document.getElementById('root')
);