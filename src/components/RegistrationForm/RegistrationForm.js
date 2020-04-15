import React, { Component } from 'react'
import AuthApiService from '../../services/auth-api-service'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import TokenService from '../../services/token-api-service'
import './RegistrationForm.css'

const registerValidation = Yup.object().shape({
    full_name: Yup.string().min(3, 'name must be longer than 3 characters').required('Required'),
    email_address: Yup.string().email().required('Required'),
    username: Yup.string().min(3, 'needs to be longer than 3 characters').max(16, 'Can be no longer than 16 characters').required('Required'),
    password: Yup.string().min(8, 'must be at least 8 characters long').max(32, 'can be no longer than 32 charactes').required('Required')
})

export default class RegistrationForm extends Component {
    static defaultProps = {
        onRegistrationSuccess: () => {},
        onLoginSuccess: () => {}
    }
    state = {
        error: null
    }
    render() {
        const { error } = this.state;
        return (
            <div className='register-form-container'>
                <Formik
                    initialValues={{
                        full_name: '',
                        email_address: '',
                        username: '',
                        password: ''
                    }}
                    validationSchema={registerValidation}
                    onSubmit={values => {
                        AuthApiService.postUser(values)
                            .then(res => {
                                if (!res.ok) {
                                    res.json().then(response => {
                                        this.setState({ error: response.error })
                                    })
                                } else {
                                    const { username, password } = values
                                    const login = {username, password}
                                    //on successful registration, will login the user and direct to expenses page
                                    AuthApiService.postLogin(login).then(res => {
                                        if (!res.ok) {
                                            res.json().then(responseJson =>
                                                this.setState({ error: responseJson.error }))
                                        } else {
                                            res.json().then(resJson => {
                                                TokenService.saveAuthToken(resJson.authToken);
                                                this.props.onLoginSuccess(resJson.userId)
                                            })
                                        }
                                    })
                                }
                            })
                    }}
                >
                    {({ errors, touched }) => (
                        <Form className='register-form'>
                            <div role='alert'>
                                {error && <p className='red'>{error}</p>}
                            </div>
                            <label htmlFor='full_name'>Full Name: </label>
                            <Field name='full_name'/>
                            {errors.full_name && touched.full_name ? (
                                <div>Enter a name</div>
                            ) : null}
                            <label htmlFor='email_address'>Email Address: </label>
                            <Field name='email_address' type='email'/>
                            {errors.email_address && touched.email_address ? ( <div>Enter an email address</div>) : null}
                            <label htmlFor='username'>Username: </label>
                            <Field name='username'/>
                            {errors.username && touched.password ? (<div>Enter a user name</div>) : null}
                            <label htmlFor='password'>Password</label>
                            <Field name='password' type='password'/>
                            {errors.password && touched.password ? (
                                <div>Enter a password</div>
                            ) : null}
                            <button type='submit' className='btn'>Register</button>
                        </Form>

                    )}
                </Formik>
            </div>
        )
    }
}