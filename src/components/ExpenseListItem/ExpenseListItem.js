import React, { Component } from 'react'
import ExpenseContext from '../../contexts/ExpenseContext'
import ExpenseApiService from '../../services/expenses-api-service'
import './ExpenseListItem.css'

export default class ExpenseListItem extends Component {
    static contextType = ExpenseContext;

    handleDelete = e => {
        e.preventDefault();
        const expenseId = this.props.id
        ExpenseApiService.deleteExpense(expenseId)
            .then(this.context.deleteExpense(expenseId))
            .catch(this.context.setError())
    }
    render() {
        const { expense } = this.props
        return (
            <tr>
                {/*//todo add date column*/}
                <td>{`$${expense.expense}`}</td>
                <td>{expense.description}</td>
                <td><button className='expense__delete' type='button' onClick={this.handleDelete}>Delete</button></td>
            </tr>
            
        )
    }
}