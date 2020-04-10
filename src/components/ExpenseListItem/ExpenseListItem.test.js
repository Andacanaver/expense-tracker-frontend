import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import ExpenseListItem from './ExpenseListItem'

it('renders without crashing', () => {
    const tbody = document.createElement('tbody');
    const expense = {
        id: 1,
        expense: 2.93,
        description: 'Expense',
        date_created: new Date(),
        user_id: 1
    }
    ReactDOM.render(
        <BrowserRouter>
            <ExpenseListItem expense={expense}/>
        </BrowserRouter>, tbody
    )
    ReactDOM.unmountComponentAtNode(tbody)
})