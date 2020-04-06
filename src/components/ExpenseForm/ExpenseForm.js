import React, { Component } from 'react'
import ExpenseContext from '../../contexts/ExpenseContext'
import { format } from 'date-fns'
import { v4 as uuidv4 } from 'uuid';
import ExpenseApiService from '../../services/expenses-api-service'

export default class ExpenseForm extends Component {
    static contextType = ExpenseContext;
    state = {
        error: null
    }

    handleSubmit = e => {
        e.preventDefault();
        this.setState({ error: null })
        const { expense, description } = e.target
        const newExpense = {
            expense: parseFloat(expense.value).toFixed(2),
            description: description.value,
            date_created: new Date()
        }
        ExpenseApiService.insertExpense(newExpense)
            .then(res => {
                expense.value = ''
                description.value = ''
                this.context.addExpense(res)
            })
            .catch(this.context.setError)
    }
    render() {
        const { error } = this.state
        console.log(this.context.expenses)
        return (
            <form className='ExpenseForm' onSubmit={this.handleSubmit}>
                <div role='alert'>
                    {error && <p className='red'>{error}</p>}
                </div>
                <div className='expense'>
                    <label htmlFor='ExpenseForm_expense'>Expense</label>
                    <input id='ExpenseForm_expense' name='expense' required />
                </div>
                <div className='description'>
                    <label htmlFor='ExpenseForm_description'>Description of Expense</label>
                    <input id='ExpenseForm_description' name='description'/>
                </div>
                <button type='submit'>Add Expense</button>
            </form>
        )
    }
}