import React from 'react';
import DASHBOARD from "../assets/images/illustration-dashboard.png";
import "./hero.scss"

function Hero() {
  return (
    <section className='hero'>
      <img src={DASHBOARD} alt="dashboard" className='hero__dashboard-img' />
    </section>


  );
}

export default Hero;