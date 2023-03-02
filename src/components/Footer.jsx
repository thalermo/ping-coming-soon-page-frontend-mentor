import React from 'react';
import './footer.scss';
import { FaFacebookF } from 'react-icons/fa';
import { SiTwitter } from 'react-icons/si';
import { SiInstagram } from 'react-icons/si';

function Footer() {
  return (
    <footer className='footer'>
      <nav className='footer-nav'>
        <ul className='footer-nav__links-list'>
          <li className='footer-nav__list-item'><a className='footer-nav__link' href="#"><FaFacebookF /></a></li>
          <li className='footer-nav__list-item'><a className='footer-nav__link' href="#"><SiTwitter /></a></li>
          <li className='footer-nav__list-item'><a className='footer-nav__link' href="#"><SiInstagram /></a></li>
        </ul>
      </nav>
      <span className='footer__copyrights'>&copy; Copyright Ping. All rights reserved.</span>
    </footer>
  )

}

export default Footer;