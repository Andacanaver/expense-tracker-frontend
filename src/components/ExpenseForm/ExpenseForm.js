import React, { Component } from 'react'
import { format } from 'date-fns'
import ExpenseApiService from '../../services/expenses-api-service'
import ExpenseContext from '../../contexts/ExpenseContext'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'

const addExpense = Yup.object().shape({
    expense: Yup.number().integer().min(0, 'Positive numbers only').required('Required'),
    description: Yup.string().required('Required')
})

class ExpenseForm extends Component {
    static contextType = ExpenseContext;
    state = {
        error: null
    }
    
    render() {
        console.log(this.context.expenses)
        return (
            <div>
                <h2>Add Expense</h2>
                <Formik
                    initialValues={{
                        expense: '',
                        description: ''
                    }}
                    validationSchema={addExpense}
                    onSubmit={values => {
                        ExpenseApiService.insertExpense(values)
                            .then(this.context.addExpense(values))
                            .catch(this.context.setError)
                    }}
                >
                    {({ errors, touched }) => (
                        <Form>
                            <label htmlFor='expense'>Add Expense</label>
                            <Field name='expense' />
                            {errors.expense && touched.expense ? (
                                <div>Please enter a number</div>
                            ) : null}
                            <label htmlFor='description'>Add Description</label>
                            <Field name='description' />
                            {errors.description && touched.description ? (
                                <div>Please Enter a Description</div>
                            ) : null}
                            <button type='submit'>Add Expense</button>
                        </Form>
                    )}
                </Formik>
            </div>
        )
    }
}


export default ExpenseForm

