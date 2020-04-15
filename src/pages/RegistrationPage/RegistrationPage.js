import React, { Component } from 'react'
import { Section } from '../../Utils/Utils'
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';

export default class RegistrationPage extends Component {
    static defaultProps = {
        history: {
            push: () => {}
        },
        location: {}
    }

    handleLoginSuccess = (userId) => {
        const { location, history, login } = this.props;
        const destination = (location.state || {}).from || '/expenses';
        history.push(destination);
        login(userId);
    };
    
    render() {
        return (
            <ErrorBoundary>
                <Section className='RegistrationPage'>
                    <h2>Register</h2>
                    <RegistrationForm onLoginSuccess={this.handleLoginSuccess} />
                </Section>
            </ErrorBoundary>
        )
    }
}