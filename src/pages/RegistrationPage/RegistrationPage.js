import React, { Component } from 'react'
import { Section } from '../../Utils/Utils'
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';

export default class RegistrationPage extends Component {
    render() {
        return (
            <Section className='RegistrationPage'>
                <RegistrationForm />
            </Section>
        )
    }
}