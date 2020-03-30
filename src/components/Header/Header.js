import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import { Hyph } from '../../Utils/Utils'


export default class Header extends Component {

    renderLinks() {
        return (
            <div className='header__links'>
                <Link to="/">Home</Link>
                <Hyph />
                <Link to='/login'>login</Link>
                <Hyph />
                <Link to='/register'>Register</Link>
                <Hyph />
                <Link to='/addExpense'>Add Expense</Link>
            </div>
        )
    }

    render() {
        return (
            <nav className='header__nav'>
                <h1>
                    Expense Tracker App
                </h1>
                {this.renderLinks()}
            </nav>
        )
    }
}