import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import { Hyph } from '../../Utils/Utils'
import TokenService from '../../services/token-api-service'


export default class Header extends Component {

    handleLogoutClick = () => {
        TokenService.clearAuthToken();
        this.props.logout()
    }
    //renders the logout link when user is logged in
    renderLogoutLink() {
        return (
            <div className='Header__logged-in'>
                <Link onClick={this.handleLogoutClick} to='/'>Logout</Link>
                <Hyph />
                <Link to="/">Home</Link>
                <Hyph />
                <Link to="/expenses">Expenses</Link>
            </div>
        )
    }
    //renders the login and register link 
    renderLoginLink() {
        return (
            <div className='Header__not-logged-in'>
                <Link to="/">Home</Link>
                <Hyph />
                <Link to="/login">Login</Link>
                <Hyph />
                <Link to="/register">Register</Link>
            </div>
        )
    }

    render() {
        return (
            <nav className='header__nav'>
                <h1>
                    <Link to='/'>
                        Expense Tracker App
                    </Link>
                </h1>
                {TokenService.hasAuthToken()
                    ? this.renderLogoutLink()
                    : this.renderLoginLink()
                }
            </nav>
        )
    }
}