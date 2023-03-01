import React from 'react';
import './footer.scss';
import { FaFacebookF } from 'react-icons/fa';
import { SiTwitter } from 'react-icons/si';
import { SiInstagram } from 'react-icons/si';

function Footer() {
  return (
    <footer className='footer'>

      <nav className='nav-footer'>
        <div className="nav-footer__link-box">
          <a className='nav-footer__logo' href="#"><FaFacebookF /></a>
        </div>
        <div className="nav-footer__link-box">
          <a className='nav-footer__logo' href="#"><SiTwitter /></a>
        </div>
        <div className="nav-footer__link-box">
          <a className='nav-footer__logo' href="#"><SiInstagram /></a>
        </div>
      </nav>

      <span className='footer__copy-right'>
        &copy; Copyright Ping. All rights reserved.
      </span>

    </footer>
  );
}

export default Footer;