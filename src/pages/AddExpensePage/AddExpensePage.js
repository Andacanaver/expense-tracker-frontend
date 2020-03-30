import React, { Component } from 'react'
import { Section } from '../../Utils/Utils'
import ExpenseForm from '../../components/ExpenseForm/ExpenseForm';


export default class ExpensePage extends Component {
    render() {
        return (
            <Section className='AddExpensePage'>
                <ExpenseForm />
            </Section>
        )
    }
}