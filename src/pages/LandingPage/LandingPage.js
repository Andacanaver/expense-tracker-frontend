import React, {Component} from 'react'
import './LandingPage.css'
import { Link } from 'react-router-dom'

export default class LandingPage extends Component {
    render() {
        return (
            <section className='landing-page'>
                <div>
                    <p>This is an expense tracker app to help keep track of expenses and hopefully help to see where a user can cut back their spending or just to track what they're spedning on. Click the <Link to='/login'>Login Page</Link> to login to a demo account or click the <Link to='/register'></Link></p>
                </div>
            </section>
        )
    }
}