import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer_subscription'>
        <p className='footer-subscription-heading'>
          Follow on social handles here...
        </p>
        <p className='footer-subscription-text'>
          Join the email list here...
        </p>
        <div>
          <form>
            <input type='email' name='email' placeholder='Your Email'
              className='footer-input' />
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/About'>About</Link>
            <Link to='/About'>Contact</Link>
          </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Gallery</h2>
            <Link >Placeholder</Link>
            <Link >Placeholder</Link>
          </div>
          </div>
        </div>
        <section className='social-media'>
          <div className='social-media-wrap'>
            <div className='footer-logo'>
              <Link to='/' className='social-logo'>
                
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Footer