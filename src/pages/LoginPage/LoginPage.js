import React, { Component } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import { Section } from '../../Utils/Utils'

export default class LoginPage extends Component {
    render() {
        return (
            <Section className='LoginPage'>
                <LoginForm />
            </Section>
        )
    }
}