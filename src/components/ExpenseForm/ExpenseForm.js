import React, { Component } from 'react'

export default class ExpenseForm extends Component {
    render() {
        return (
            <form className='ExpenseForm'>
                <div className='expense'>
                    <label htmlFor='ExpenseForm_expense'>Expense</label>
                    <input id='ExpenseForm_expense' name='ExpenseForm_expense' required />
                </div>
                <div className='description'>
                    <label htmlFor='ExpenseForm_description'>Description of Expense</label>
                    <input id='ExpenseForm_description' name='ExpenseForm_description'/>
                </div>
                <button type='submit'>Add Expense</button>
            </form>
        )
    }
}