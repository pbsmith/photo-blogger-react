import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { Button } from './Button';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Be a part of our journey
        </p>
        <p className='footer-subscription-text'>
          Join the email list below
        </p>
        <div>
          <form>
            <input type='email' name='email' placeholder='Your Email'
              className='footer-input' />
              <Button buttonStyle='btn--outline'>Subscribe</Button>
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
                jmee
              </Link>
            </div>
            <small className='website-rights'>jmee © 2023</small>
            <div className='social-icons'>
              <Link className='social-icon-link facebook' to='/' target='_blank' aria-label='Facebook'>
                <i className='fab fa-facebook-f'></i>
              </Link>
              <Link className='social-icon-link instagram' to='/' target='_blank' aria-label='Instagram'>
                <i className='fab fa-instagram'></i>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Footer