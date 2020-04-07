import React, { Component } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import { Section } from '../../Utils/Utils'
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';

export default class LoginPage extends Component {
    static defaultProps = {
        location: {},
        history: {
            push: () => {}
        }
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
                <Section className='LoginPage'>
                    <h2>Login</h2>
                    <p>You can try the tracker out by using the demo account if you don't want to create one.</p>
                    <LoginForm onLoginSuccess={this.handleLoginSuccess} />
                </Section>
            </ErrorBoundary>
        )
    }
}