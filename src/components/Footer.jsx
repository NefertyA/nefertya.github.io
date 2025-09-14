import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          thanks for visiting. check out some of my other links.
        </p>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>
                <Link to="/work-experience">Work Experience</Link>
            </h2>
          </div>
          <div class='footer-link-items'>
            <h2>
                <Link to="/portfolio">Portfolio</Link>
            </h2>
          </div>
          <div class='footer-link-items'>
            <h2>
                <Link to="/contact-me">Contact Me</Link>
            </h2>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className="navbar-logo">
              Neferty Amooyan
            </Link>
          </div>
          <div class='social-icons'>
            <a
              class='social-icon-link github'
              href='https://github.com/NefertyA'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='GitHub'
            >
              <i class='fab fa-github' />
            </a>
            <a
              class='social-icon-link twitter'
              href='https://www.linkedin.com/in/neferty-amooyan-b59b09290/'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;