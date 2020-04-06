import React, { Component } from 'react'
import { Button, Input, Required } from '../../Utils/Utils'
import AuthApiService from '../../services/auth-api-service'
import ExpenseContext from '../../contexts/ExpenseContext'

export default class RegistrationForm extends Component {
    static contextType = ExpenseContext
    static defaultProps = {
        onRegistrationSuccess: () => {}
    }
    state = {
        error: null
    }
    handleSubmit = ev => {
        ev.preventDefault()
        const { full_name, email_address, username, password } = ev.target;
        this.setState({ error: null });

        AuthApiService.postUser({
            full_name: full_name.value,
            email_address: email_address.value,
            username: username.value,
            password: password.value
        })
            .then(res => {
                if(!res.ok) {
                    res.json().then(response => {
                        this.setState({ error: response.error })
                    })
                } else {
                    full_name.value = ''
                    email_address.value = ''
                    username.value = ''
                    password.value = ''
                    res.json().then(response => {
                        this.props.onRegistrationSuccess();
                    })
                }
            })
    }
    render() {
        const { error } = this.state;
        return (
            <form className='RegistrationForm' onSubmit={this.handleSubmit}>
                <div role='alert'>
                    {error && <p className='red'>{error}</p>}
                </div>
                <div className='full_name'>
                    <label htmlFor='RegistrationForm_fullname'>Full Name: <Required /></label>
                    <Input
                        name='full_name'
                        type='text'
                        required
                        id='RegistrationForm__full_name'
                    ></Input>
                </div>
                <div className='email_address'>
                    <label htmlFor='RegistrationForm_email'>Email Address: <Required /></label>
                    <Input
                        name='email_address'
                        type='email'
                        required
                        id='RegistrationForm__email_address'
                    ></Input>
                </div>
                <div className='username'>
                    <label htmlFor='RegistrationForm_username'>Username: <Required/></label>
                    <Input
                        name='username'
                        type='text'
                        required
                        id='RegistrationForm__username'
                    ></Input>                </div>
                <div className='password'>
                    <label htmlFor='RegistrationForm_password'>Password: <Required/> </label>
                    <Input
                        name='password'
                        type='password'
                        required
                        id='RegistrationForm__password'
                    ></Input>                </div>
                <Button type='submit'>Register</Button>

            </form>
        )
    }
}