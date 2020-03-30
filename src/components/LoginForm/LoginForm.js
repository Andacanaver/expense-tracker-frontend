import React, { Component } from 'react'

export default class LoginForm extends Component {
    render() {
        return (
            <form className='LoginForm'>
                <div className='username'>
                    <label htmlFor='LoginForm_username'>Username: </label>
                    <input id='LoginForm_username' name='LoginForm_username' required/>
                </div>
                <div className='password'>
                    <label htmlFor='LoginForm_password'>Password: </label>
                    <input id='LoginForm_password' name='LoginForm_password' required/>
                </div>
                <button type='submit'>Login</button>

            </form>
        )
    }
}