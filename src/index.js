import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { BrowserRouter } from 'react-router-dom'
import { ExpenseProvider } from '../src/contexts/ExpenseContext'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

ReactDOM.render(
  <BrowserRouter>
    <ExpenseProvider>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </ExpenseProvider>
  </BrowserRouter>,
  document.getElementById('root')
);