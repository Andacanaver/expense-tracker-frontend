import React, {Component} from 'react'
import './LandingPage.css'
import { Link } from 'react-router-dom'
import LandingImage from '../../landing-image.png'
export default class LandingPage extends Component {
    render() {
        return (
            <section className='landing-page'>
                <div className='landing-about'>
                    <p>This is an expense tracker app to help keep track of expenses and hopefully help to see where a user can cut back their spending or just to track what they're spending on. Click <Link to='/login'>Here</Link> to login to a demo account or click <Link to='/register'>Here</Link> to register an account.</p>
                </div>
                <div className='landing-image'>
                    <img src={LandingImage} alt='screenshot of what the expense page looks like'/>
                </div>
            </section>
        )
    }
}