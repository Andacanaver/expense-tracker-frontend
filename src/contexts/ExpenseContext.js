import React, { Component } from 'react'

const ExpenseContext = React.createContext({

})

export default ExpenseContext;

export class ExpenseProvider extends Component {


    render() {
        const value = {

        }
        return (
            <ExpenseContext.Provider value={value} >
                {this.props.children}
            </ExpenseContext.Provider>
        )
    }
}