import React, { Component } from 'react'
import { format } from 'date-fns'
import ExpenseApiService from '../../services/expenses-api-service'
import ExpenseContext from '../../contexts/ExpenseContext'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'

const addExpense = Yup.object().shape({
    expense: Yup.number().required('Required'),
    description: Yup.string().max(128, 'Description should be less than 128 characters').required('Required')
})

class ExpenseForm extends Component {
    static contextType = ExpenseContext;
    state = {
        error: null
    }
    decimalPlaces = (e) => {
        var t = e.value;
        e.value = (t.indexOf(".") >= 0) ? (t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 3)) : t;
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
                    onSubmit={(values, { resetForm }) => {
                        ExpenseApiService.insertExpense(values)
                            .then(res => {
                                this.context.addExpense(values)
                                resetForm()
                                ExpenseApiService.getExpenses()
                                    .then(this.context.setExpenses)
                            })
                            .catch(this.context.setError)
                    }}
                    
                >
                    {({ errors, touched }) => (
                        <Form>
                            <label htmlFor='expense'>Add Expense</label>
                            <Field 
                                name='expense' 
                                onInput={e => {this.decimalPlaces(e.target)}}
                                
                            />
                            {errors.expense && touched.expense ? (
                                <div>Please enter a number</div>
                            ) : null}
                            <label htmlFor='description'>Add Description</label>
                            <Field name='description' maxLength='128'/>
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

