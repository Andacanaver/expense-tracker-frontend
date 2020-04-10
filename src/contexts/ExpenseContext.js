import React, { Component } from 'react'



const ExpenseContext = React.createContext({
    expenses: [],
    error: null,
    setExpenses: () => {},
    clearExpenses: () => {},
    addExpense: () => {},
    deleteExpense: () => {},
    setError: () => {},
    clearError: () => {}
})

export default ExpenseContext;

export class ExpenseProvider extends Component {
    
    state = {
        expenses: [],
        error: null
    }

    setExpenses = expenses => {
        this.setState({
            expenses: expenses
        })
    }

    addExpense = expense => {
        this.setState({
            expenses: [expense, ...this.state.expenses]
        })
    }

    setError = error => {
        this.setState({error})
    }

    clearError = () => {
        this.setState({ error: null })
    }
    clearExpenses = () => {}
    deleteExpense = expenseId => {
        this.setState({
            expenses: this.state.expenses.filter(expense => expense.id !== expenseId)
        })
    }

    render() {
        const value = {
            expenses: this.state.expenses,
            error: this.state.error,
            setExpenses: this.setExpenses,
            addExpense: this.addExpense,
            deleteExpense: this.deleteExpense,
            setError: this.setError,
            clearError: this.clearError,
            clearExpenses: this.clearExpenses
        }
        return (
            <ExpenseContext.Provider value={value} >
                {this.props.children}
            </ExpenseContext.Provider>
        )
    }
}