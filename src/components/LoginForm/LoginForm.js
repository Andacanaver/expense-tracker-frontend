import React, { Component } from 'react'
import TokenService from '../../services/token-api-service'
import { Button, Input } from '../../Utils/Utils'
import AuthApiService from '../../services/auth-api-service'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import './LoginForm.css'

const loginPost = Yup.object().shape({
    username: Yup.string().required("Required"),
    password: Yup.string().required("Required")
})

export default class LoginForm extends Component {
    static defaultProps = {
        onLoginSuccess: () => {}
    };
    state = { error: null };

    




    render() {
        return (
            <div className='login-form-container'>
                
                <Formik
                    initialValues={{
                        username: 'demo',
                        password: 'TestPassword1!'
                    }}
                    validationSchema={loginPost}
                    onSubmit={values => {
                        AuthApiService.postLogin(values).then(res => {
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
                    }}
                >
                    {({ errors, touched }) => (
                        <Form className='login-form'>
                            <label htmlFor='username'>Username: </label>
                            <Field name='username' />
                            {errors.username && touched.username ? (
                                <div>Please enter your username</div>
                            ) : null}
                            <label htmlFor='password'>Password: </label>
                            <Field name='password' type='password'/>
                            {errors.password && touched.password ? (
                                <div>Please enter your password</div>
                            ) : null}
                            <button type='submit' className='btn'>Login</button>
                        </Form>
                    )}
                </Formik>
            </div>


            
        )
    }
}