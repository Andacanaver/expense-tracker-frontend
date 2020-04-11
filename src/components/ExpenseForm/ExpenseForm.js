import React, { Component } from 'react'
import ExpenseApiService from '../../services/expenses-api-service'
import ExpenseContext from '../../contexts/ExpenseContext'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import './ExpenseForm.css'

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
        return (
            <div className='expense-form-container'>
                <h2>Add Expense</h2>
                <Formik
                    initialValues={{
                        expense: '',
                        description: '',
                        date_create: new Date(Date.UTC)
                    }}
                    validationSchema={addExpense}
                    onSubmit={(values, { resetForm }) => {
                        ExpenseApiService.insertExpense(values)
                            .then(res => {
                                this.context.addExpense(values)
                                resetForm()
                                //Not sure this is the best option
                                ExpenseApiService.getExpenses()
                                    .then(this.context.setExpenses)
                            })
                            .catch(this.context.setError)
                    }}
                    
                >
                    {({ errors, touched }) => (
                        <Form>
                            <label htmlFor='expense'>Expense Value</label>
                            <Field 
                                name='expense' 
                                onInput={e => {this.decimalPlaces(e.target)}}
                                maxLength='9'
                            />
                            {errors.expense && touched.expense ? (
                                <div className='input-red'>Please enter a number</div>
                            ) : null}
                            <label htmlFor='description'>What was the Expense for?</label>
                            <Field name='description' maxLength='128'/>
                            {errors.description && touched.description ? (
                                <div className='input-red'>Please Enter a Description</div>
                            ) : null}
                            <button type='submit' className='btn'>Add Expense</button>
                        </Form>
                    )}
                </Formik>
            </div>
        )
    }
}


export default ExpenseForm

