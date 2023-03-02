import React from 'react';
import "./header.scss"
import LOGO from "../assets/images/logo.svg";

function Header() {
  return (
    <header className='header'>
      <div className="header__titles-box">
        <img src={LOGO} alt="logo" className='header__logo-img' />
        <h1 className='header__title'>We are launching <strong>soon!</strong></h1>
        <p className='header__sub'>Subscribe and get notified</p>
      </div>

      <form action="#" className="cta-form">
        <input type="email" className='cta-form__email-input' placeholder='Your email address...' />
        {/* <small className='validation'>Please provide a valid email address</small> */}
        <input type="button" value="Notify Me" className='cta-form__cta-button' />
      </form>
    </header>
  );
}

export default Header;