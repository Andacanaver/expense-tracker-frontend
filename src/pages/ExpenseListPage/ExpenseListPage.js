import React, { Component } from 'react'
import { Section } from '../../Utils/Utils'
import ExpenseListItem from '../../components/ExpenseListItem/ExpenseListItem';
import ExpenseContext from '../../contexts/ExpenseContext';
import ExpenseForm from '../../components/ExpenseForm/ExpenseForm'
import ExpenseApiService from '../../services/expenses-api-service';
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';
import './ExpenseListPage.css'


export default class ExpenseListPage extends Component {
    
    static contextType = ExpenseContext;
    static defaultProps = {
        match: {
            params: {}
        }
    }

    componentDidMount() {
        this.context.clearError();
        ExpenseApiService.getExpenses()
            .then(this.context.setExpenses)
            .catch(this.context.setError)
    }
    
    sortExpenses(expenses) {
        const arrOfExpenses = expenses.sort((a, b) => {
            return a[expenses.date_created] < b[expenses.date_created] ? 1 : a[expenses.date_created] > b[expenses.date_created] ? -1 : 0;
        })
        return arrOfExpenses
    }

    renderExpenses() {
        const { expenses } = this.context
        const listOfExpenses = this.sortExpenses(expenses)
        console.log(listOfExpenses)
        if (expenses.length > 0) {
            return (
                <table className='expense-table'>
                    <thead>
                        <tr>
                            {/*<th>Date</th>*/}
                            <th>Expense</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {expenses.map((expense, i) => (
                            <ExpenseListItem key={i} expense={expense} id={expense.id} />
                        ))}
                    </tbody>
                </table>
            )
        } else {
            return (
                <div className='red'>
                    <p>You have no expenses, Congratulations!</p>
                </div>
            )
        }
    }
    render () {
        const { error } = this.context
        return (
            <ErrorBoundary>
                <Section className='ExpenseListPage'>
                    <div className='AddExpensePage'>
                        <ExpenseForm />
                    </div>
                    <div className='ExpenseListItem'>
                        <h1>Previous Expenses</h1>
                        {error ? (
                            <p className='red'>There was an error, try again</p>
                        ) : (
                                this.renderExpenses()
                            )}
                    </div>
                </Section>
            </ErrorBoundary>
        )
    }
}
