import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import ExpenseForm from './ExpenseForm'

it('renders without crashgin', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <ExpenseForm/>
        </BrowserRouter>,
        div
    )
    ReactDOM.unmountComponentAtNode(div);
});