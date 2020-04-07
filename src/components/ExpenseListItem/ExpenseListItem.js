import React, { Component } from 'react'
import ExpenseContext from '../../contexts/ExpenseContext'
import ExpenseApiService from '../../services/expenses-api-service'
import { format, parseISO } from 'date-fns'
import { NiceDate } from '../../Utils/Utils'

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
        const dateCreated = parseISO(expense.date_created)
        console.log(dateCreated)
        return (
            <tr>
                {/*<td>{format(dateCreated, 'dd/MM/yyyy')}</td>*/}
                <td>{`$ ${expense.expense}`}</td>
                <td>{expense.description}</td>
                <td><button className='expense__delete' type='button' onClick={this.handleDelete}>Delete</button></td>
            </tr>
            
        )
    }
}