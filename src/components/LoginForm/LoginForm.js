import React, { Component } from 'react'
import TokenService from '../../services/token-api-service'
import { Button, Input } from '../../Utils/Utils'
import AuthApiService from '../../services/auth-api-service'


export default class LoginForm extends Component {
    static defaultProps = {
        onLoginSuccess: () => {}
    };
    state = { error: null };

    handleSubmitJwtAuth = e => {
        e.preventDefault();
        this.setState({ error: null });
        const { username, password } = e.target

        AuthApiService.postLogin({
            username: username.value,
            password: password.value
        }).then(res => {
            if(!res.ok) {
                res.json().then(responseJson => 
                this.setState({ error: responseJson.error }))
            } else {
                username.value = ''
                password.value = ''
                res.json().then(resJson => {
                    TokenService.saveAuthToken(resJson.authToken);
                    this.props.onLoginSuccess(resJson.userId)
                })
            }
        })
    };


    render() {
        const { error } = this.state;
        return (
            <form className="LoginForm" onSubmit={this.handleSubmitJwtAuth}>
                <div role="alert">
                    {error && <p className="red">{error}</p>}
                </div>
                <div className="username">
                    <label htmlFor="LoginForm__username">User name</label>
                    <Input
                        required
                        name="username"
                        id="LoginForm__username"
                        defaultValue='demo'></Input>
                </div>
                <div className="password">
                    <label htmlFor="LoginForm__password">Password</label>
                    <Input
                        required
                        name="password"
                        type="password"
                        id="LoginForm__password"
                        defaultValue='TestPassword1!'></Input>
                </div>
                <Button type="submit">Login</Button>
            </form>
        )
    }
}