import React, { Component } from 'react'

export default class RegistrationForm extends Component {
    render() {
        return (
            <form className='RegistrationForm'>
                <div className='fullname'>
                    <label htmlFor='RegistrationForm_fullname'>Full Name: </label>
                    <input id='RegistrationForm_fullname' name='RegistrationForm_fullname' required />
                </div>
                <div className='email'>
                    <label htmlFor='RegistrationForm_email'>Email Address: </label>
                    <input id='RegistrationForm_email' name='RegistrationForm_email' required />
                </div>
                <div className='username'>
                    <label htmlFor='RegistrationForm_username'>Username: </label>
                    <input id='RegistrationForm_username' name='RegistrationForm_username' required />
                </div>
                <div className='password'>
                    <label htmlFor='RegistrationForm_password'>Password: </label>
                    <input id='RegistrationForm_password' name='RegistrationForm_password' required />
                </div>
                <button type='submit'>Register</button>

            </form>
        )
    }
}