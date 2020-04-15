import React, {Component} from 'react'
import './LandingPage.css'
import { Link } from 'react-router-dom'
import LandingImage from '../../landing-image.png'
import { BrowserView, MobileView, isMobile } from 'react-device-detect'
import ExpenseMobile from '../../expense-mobile.png'

export default class LandingPage extends Component {
    renderContent = () => {
        if (isMobile) {
            return <img src={ExpenseMobile} alt='mobile screenshot of expenses page' />
        }
        return <img src={LandingImage} alt='screenshot of what the expense page looks like' />
    }
    render() {
        return (
            <section className='landing-page'>
                <div className='landing-about'>
                    <p>This is an expense tracker app to help keep track of expenses and hopefully help to see where a user can cut back their spending or just to track what they're spending on. Click <Link to='/login'>Here</Link> to login to a demo account or click <Link to='/register'>Here</Link> to register an account.</p>
                </div>
                <div className='landing-image'>
                    <p>Below is a picture of what the expenses page looks like.</p>
                    {this.renderContent()}
                    
                </div>
            </section>
        )
    }
}